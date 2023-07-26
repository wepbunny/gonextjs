package database

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

var db *gorm.DB

func InitDB(username, password, dbname string) (*gorm.DB, error) {
	dbURI := fmt.Sprintf("%s:%s@tcp(database:3306)/%s?parseTime=true", username, password, dbname)
	conn, err := gorm.Open("mysql", dbURI)
	if err != nil {
		return nil, err
	}

	db = conn
	return db, nil
}

func GetDB() *gorm.DB {
	return db
}
