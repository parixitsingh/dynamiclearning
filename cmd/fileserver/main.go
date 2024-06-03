package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
)

// loggingMiddleware logs each request
func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Request: %s %s", r.Method, r.URL.Path)
		next.ServeHTTP(w, r)
	})
}

// fileExists checks if a file exists and is not a directory
func fileExists(filepath string) bool {
	info, err := os.Stat(filepath)
	if os.IsNotExist(err) {
		return false
	}
	return !info.IsDir()
}

// spaHandler serves the single-page application
func spaHandler(staticPath, indexPath string) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Get the absolute path to prevent directory traversal
		path := filepath.Join(staticPath, r.URL.Path)

		// Check if the file exists and is not a directory
		if fileExists(path) {
			http.ServeFile(w, r, path)
			return
		}

		// If the file doesn't exist, serve the index file
		http.ServeFile(w, r, filepath.Join(staticPath, indexPath))
	})
}

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
	port := ":8080"
	log.Printf("Serving files from %s on HTTP port: %s\n", filepath.Clean(staticDir), port)

	// Start the server
	if err := http.ListenAndServe(port, nil); err != nil {
		log.Fatalf("Failed to start server: %s\n", err)
	}
}
