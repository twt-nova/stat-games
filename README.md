<a href="https://statgames.net"><img src="branding/statgames long with slogan.png"></a>

---
Please consider voting for us [here](https://twtcodejam.net/timathon/team/vote/667/)

---


## What is this?

As part of the [timathon code jam](https://twtcodejam.net/), we, team nova, created a website and discord bot which let you see statistics for a range of different games, from clash royale, to hypixel. In this read me we'll be quickly going over what this project is, how you can use it, and integrate it into your own app. 

## Getting started

To begin with using our website, you can either run it locally on your machine (instructions below) or use our live demo [here](https://statgames.net/). For the discord bot you can run it on your machine or you can try it out in our server, or in your own [here](https://statgames.net/discord). Once you get there this is how you can use it. Firstly click on the sign in button. Once you are logged in, you can choose the games that you wish to view. Incase you dont actually play one or more of these games, here are some examples with codes that you can use:

### Clash Royale

Code: #2JRLG8PUQ
> <img src="/branding/clash_royale.jpg">

### Clash of Clans

Code: #LRLVRLV8
> <img src="/branding/clash_of_clans.jpg">

### Brawl Stars

Code: #20L88L2J
> <img src="/branding/brawl_stars.jpg">

### Hypixel / Minecraft

Name: gamerboy80
> <img src="/branding/hypixel.jpg">

## Requirements:
+ Python3.8+ [download](https://python.org/downloads)
+ NodeJS 12+ [download](https://nodejs.org/en/download/)
+ NPM 7+ [download](https://nodejs.org/en/download/) 

> Note: When installing these, make sure to add them to path, so you can use them.


## Starting the app

Please create enviorment variables and configuration files before running app (mentioned below).

### Frontend

```
cd frontend
npm i
npm run dev
```

### Backend

```
cd backend
npm i
npm start --> for deployment
npm run devstart --> for development
```

### Discord Bot

```
cd discordbot
pip install -r requirements.txt
python bot.py
```

## Configuring Everything

### Frontend

1. Make a file `frontend/.env.local`
2. Add the following to the file, where you replace the client_id, client_secret, database_url with the respectable api key.
3. NEXTAUTH_URL is equal to current url of home page of application, if it's different change it:

```env
DISCORD_CLIENT_ID=client_id
DISCORD_CLIENT_SECRET=client_secret
NEXTAUTH_URL=http://localhost:3000/
DATABASE_URL=database_url
```

### Backend

1. Make a file `backend/.env`
2. Add the following to the file, where you replace the api_key with the respectable api key:

```env
PORT=3000
CLASH_ROYALE_TOKEN=api_key
CLASH_OF_CLANS_TOKEN=api_key
BRAWL_STARS_TOKEN=api_key
HYPIXEL_KEY=api_key
MONGO_URL=mongo_url
```


### Discord Bot

1. Make a file `discordbot/config.yaml`
2. Copy the contents of the config.example.yaml file and insert it into the config file. Make sure that you put in all significant details
