package router

import "net/http"

type Handler func(req *http.Request) (interface{}, error)
