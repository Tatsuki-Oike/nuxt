## プロジェクトを作成する場合

```sh
cd ./02_data
npx nuxi init pinia-proj
cd ./pinia-proj
npm install
npm install pinia @pinia/nuxt
npm run dev
cd ../..
```

nuxt.config.tsに以下を追加

```ts
export default defineNuxtConfig({
    :
    modules: [
        "@pinia/nuxt"
    ]
})
```

## 既存プロジェクトを起動させる場合

```sh
cd ./02_data/pinia-proj
npm install
npm run dev
cd ../..
```