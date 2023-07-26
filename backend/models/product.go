package models

import "github.com/jinzhu/gorm"

// Product represents a product
type Product struct {
	gorm.Model
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Price       int    `json:"price"`
	Description string `json:"description"`
	Image       string `json:"image"`
}
