import {
  QueryListenerOptions,
  StructuredText,
  useQuerySubscription,
} from 'react-datocms';
import { LoginPageDocument, LoginPageModelHeaderField } from 'lib/graphql';
import { sdk } from 'lib/datocms';
import { InferGetStaticPropsType } from 'next';
import Block from 'components/Block';
import Layout from 'components/Layout';
import Input from 'components/Input';
import { useState } from 'react';
import Button from 'components/Button';

export const getStaticProps = async () => {
  const subscription: QueryListenerOptions<any, any> = {
    query: LoginPageDocument.loc?.source.body!,
    initialData: await sdk.LoginPage(),
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
 * /login Page
 */
export default function LoginPage({
  subscription,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data } = useQuerySubscription(subscription);
  const [password, setPassword] = useState<string>('');
  const login = () => {
    console.log(password);
  };

  const { loginPage, common } = data;

  return (
    <Layout {...common}>
      {loginPage.header.map((b: LoginPageModelHeaderField) => (
        <Block key={b.id} record={b} />
      ))}
      <div className="max-w-[411px] flex flex-col items-center sm:my-11 my-2">
        <div className="w-full my-4">
          <Input label="Password" onChange={v => setPassword(v)} required />
          <Button
            style={loginPage.buttonType}
            title={loginPage.buttonText}
            onClick={login}
          />
        </div>
        <div className="child-p-center">
          <StructuredText data={loginPage.content} renderBlock={Block} />
        </div>
      </div>
    </Layout>
  );
}
