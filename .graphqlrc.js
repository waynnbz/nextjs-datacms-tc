require("@next/env").loadEnvConfig(".");

module.exports = {
  schema: {
    "https://graphql.datocms.com": {
      headers: {
        Authorization: process.env.NEXT_DATO_CMS_API_TOKEN,
      },
    },
  },
  documents: "lib/graphql/**/*.gql",
  extensions: {
    codegen: {
      overwrite: true,
      generates: {
        "lib/graphql/index.ts": {
          plugins: [
            "typescript",
            "typescript-graphql-request",
            "typescript-operations",
          ],
          config: {
            dedupeFragments: true,
            pureMagicComment: true,
            exportFragmentSpreadSubTypes: true,
            namingConvention: "keep",
          },
        },
      },
    },
  },
};
