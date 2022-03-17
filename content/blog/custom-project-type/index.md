---
title: "Custom project type"
type: "blog"
date: 2021-10-18T23:15:55+02:00
---


I just finally finished creating a custom type for projects. I'll quickly document what I did so that I don't forget it again.

<!--more-->


Hugo basically looks in the **"theme/matkv/archetypes"** directory to figure out what kind of content types exist for the site.

So I created a new archetype for my projects. I created a subfolder called "projects" and in this folder there is another subfolder "image" which will be used for a cover image for each project, and then just an "index.md" file for the actual content of the project site.

By using archetypes, I can set up all the tags and properties that I want my "project" type to have. I just need to do this once in the archetype and everytime I create this type of content dynamically, all the properties will be set by default.

```yaml
type: "project"
layout: "project"
coverimage: image/cover.jpg
```

In my layouts folder, I then set up a default html file that should be used by each project post. This is why it was necessary to define the "layout" parameter in the archetype. I also set up a subfolder called "projects" and defined how I want a list of these projects types to look. For example, I set up a different look for my list of projects than for my list of blog posts. This also allowed me to fix the wrong title for the blog list by creating another custom list type for all my blog posts.

In the layouts for both the list and the single page view for a project, I also used the "coverimage" parameter that I defined in the archetype to link to an image that is stored for each project in the subfolder /image/cover.jpg

Now I can already create two different kinds of content types dynamically on this website.

* blog posts: ```hugo new -k blog blog/this-is-my-title.md```
* projects: ```hugo new -k project projects/test-project```

I have to specify the file type for blog posts (.md) because otherwise hugo will create a folder which is not what I want in this case.