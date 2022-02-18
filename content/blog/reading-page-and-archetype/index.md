---
title: "Reading page and archetype"
type: "blog"
date: 2022-02-18T12:00:00+00:00
---

I'm exhausted but I managed to set up a page for my **book reviews / reading list**! I actually wrote a little C# program to automatically convert the exported csv from Goodreads into Markdown files that have the exact format that I need for this website.
<!--more-->

The finished result can be seen [here](https://matkobusljeta.com/reading)!

This was actually the first *useful* program that I wrote with .NET core, haha. I used the [CsvHelper](https://joshclose.github.io/CsvHelper/) library to read the exported csv. Overall the code is definitely not very clean because this whole project was just meant to be a quick one-time way to convert my Goodreads list into the markdown files. Initially I thought about keeping that project public & open source but considering I used that library I just don't wanna deal with looking up all the license stuff to be honest.

I created **custom parameters** for the book hugo archetype that were filled out automatically by my C# "book" object in the program:

* book title
* author
* date finished
* publication year
* my rating
* my review

The hardest part about this little project was actually cleaning up the csv file that was exported. I had issues with the double quotes, it used "," instead of ";" as the separator which made things unnecessary difficult when splitting the values up and the book titles also had some formatting issues that I needed to clean up with the code.

All in all I feel like I learned quite a bit doing this, I definitely understand the archetypes better now and I'm able to get things done more quickly in Hugo now. I don't think I'll really need to use this custom program again because now I can just create a new book review with the normal "hugo new -k book reading/enter-book-title-here" command and then I should already get a nicely formatted markdown file with all the necessary properties that I just need to fill out.

This was definitely a fun little project and I'm happy that it worked out so well :D