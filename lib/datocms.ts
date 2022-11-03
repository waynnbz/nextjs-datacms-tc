import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphql";

export const DATO_CMS_ENDPOINT = "https://graphql.datocms.com"

export const DATO_CMS_HEADERS = {
    Authorization: process.env.NEXT_DATO_CMS_API_TOKEN!,
};

export const client = new GraphQLClient(DATO_CMS_ENDPOINT, {
    headers: DATO_CMS_HEADERS,
});

export const sdk = getSdk(client);
