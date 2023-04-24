package main

import (
	"log"
	"os"

	"github.com/kyukw/piu/pkg/cmd"
)

func must(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func main() {
	app := cmd.NewApp("piu")

	hello := app.Command("hello", func(ctx *cmd.Context) {})
	{
		hello.StrOption()  //
		hello.BoolOption() //
		hello.IntOption()  ///
	}

	must(app.Run(os.Args)) // starts the server
}
