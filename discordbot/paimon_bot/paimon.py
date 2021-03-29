import discord
import paimon_utils as utils
import paimon.pyson as pyson

'''
  please use the prefix: p!
  and the token is the token.txt (capitan obvius here)
  since idk how to implement the bot with the existing code
  the commands are below... they're just 2 commands
  and the character.json is where all the data lives
  pyson is python + json to read the json file and get a dictionary
'''
token = utils.get_token()
pfx = "p!"

class MyClient(discord.Client):
  async def on_ready(self):
    print('Logged on as {0}!'.format(self.user))

  async def on_message(self, message):
    if message.author == self.user:
      return

    msg_content = message.content
    if msg_content.startswith(pfx):
      
      command = "".join(msg_content.split(pfx))

      if command.startswith("ch"):
        name_key = command.split(" ")[1]
        character = utils.get_character(name_key)
        if character != -1:
          await message.channel.send(utils.format_character(character))
        else:
          await message.channel.send("sorry but Paimon didn't understand")

      if command == "paimon":
        sended_msg = await message.channel.send("Paimon is here!")
        reactions = ["🤗", "😅"]
        for r in reactions:
          await sended_msg.add_reaction(r)


    print('Message from {0.author}: {0.content}'.format(message))
client = MyClient()
client.run(token)
