package router

import "net/http"

func RegisterRoute(pattern, method string, handler Handler) (string, http.Handler) {
	return pattern, NewRouteHandler(pattern, method, handler)
}
