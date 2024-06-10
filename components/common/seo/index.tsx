import Head from "next/head";

const Seo = (props: any) => {
    const {
        title,
        content
    } = props || {};

    return <Head>
        <title className='flex flex-col text-center justify-center align-center'>
            {title}
        </title>
        <meta name="description" content={content} />
    </Head>
};

export default Seo;