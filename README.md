# Immeasurably More

## Requirements
- 
- Node v16+ 

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
```

To build the app;
```
npm run build
```


## Linter

```
npm run lint
```

## Configuration

You should set `NEXT_DATO_CMS_API_TOKEN` env variable to an API token with view permissions.

> Note that whenever you update the schema or graphql queries you should run `npm run codegen` to update graphql client.


## DatoCMS configuration

- All the resources can be controled from DatoCMS.
- You can access the test account here https://dashboard.datocms.com/project/84434 with these credentials

email: `neonray-test@suremail.info`

password: `Test123`

## Deploy on Vercel

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Verification

Since vercel doesn't accept phone numbers from my country, I can't create a vercel account. So I deployed it on netlify instead. You can access it here.
https://gentle-jelly-760594.netlify.app
