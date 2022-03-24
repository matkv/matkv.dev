---
title: "Mark active menu bold in Hugo"
type: "blog"
date: 2022-03-24T21:46:26+02:00
---

A quick summary of how I managed to set the currently active menu item bold on this website. My solution is a bit hacky but it works.
<!--more-->

This is how the menu currently looks in my ```config.toml``` file.

```toml
[menu]
  [[menu.main]]
    identifier = "home"
    name = "home"
    url = "/"
    weight = 10

  [[menu.main]]
    identifier = "about"
    name = "about"
    url = "/about"
    weight = 20

  [[menu.main]]
    identifier = "blog"
    name = "blog"
    url = "/blog"
    weight = 30  

  [[menu.main]]
    identifier = "projects"
    name = "projects"
    url = "/projects"
    weight = 40
```

In my ```navigation.html``` I already had my range function that goes through all those elements in the menu and creates a list item & link for them.

What's new now is that I added a check to see if the ```URL``` property of the current menu item is the same as ```RelPermalink``` property of the current page. I've found several other ways to do this online but haven't managed to get them to work.

```go
{{ $current := . }}
{{ range .Site.Menus.main }}
{{ $active := false}}
{{ $trimmedperma := trim $current.RelPermalink "/"}}
{{ $trimmedurl := trim .URL "/"}}
{{ $active := or $active (eq $trimmedperma $trimmedurl)}}        
```

So if the current menu is for example the blog page, the ```URL``` of the menu item will be "/blog" and the permalink of the page will have the same value. (I had to trim the slashes to make the comparison cleaner). If that is true, the ```$active``` variable will be set to true.

For the actual menu item, I added an if clause that checks if the ``$active``` variable is set and then adds a css class to the link tag of the item. The css class just has a rule to set the font to bold.

```html
class="{{ if $active }}navigation-active{{ end }}"
```

This alone would however not work if I would for example open up a specific blog post or a project from my projects list. For this I also needed to check if the section of the current page is the correct one - a blog or a project.

```go
{{ $active := or $active (and (eq $trimmedurl "blog") (eq $current.Section "blog")) }}
{{ $active := or $active (and (eq $trimmedurl "projects") (eq $current.Section "projects")) }}
```

Now, the menu items stays bold even when I open up a specific blog post or project post. I'll have to update this spot whenever I add a new archetype that has lists/subpages that can be opened.



While writing this blogpost I also finally managed to set up a **basic version of the syntax highlighting** using chroma and Pygments & managed to make it work so that it uses a different color scheme when I switch between dark and light mode. I used [this tutorial](https://hedy.tilde.cafe/posts/hugo-syntax-highlighting/) as a general guide but my implementation is basically done the same way as the dark mode / light mode switch works.

If I ever want to change a color scheme, I can just generate it using this command:

```bash
hugo gen chromastyles --style=friendly > path/to/cssfile/filename.css
```

Then I can basically just switch out the content of my current ```static/css/syntaxlight.css``` and ```static/css/syntaxdark.css``` files and easily use a different color scheme.

But I'm definitely not motivated enough to write all of that down in this post :D