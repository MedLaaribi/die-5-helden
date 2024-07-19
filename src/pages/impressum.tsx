import type { NextPage } from 'next';
import Head from 'next/head';

const Impressum: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Impressum - Die 5 Helden</title>
                <meta name="description" content="Das Impressum von Die 5 Helden." />
            </Head>
            <main className="px-10">
                <h1 className="font-bold text-[24px] text-[#f26b1d]">Impressum</h1>
                <p className="text-[18px] text-black mt-4">
                    Hier ist das Impressum von Die 5 Helden.
                </p>
            </main>
        </div>
    );
};

export default Impressum;
