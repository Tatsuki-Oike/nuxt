## プロジェクトを作成する場合

```sh
cd ./07_error
npx nuxi init error-proj
cd ./error-proj
npm install
```

```sh
npm install prisma
npm install uuid
npx prisma init
```
schema.prismaファイルの編集
```sh
npx prisma migrate dev
# npx prisma generate
```

```sh
npm run dev
cd ../
```

## 既存プロジェクトを起動させる場合

```sh
cd ./07_error/error-proj
npm install
npx prisma migrate dev
npm run dev
cd ../
```