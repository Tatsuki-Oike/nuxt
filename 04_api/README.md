## バックエンドの起動

```sh
cd ./04_api/backend
python3 -m venv venv
source venv/bin/activate
python3 -m pip install --upgrade pip
pip3 install -r requirements.txt
```

* API実行

```sh
python api.py
cd ../..
```

## プロジェクトの起動

新しいターミナル

```sh
cd ./04_api/frontend
npm install
npm run dev
cd ../..
```
