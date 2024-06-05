package main

import (
	"log"
	"net/http"
	"path/filepath"
)

func main() {
	// Define the directory to serve files from
	mainDir := "../../dynamic-learning/build"
	staticDir := mainDir + "/static"

	// Create a file server handler
	fileServer := http.FileServer(http.Dir(staticDir))

	// Set up the main route to serve files
	http.Handle("/static/", http.StripPrefix("/static", loggingMiddleware(fileServer)))

	// Serve the single-page application
	http.Handle("/", spaHandler(mainDir, "index.html"))

	// Define the port to listen on
	port := ":8081"
	log.Printf("Serving files from %s on HTTP port: %s\n", filepath.Clean(staticDir), port)

	// Start the server
	if err := http.ListenAndServe(port, nil); err != nil {
		log.Fatalf("Failed to start server: %s\n", err)
	}
}
