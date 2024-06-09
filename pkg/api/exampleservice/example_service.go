package exampleservice

import (
	"dynamiclearning/pkg/models"
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
)

func NewExampleService() IExampleService {
	return &exampleService{}
}

type exampleService struct {
}

func (es *exampleService) GetExample(req *http.Request) (interface{}, error) {
	dir := `D:\MyDream\DynamicLearning\pkg\codeexamples\go\`
	example := req.URL.Query().Get("example")
	program, result := []byte{}, []byte{}
	var err error
	switch example {
	case "first":
		program, err = readProgram(dir + example)
		fmt.Printf("program %s and %v", program, err)
		if err != nil {
			return nil, err
		}
		result, err = execute(dir + example)
		fmt.Printf("result %s and %v", result, err)
		if err != nil {
			return nil, err
		}
	}
	return &models.ExampleModel{
		Program: string(program),
		Result:  string(result),
	}, nil
}

func execute(filePath string) ([]byte, error) {
	// Check if the directory exists
	if _, err := os.Stat(filePath); os.IsNotExist(err) {
		fmt.Printf("Directory does not exist: %s\n", filePath)
		return nil, errors.New("internal server error")
	}

	// Define the command and arguments
	cmd := exec.Command("go", "run", "main.go")

	// Set the directory where the command should be executed
	cmd.Dir = filePath
	fmt.Printf("executing command")
	// Run the command and capture the output
	return cmd.CombinedOutput()
}

func readProgram(filePath string) ([]byte, error) {
	// Open the file
	file, err := os.Open(filePath + `\main.go`)
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
