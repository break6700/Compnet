 <!--1200 Words (Usually 10% rule applies)-->

<!-- Code should be comented line by line and any copied code should be referenced. Understanding is KEY!-->

<!-- One file should be submitted to SOL-->

# Computing and Networking MED503 -Hardware and Software Project and Report - AE2



## Introduction

What is the project and why build it?

Discord Bot for generating dice rolls and useful DM information.



<!--The report should:-->

<!--Provide a brief overview of the project;-->

<!--Explain the programme flow(explain how it works and the principles, not describe what you did mechanically to get the result);-->

<!--Explain the techniques and discuss their suitability (again, explain not describe);-->

<!--Include a level of reflection by the student; considering whatever difficulties they had and how they might have improved their code; -->

<!-- Be properly referenced as necessary.-->

## Background/Packages

* [ ] Discord API

Why NodeJS? - Python Discord.py



- Level of programming languages, interfaces well with Discord

Created test server for BOT

Discord Commando VS Normal = Why Commando is a bad idea!

Markdown VS Embeds - Why embeds

## Code Breakdown

Using a command handeler rather than a if/else

Use "regex" to solve bug where spaces are filled with commas during arguments


Flow diagram

Store sensitive information is config file e.g. client login. Use **Gitnore** when pushing code to exclude file



Break code into sections/functions

- Use logical variables


Breakdown into

Basic commands
index.js
anything else that isn't basicly c+p


## Analysis & Future 

Using Discord markdown VS Github Markdown = Fixed by using Syntax hylighting (CSS) in Discord

Issue with async command (Command to new) = fixed by adding harmony package

Efficiency

Issues ran into



<!-- What would I change? Different libraries/language?-->



## References
https://medium.com/davao-js/2019-tutorial-creating-your-first-simple-discord-bot-47fc836a170b - Basics
https://discordjs.guide/commando/#creating-your-index-js-file - Using the Commando Client

https://support.discordapp.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline- - Markdown excuse
https://gist.github.com/Almeeida/41a664d8d5f3a8855591c2f1e0e07b19 - Discord Syntax Hylighting
https://nodejs.org/api/fs.html - NodeJS file system man page
https://discordapp.com/developers/docs/resources/channel#embed-limits - Embeds
https://discord.js.org/#/docs/main/stable/examples/embed - FUCKING YES M8!
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor - Dice roller
