import { AppProps } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';
import { PageWithLayout } from '../src/types';
import DefaultLayout from '../src/layouts/DefaultLayout';

type MyAppPropsComponent<P = {}> = NextComponentType<NextPageContext, any, P> & PageWithLayout;

type MyAppProps<P = {}> = AppProps & {
    Component: MyAppPropsComponent<P>
};

function MyApp({ Component, pageProps }: MyAppProps) {
    const Layout = Component.Layout || DefaultLayout;
    return <Layout><Component {...pageProps} /></Layout>;
}

export default MyApp