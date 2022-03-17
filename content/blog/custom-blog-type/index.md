---
title: "Custom blog type"
type: "blog"
date: 2021-11-06T20:46:26+02:00
---

There is a **custom blog type** for this website now - this means it is possible to create a blog post with just one command. The date, the type and the layout will be automatically set and I can basically just start typing the actual post. 

<!--more-->

I can create a blog post easily with a command like:

```
hugo new -k blog blog/custom-blog-type.md
```

Now I just need to modify the date (I need to find a way to automatically set the correct date) and it automatically sets the ```<!--more-->``` comment which is used to specify where the post summary is supposed to end.

Only content after the end of the summary will actually show up in the normal blog post, not in the blog list.