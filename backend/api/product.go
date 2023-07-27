package api

import (
	"encoding/json"
	"net/http"
	"strings"

	"gonext/models"

	"github.com/go-chi/chi"
	"github.com/jinzhu/gorm"
)

// GetProductsHandler fetches all products from the database
func GetProductsHandler(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var products []models.Product
		db.Limit(10).Find(&products)

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

// SearchProductsHandler fetches products from the database based on the search query
func SearchProductsHandler(db *gorm.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		query := r.URL.Query().Get("query")
		var products []models.Product
		db.Where("LOWER(name) LIKE ?", "%"+strings.ToLower(query)+"%").Limit(10).Find(&products)
		json.NewEncoder(w).Encode(products)
	}
}
