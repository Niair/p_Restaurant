#### installation

##### for html and js
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
##### for css
npm install --save-dev style-loader css-loader

#### verify installation

npm ls --depth=0

#### run the surver code

npx webpack serve --mode development

#### npm deploynment

npm run build

#### Deploy with a gh-pages branch

git subtree push
git add .
git status
git commit -m "add built site for deployment"
git subtree push --prefix dist origin gh-pages // main thing to deploy + package.json(scripts)

git rm -r --cached dist

# backend

uv init
uv add ----
.venv\Scripts\activate
uv run pyhton main.py

pip freeze > requirements.txt

git checkout -b feature/fastapi-backend  // new Branch

git branch -D fastapi-backend  // delete a branch

uv add --dev pytest httpx // add more package

cd backend,  uv run python -m pytest -v  // to run test

uv run uvicorn main:app --reload  // run backend