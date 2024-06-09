package exampleservice

import "net/http"

type IExampleService interface {
	GetExample(*http.Request) (interface{}, error)
}
