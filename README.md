# Hobeltech Site Monorepo]

## Getting started

```sh
rush install

rush update
rush rebuild

cd apps/site
rushx dev
```

## Deploying site

```sh
rush install
rush build
rush deploy --overwrite
```

Then you can copy `common/deploy` and run site from there using `rushx start`.
