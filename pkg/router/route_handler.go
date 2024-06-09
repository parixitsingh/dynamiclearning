package router

import (
	"encoding/json"
	"net/http"
)

type RouteHandler struct {
	pattern string
	method  string
	handler Handler
}

func (rh *RouteHandler) ServeHTTP(rw http.ResponseWriter, req *http.Request) {
	data, _ := rh.handler(req)
	dataBytes, _ := json.Marshal(data)
	rw.Write(dataBytes)
	rw.WriteHeader(http.StatusOK)
}

func NewRouteHandler(pattern, method string, handler Handler) *RouteHandler {
	return &RouteHandler{
		pattern: pattern,
		method:  method,
		handler: handler,
	}
}
