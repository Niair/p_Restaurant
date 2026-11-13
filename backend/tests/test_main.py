from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_menu():

    response = client.get("/menu")

    assert response.status_code == 200

    data = response.json()

    assert isinstance(data, list)

    assert len(data) > 0

    for item in data:
        assert item['available'] == True


def test_get_dish():

    response = client.get("/menu/1")

    assert response.status_code == 200

    data = response.json()

    assert data['id'] == 1

    assert data['name'] == "Honey-Glazed Salmon"

def test_missing_dish():

    response = client.get("/menu/999")

    assert response.status_code == 404

    data = response.json()

    assert data['detail'] == "Dish not Found."