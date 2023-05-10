package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/kynisk/piu/pkg/cmd"
)

func must(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func defaultApplicationArgs(args ...string) []string {
	if len(os.Args) > 1 {
		return os.Args
	}

	return append(os.Args, args...)
}

func main() {
	app := cmd.NewApp()

	app.Command("run", func(ctx *cmd.Context) {
		app := gin.Default()

		api := app.Group("/api")
		{
			api.GET("/categories", func(ctx *gin.Context) {
				ctx.JSON(http.StatusOK, gin.H{
					"Ping": true,
				})
			})
		}

		must(app.Run("localhost:8080"))
	})

	args := defaultApplicationArgs("run")

	must(app.Run(args)) // starts the server
}
