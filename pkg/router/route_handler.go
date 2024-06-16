package router

import (
	"encoding/json"
	"net/http"
)

type RouteHandler struct {
	handlers map[string]Handler
}

func (rh *RouteHandler) ServeHTTP(rw http.ResponseWriter, req *http.Request) {
	if rh.handlers[req.Method] == nil {
		rw.WriteHeader(http.StatusMethodNotAllowed)
		return
	}
	data, _ := rh.handlers[req.Method](req)
	dataBytes, _ := json.Marshal(data)
	rw.Write(dataBytes)
	rw.WriteHeader(http.StatusOK)
}

func NewRouteHandler() *RouteHandler {
	return &RouteHandler{
		handlers: make(map[string]Handler),
	}
}

func (rh *RouteHandler) RegisterHandler(method string, handler Handler) {
	rh.handlers[method] = handler
}
