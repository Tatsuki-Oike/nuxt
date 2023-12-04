## プロジェクトを作成する場合

```sh
cd ./06_crud
npx nuxi init crud-proj
cd ./crud-proj
npm install
```

```sh
npm install prisma
npm install uuid
npm i --save-dev @types/uuid
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
cd ./06_crud/crud-proj
npm install
npx prisma migrate dev
npm run dev
cd ../
```