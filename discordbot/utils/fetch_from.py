import aiohttp
import asyncio
import json
from aiohttp import ClientTimeout

async def fetch_from(url, bot):
    session = bot.session or aiohttp.ClientSession()
    async with session.get(url, timeout=ClientTimeout(15)) as resp:
        data = await resp.read()
    return json.loads(data)