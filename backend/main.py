import json
from pathlib import Path
from pydantic import BaseModel

from fastapi import FastAPI, HTTPException

app = FastAPI()

class Dish(BaseModel):

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

@app.get("/menu", response_model=list[Dish])
def get_menu(category : str | None = None):

    menu = load_menu()

    items_name = []

    for item in menu:

        if not item['available']:
            continue

        if category and category != item['category']:
            continue

        items_name.append(item)

    return items_name


# Get based on the specific dish

@app.get("/menu/{dish_id}", response_model=Dish)
def get_dish(dish_id : int):

    menu = load_menu()

    for item in menu:

        if item['id'] == dish_id and item['available']:
            return item

    raise HTTPException (
        status_code=404,
        detail="Dish not Found."
    )