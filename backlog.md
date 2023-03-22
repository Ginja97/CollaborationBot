# TODO
- 

# Pineline

## Create Auto Scheduler - every x seconds/minutes check if tasks are to be done
- runs in background
- singleton
- sorted task queue on a database
- use to push and pop jobs
- (group of) background worker retrieves tasks via singleton scheduler


## auto redeemer - honey, genshin (ich+sasha)

## Haushaltsbuch Transaktionen
- interface to enter and temporarily store transactions for my money managing tool
- either per text command or (better?) click/touch interface? -> ausgabe/einnahme -> date automatically generated, just have to click ok -> amount, input via numpad -> art, autocompletion mode -> conform categories -> checkings account
- perspective: automatically enter all transactions into a database and rebuild full money managing tool

## Genshin Code Scraper
- scrape all posts that contain "code" in the genshin subreddit
- post into discord server via discord API

## archive discord messages
- archive discord chats every so often (once a day/week?)
- save messages, pictures etc

## Twitch Live Alert
- notify when one of my fav streamers (twicth/youtube) goes live
- store in list (channel, platform)
- notify vie discord

## Washing Machine reminder
- pull we-wash website every few seconds
- notify me on discord when its done
- *failsave:* notify me when it cant pull website (website error or no expected data found)

## Reminder
- Discord Bot
- `/remind 1h Wäsche rausnehmen`
- `/remind @Ginja97 tomorrow 8am essen mitnehmen`
- Format: $/remind [@user] date [time]/time message$
- $date - date/"tomorrow"/"in 2 days/weeks/years"$
- $time - "8am"/"9 pm"/"11:30 pm"/"15:34"$

## Date Roller
- roll a random number and choses a random date (out of a customizable list)

## True Safety
- implement JWT