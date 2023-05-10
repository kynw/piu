package cmd

type cmd struct {
	Name  string
	Alias []string

	Action Action

	Options
}

type Commands []*cmd

// func Command() string {}

func Alias(alias ...string) []string {
	return alias
}
