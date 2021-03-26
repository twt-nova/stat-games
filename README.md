<img src="branding/statgames long with slogan.png">

---

## What is this?

As part of the timathon code jam, we, team nova, created a website which lets you see statistics for a multitude of different games, ranging from clash royale, to hypixel. In this read me we'll be quickly going over what this website is, how you can use it, and integrate it into your own app.

## Getting started

To begin with using our website, you can either run it locally on your machine (instructions below) or use our live demo [here](https://statgames.net/). Once you get there this is how you can use it. Firstly click on the sign in button. Once you are logged in, you can choose the games that you wish to view. Incase you dont actually play one or more of these games, here are some examples with codes that you can use:

### Clash Royale

> Code: #2JRLG8PUQ
> <img src="/branding/clash_royale.jpg">

### Clash of Clans

> Code: #LRLVRLV8
> <img src="/branding/clash_of_clans.jpg">

### Brawl Stars

> CODE: #EXAMPLE
> <img src="/branding/brawl_stars.jpg">

### Hypixel / Minecraft

> Name: gamerboy80
> <img src="/branding/hypixel.jpg">

## Starting the app

Please create .env files before running app.

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

## Creating enviorment variables

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
