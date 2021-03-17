import aiohttp
import asyncio


async def fetch_from(url, bot):
    session = bot.session or aiohttp.ClientSession()
    async with session.get(url) as resp:
        return await resp.json()
