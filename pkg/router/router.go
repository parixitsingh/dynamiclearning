package router

import (
	"fmt"
	"net/http"
)

type Router struct {
	routes map[string]*RouteHandler
}

func NewRouter() *Router {
	return &Router{
		routes: make(map[string]*RouteHandler),
	}
}

func (r *Router) RegisterRoute(pattern, method string, handler Handler) {
	if r.routes[pattern] != nil {
		r.routes[pattern].RegisterHandler(method, handler)
	} else {
		routeHandler := NewRouteHandler()
		routeHandler.RegisterHandler(method, handler)
		r.routes[pattern] = routeHandler
	}
}

func (r *Router) ServeHTTP(rw http.ResponseWriter, req *http.Request) {
	fmt.Println(req.URL.Path)
	req.Body = http.MaxBytesReader(rw, req.Body, 1048576)
	r.routes[req.URL.Path].ServeHTTP(rw, req)
}
