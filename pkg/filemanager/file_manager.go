package filemanager

import (
	"errors"
	"fmt"
	"io"
	"os"
	"os/exec"
)

type fileManager struct{}

func NewFileManager() IFileManager {
	return &fileManager{}
}

func (fm *fileManager) ReadFile(fileName, filePath string) ([]byte, error) {
	// Open the file
	file, err := os.Open(filePath + `\` + fileName)
	if err != nil {
		fmt.Printf("Error opening file: %s\n", err)
		return nil, err
	}
	defer file.Close()

	// Read the file
	data, err := io.ReadAll(file)
	if err != nil {
		fmt.Printf("Error reading file: %s\n", err)
		return nil, err
	}

	return data, nil
}

func (fm *fileManager) ExecuteTempContent(content []byte, fileExtension string, commandName string, commandArgs []string) ([]byte, error) {
	// Step 1: Create a temporary file
	dir := `D:\MyAim\DynamicLearning\pkg\codeexamples`
	fileName := "temp*.go"
	tmpFile, err := os.CreateTemp(dir, fileName)
	if err != nil {
		fmt.Println("Error creating temporary file:", err)
		return nil, err
	}
	defer os.Remove(tmpFile.Name()) // Ensure the file is deleted

	// Step 2: Write to the temporary file
	if _, err := tmpFile.Write(content); err != nil {
		fmt.Println("Error writing to temporary file:", err)
		return nil, err
	}

	// Close the file so it can be executed
	if err := tmpFile.Close(); err != nil {
		fmt.Println("Error closing temporary file:", err)
		return nil, err
	}

	// Make the temporary file executable
	if err := os.Chmod(tmpFile.Name(), 0755); err != nil {
		fmt.Println("Error making temporary file executable:", err)
		return nil, err
	}

	// Step 3: Execute the temporary file
	return fm.ExecuteFile(tmpFile.Name(), dir, commandName, commandArgs)
}

func (fm *fileManager) ExecuteFile(fileName, filePath string, commandName string, commandArgs []string) ([]byte, error) {
	// Check if the directory exists
	if _, err := os.Stat(filePath); os.IsNotExist(err) {
		fmt.Printf("Directory does not exist: %s\n", filePath)
		return nil, errors.New("internal server error")
	}

	// Define the command and arguments
	commandArgs = append(commandArgs, fileName)
	cmd := exec.Command(commandName, commandArgs...)

	// Set the directory where the command should be executed
	cmd.Dir = filePath
	fmt.Println("executing command")
	// Run the command and capture the output
	out, err := cmd.CombinedOutput()
	fmt.Println(out, err)
	return out, err
}
