package exampleservice

import (
	"dynamiclearning/pkg/filemanager"
	"dynamiclearning/pkg/models"
	"encoding/json"
	"fmt"
	"go/format"
	"io"
	"net/http"
)

func NewExampleService() IExampleService {
	return &exampleService{
		fileManager: filemanager.NewFileManager(),
	}
}

type exampleService struct {
	fileManager filemanager.IFileManager
}

func (es *exampleService) GetExample(req *http.Request) (interface{}, error) {
	dir := `D:\MyDream\DynamicLearning\pkg\codeexamples\go\`
	example := req.URL.Query().Get("example")
	program, result := []byte{}, []byte{}
	var err error
	switch example {
	case "first":
		program, err = es.fileManager.ReadFile("main.go", dir+example)
		fmt.Printf("program %s and %v", program, err)
		if err != nil {
			return nil, err
		}
		result, err = es.fileManager.ExecuteFile("main.go", dir+example, "go", []string{"run"})
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

func (es *exampleService) PostExample(req *http.Request) (interface{}, error) {
	// dir := `D:\MyDream\DynamicLearning\pkg\codeexamples\go\first`
	example := req.URL.Query().Get("example")
	result := []byte{}
	var body []byte
	var err error
	switch example {
	case "custom":
		body, err = io.ReadAll(req.Body)
		if err != nil {
			return nil, err
		}
		var bodyStr string
		json.Unmarshal(body, &bodyStr)

		defer req.Body.Close()
		result, err = es.fileManager.ExecuteTempContent([]byte(bodyStr), "go", "go", []string{"run"})
		fmt.Printf("result %s and error %v", result, err)
		if err != nil && result == nil {
			return nil, err
		}
	}

	out := &models.ExampleModel{
		Result: string(result),
	}

	if err != nil {
		out.Err = err.Error()
	}
	return out, nil
}

func (es *exampleService) FormatCode(req *http.Request) (interface{}, error) {
	// Format the source code
	body, err := io.ReadAll(req.Body)
	if err != nil {
		return nil, err
	}
	var bodyStr string
	json.Unmarshal(body, &bodyStr)

	defer req.Body.Close()

	formattedSource, err := format.Source([]byte(bodyStr))
	if err != nil {
		fmt.Println("Error formatting source:", err)
		return &models.ExampleModel{
			Err: err.Error(),
		}, nil
	}
	return &models.ExampleModel{
		Program: string(formattedSource),
	}, nil
}
