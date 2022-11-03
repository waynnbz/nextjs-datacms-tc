import { QueryListenerOptions, useQuerySubscription } from 'react-datocms';
import {
  LeaderPageDocument,
  LeaderPageModelFooterField,
  LeaderPageModelHeaderField,
} from 'lib/graphql';
import { sdk } from 'lib/datocms';
import { InferGetStaticPropsType } from 'next';
import Block from 'components/Block';
import Layout from 'components/Layout';
import Section from 'components/Section';

export const getStaticProps = async () => {
  const subscription: QueryListenerOptions<any, any> = {
    query: LeaderPageDocument.loc?.source.body!,
    initialData: await sdk.LeaderPage(),
    token: process.env.NEXT_DATO_CMS_API_TOKEN!,
    enabled: true,
  };

  return {
    props: {
      subscription,
    },
  };
};
/**
 * /Leader Page
 */
export default function LeaderPage({
  subscription,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useQuerySubscription(subscription);

  const { leaderPage, common } = data;
  return (
    <Layout {...common}>
      {leaderPage.header.map((b: LeaderPageModelHeaderField) => (
        <Block key={b.id} record={b} />
      ))}
      {leaderPage.content.map((b: LeaderPageModelFooterField) => (
        <Block key={b.id} record={b} />
      ))}
      {leaderPage.footer.map((b: LeaderPageModelFooterField) => (
        <Block key={b.id} record={b} />
      ))}
    </Layout>
  );
}
