import json
import os

# returns a python dictionary
def read_json(path):
  with open(path, "r") as f:
    return json.loads(f.read())

# generates the json file
def write_json(path, data):
  with open(path, "w") as f:
    f.write(json.dumps(data))
