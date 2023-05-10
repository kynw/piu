package cmd

import (
	"fmt"
	"os"
	"path/filepath"
)

type App struct {
	Usage string

	ScanConfigPaths []string

	Commands
}

type Action func(*Context)

func (c *App) Command(name string, action Action) {
	c.Commands = append(c.Commands, &cmd{
		Name:   name,
		Action: action,
	})
}

func (c *App) Run(args []string) error {

	command := args[1]
	var action Action

	for _, v := range c.Commands {
		if v.Name == command {
			action = v.Action
		}
	}

	if action == nil {
		return fmt.Errorf("not found `%s` command", command)
	}

	ctx := &Context{}
	action(ctx)

	return nil
}

func NewApp() *App {

	return &App{
		Usage: filepath.Base(os.Args[0]),
	} // new a
}
