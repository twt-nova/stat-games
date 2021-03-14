# Stat Games
A website to view all of your favorite games' stats

---

## What is this?
As part of the timathon code jam, we, team nova, created a website which lets you see statistics for a multitude of different games, ranging from clash royale, to hypixel. In this read me we'll be quickly going over what this website is, how you can use it, and integrate it into your own app. 

## Getting started
To begin with using our website, you can either run it locally on your machine (instructions below) or use our live demo [here](https://statgames.net/). Once you get there this is how you can use it. Firstly click on the sign in button. Once you are logged in, you can choose the games that you wish to view. Incase you dont actually play one or more of these games, here are some examples with codes that you can use:

### Clash Royale
> Code: #EXAMPLE
<img src="/imgs/clash_royale.jpg">

### Clash of Clans
> Code: #EXAMPLE
<img src="/imgs/clash_of_clans.jpg">

### Brawl Stars
> ID: 123456
<img src="/imgs/brawl_stars.jpg">

### Hypixel
> Name: gamerboy80
<img src="/imgs/hypixel.jpg">


## Starting the app
### Frontend
```
cd frontend
npm i
npm start
```
### Backend
```
cd backend
npm i
npm start --> for deployment
npm run devstart --> for development
```

## Creating enviorment variables
1. Make a file `backend/.env`
2. Add the following to the file, where you replace the api_key with the respectable api key:

```env
PORT=3000
CLASH_ROYALE_TOKEN=api_key
CLASH_OF_CLANS_TOKEN=api_key
BRAWL_STARS_TOKEN=api_key
HYPIXEL_KEY=api_key
```
