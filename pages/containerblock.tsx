import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ContainerBlock({children, ...customMeta}) {
const router = useRouter();

const meta = {
    title: '',
    description: '',
    image: '',
    type: 'website',
    ...customMeta,
};

return(
    <div>
    <Head>
        <title>{meta.title}</title>
        <meta name='' content = '' />
        <meta content={meta.description} name='description'/>
        <meta
        property='og:url'
        content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
        rel='canonical'
        href={ `https://yourwebsite.com${router.asPath}`}
        />
    </Head>
    </div>
);

}