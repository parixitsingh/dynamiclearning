package exampleservice

import "net/http"

type IExampleService interface {
	GetExample(*http.Request) (interface{}, error)
	PostExample(*http.Request) (interface{}, error)
	FormatCode(*http.Request) (interface{}, error)
}
