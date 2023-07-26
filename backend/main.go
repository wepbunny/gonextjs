package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"gonext/database"
	"gonext/routes"

	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	_ "github.com/go-sql-driver/mysql" // MySQL driver import
)

func main() {
	// Connect to MySQL database
	db, err := database.InitDB("goreactuser", "goreactpassword", "goreact")
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}
	defer db.Close()

	// Create a new router
	r := chi.NewRouter()

	// Create a new cors middleware handler with default options
	corsHandler := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, // Allow requests from any domain, modify as needed for production
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300, // Maximum age for cache, set to 5 minutes (300 seconds)
	})

	// Use the cors middleware
	r.Use(corsHandler.Handler)

	log.SetOutput(os.Stdout)

	// Middleware to log incoming requests
	r.Use(func(next http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			// Log the incoming request method and URL
			log.Printf("Incoming request: %s %s", r.Method, r.URL.Path)

			// Call the next handler in the chain
			next.ServeHTTP(w, r)
		})
	})

	// Register API routes
	routes.RegisterRoutes(r, db)

	// Start the server
	fmt.Println("Backend server is running on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}
