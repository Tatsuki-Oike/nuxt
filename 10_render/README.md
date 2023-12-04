## バックエンドサーバーの起動

```sh
cd ./10_render/backend
python3 -m venv venv
source venv/bin/activate
python3 -m pip install --upgrade pip 
pip3 install -r requirements.txt
python3 api.py
```

## プロジェクトの起動

新しいターミナル

```sh
cd ./10_render/frontend
npm install
```

```sh
npm run build
HOST=127.0.0.1 node .output/server/index.mjs
```