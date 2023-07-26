package routes

import (
	"gonext/api"

	"github.com/go-chi/chi"
	"github.com/jinzhu/gorm"
)

// RegisterRoutes registers API routes
func RegisterRoutes(r chi.Router, db *gorm.DB) {
	r.Get("/api/products", api.GetProductsHandler(db))
	r.Get("/api/products/{id}", api.GetProductByIDHandler(db))
}
