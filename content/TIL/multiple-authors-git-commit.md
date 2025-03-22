+++
title = 'Multiple authors in a git commit'
date = 2025-03-22T19:01:19+01:00
+++
It is possible to add [multiple authors to one git commit](https://github.blog/news-insights/product-news/commit-together-with-co-authors/) on Github.

You just need to add "Co-authored-by" to the end of the commit message followed by the co-authors' name and email address. This works for multiple co-authors.

```bash
git commit -m "Your commit message" -m "Co-authored-by: Name <email>"
```

This will then show up in the commit history on Github. I don't think it works on Azure DevOps.