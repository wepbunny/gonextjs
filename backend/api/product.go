package api

import (
	"encoding/json"
	"net/http"

	"gonext/models"

	"github.com/go-chi/chi"
	"github.com/jinzhu/gorm"
)

// GetProductsHandler fetches all products from the database
func GetProductsHandler(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var products []models.Product
		db.Find(&products)

		json.NewEncoder(w).Encode(products)
	}
}

// GetProductByIDHandler fetches a single product by ID from the database
func GetProductByIDHandler(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		productID := chi.URLParam(r, "id")

		var product models.Product
		if err := db.First(&product, productID).Error; err != nil {
			http.NotFound(w, r)
			return
		}

		json.NewEncoder(w).Encode(product)
	}
}
