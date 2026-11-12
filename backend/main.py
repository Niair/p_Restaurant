import json
from pathlib import Path
from pydantic import BaseModel

from fastapi import FastAPI, HTTPException

app = FastAPI()

class items(BaseModel):

    id: int
    name: str
    description: str
    price: int
    category: str
    available: bool

def load_menu():

    file_path = Path(__file__).parent / "menu.json"

    with open(file_path, "r", encoding="utf-8") as file:
        menu = json.load(file)

    return menu

@app.get("/menu/{dish_id}", response_model=list[items])
def get_menu(dish_id, category : str | None = None):

    menu = load_menu()

    items_name = []

    for item in menu:

        if item['id'] == dish_id and item['available']:

            if category and category != item['category']:
                continue

        items_name.append(item)

    return items_name

# Get 
@app.get("/menu/{dish_id}")
def get_dish(dish_id):

    menu = load_menu()

    for item in menu:

        if item['id'] == dish_id and item['available']:
            return item

    raise HTTPException (
        status_code=404,
        detail="Dish not Found."
    )