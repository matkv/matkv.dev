+++
title = 'Trying out local LLMs'
date = 2025-06-12T18:17:48+02:00
draft = false
show_date = true
tags = ['AI', 'LLMs', 'tools']
archive = false
pinned = false
+++

I've been trying out local LLMs for the first time this weekend. I installed [Ollama](https://ollama.com/) locally on Windows and then downloaded two models just to play around with them: Deepseek R1 & LLama 2 Uncensored.

I wrote a little [tutorial](https://wiki.matkv.dev/local-llms) for myself that lets me download Ollama & the models to a different drive than the default location because they take up quite a bit of storage space. I also think it's wild that you basically need as much free **RAM** as the **size of the model** in order to run it. So for the models with huge amounts of parameters you need some pretty insane setups.

Overall I think it's pretty cool that you can run an LLM completely locally - basically without any restrictions on how often you can ask a question (in comparison to chatGPT for example), and also with faster response times - the LLama 2 model responds pretty much instantaneously for me. The Deepseek model seems to show it's thinking process in greyed out text for quite a while before actually answering. So this could be a cool way to still have a local copilot even when I don't have internet access. Fun to mess around with it in any case.

I read that these local models are supposed to be a bit less restricted & uncensored in comparison to the online models but from playing around with it that hasn't really been the case for me. Maybe I need to try other models for that.

Maybe I'll have an idea for a usecase for a local LLM in a software project, can't think of anything specific yet though.