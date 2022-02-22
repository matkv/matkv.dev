---
title: "My current Rust progress"
type: "blog"
date: 2022-02-22T18:14:26+02:00
---

I started learning Rust back in December 2021. Here is a quick summary of my current progress at learning Rust.

<!--more-->

The main reason why I started learning Rust was that I wanted to learn a language that is a bit more *low-level* than the languages that I had been using so far.

The first resource that I used was the [official Rust book](https://doc.rust-lang.org/book/). Right now I'm at the **4th chapter - "Understanding Ownership"**. This is the 4th out of 21 chapters, so I definitely still have a lot to learn :D

I also started doing the [Rustlings](https://github.com/rust-lang/rustlings) exercises to get a bit more comfortable with actually using the syntax.

In order to not exclusively work on theory, I also just started my first actual Rust project. Basically I'm planning to rewrite my little tray bar program that plays a sound to wake up my studio monitor speakers in Rust. Currently I have separate versions for Linux & Windows so a cross-platform Rust solution might be a nice little beginner project, escpecially considering the program literally just plays a sound, nothing more.
 
The biggest challenge here so far has been getting the gtk dependencies that are needed to actually create the system tray icon to work. The repository for this little project can be found [here](https://github.com/matkv/beep).

Overall, I think Rust is definitely interesting, the syntax can be a bit weird at times but I'm sure that's something I'll get used to.