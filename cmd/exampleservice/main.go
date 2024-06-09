package main

import (
	"dynamiclearning/pkg/api/exampleservice"
	"dynamiclearning/pkg/router"
	"log"
	"net/http"
)

// CORS middleware

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Println("Handling CORS for", r.Method, r.URL.Path)

		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		log.Println("Set CORS headers")
		for key, values := range w.Header() {
			for _, value := range values {
				log.Printf("Header: %s: %s\n", key, value)
			}
		}

		// Handle preflight request
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func main() {
	// Service instance
	es := exampleservice.NewExampleService()

	// Define the port to listen on
	port := ":8081"
	log.Printf("Serving files from example service on HTTP port: %s\n", port)

	mux := http.NewServeMux()
	mux.Handle(router.RegisterRoute("/letstry/*", http.MethodGet, es.GetExample))
	// Start the server
	if err := http.ListenAndServe(port, enableCORS(mux)); err != nil {
		log.Fatalf("Failed to start server: %s\n", err)
	}
}
