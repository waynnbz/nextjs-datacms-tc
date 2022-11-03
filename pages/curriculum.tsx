import { QueryListenerOptions, useQuerySubscription } from 'react-datocms';
import {
  CurriculumPageDocument,
  CurriculumPageModelFooterField,
  CurriculumPageModelHeaderField,
} from 'lib/graphql';
import { sdk } from 'lib/datocms';
import { InferGetStaticPropsType } from 'next';
import Block from 'components/Block';
import Layout from 'components/Layout';
import Section from 'components/Section';

export const getStaticProps = async () => {
  const subscription: QueryListenerOptions<any, any> = {
    query: CurriculumPageDocument.loc?.source.body!,
    initialData: await sdk.CurriculumPage(),
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
 * /curriculum Page
 */
export default function CurriculumPage({
  subscription,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useQuerySubscription(subscription);

  const { curriculumPage, common } = data;
  return (
    <Layout {...common}>
      {curriculumPage.header.map((b: CurriculumPageModelHeaderField) => (
        <Block key={b.id} record={b} />
      ))}
      {curriculumPage.content.map((b: CurriculumPageModelFooterField) => (
        <Block key={b.id} record={b} />
      ))}
      {curriculumPage.footer.map((b: CurriculumPageModelFooterField) => (
        <Block key={b.id} record={b} />
      ))}
    </Layout>
  );
}
