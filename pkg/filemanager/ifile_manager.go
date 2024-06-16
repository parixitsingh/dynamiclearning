package filemanager

type IFileManager interface {
	ReadFile(fileName, filePath string) ([]byte, error)
	ExecuteFile(fileName, filePath string, commandName string, commandArgs []string) ([]byte, error)
	ExecuteTempContent(content []byte, fileExtension string, commandName string, commandArgs []string) ([]byte, error)
}
