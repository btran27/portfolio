import os
from pymongo import MongoClient

# MongoDB setup
client = MongoClient("mongodb+srv://btran:aaNW563zH7f24L3l@tran0.f3difkh.mongodb.net/")
db = client["test"]
collection = db["test1"]

# Folder containing .txt files
folder_path = "./recipes"

# Process each .txt file in the folder
for filename in os.listdir(folder_path):
  if filename.endswith(".txt"):
    file_path = os.path.join(folder_path, filename)
    with open(file_path, "r", encoding="utf-8") as file:
      content = file.read()
      parts = content.split("\n\n")
      
      if len(parts) >= 3:
        food_name = parts[0].strip()
        ingredients = parts[1].strip()
        instructions = parts[2].strip()
        
        # Insert into MongoDB
        recipe = {
          "food_name": food_name,
          "ingredients": ingredients,
          "instructions": instructions
        }
        collection.insert_one(recipe)

print("Recipes have been added to the database.")