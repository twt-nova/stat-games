import aiohttp
import asyncio
import json

async def fetch_from(url, bot):
    session = bot.session or aiohttp.ClientSession()
    async with session.get(url) as resp:
        data = await resp.read()
    return json.loads(data)