import {QueryListenerOptions, useQuerySubscription} from "react-datocms";
import {MarketingPageDocument} from "lib/graphql";
import {sdk} from "lib/datocms";
import {InferGetStaticPropsType} from "next";
import Block from "components/Block";
import Layout from "components/Layout";

export const getStaticProps = async () => {
    const subscription: QueryListenerOptions<any, any> = {
        query: MarketingPageDocument.loc?.source.body!,
        initialData: await sdk.MarketingPage(),
        token: process.env.NEXT_DATO_CMS_API_TOKEN!,
        enabled: true,
    }

    return {
        props: {
            subscription,
        },
    };
}
/**
 * / page
 */
export default function MarketingPage({subscription}: InferGetStaticPropsType<typeof getStaticProps>) {
    const {
        data,
    } = useQuerySubscription(subscription);

    const {marketingpage, common} = data
    return (
        <Layout {...common} >
            {marketingpage?.content &&
                marketingpage.content.map((block: any) => <Block key={block.id} record={block}/>)
            }
        </Layout>
    )
}
