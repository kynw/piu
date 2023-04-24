package cmd

type App struct {
	Usage string

	ScanConfigPaths []string

	Commands
}

type Action func(*Context)

func (c *App) Command(name string, action Action) {}

func (c *App) Run(args []string) error {
	return nil
}

func NewApp(usage string) *App {
	return &App{
		Usage: usage,
	} // new a
}
