import type { NextPage } from 'next';
import Head from 'next/head';

const Impressum: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Impressum - Die 5 Helden</title>
                <meta name="description" content="Impressum für Die 5 Helden." />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <div className="px-1 md:px-8 lg:px-10 pt-28 md:pt-28 lg:pt-10">
                <h1 className="font-normal md:font-medium text-3xl text-[#f26b1d] lg:font-bold">Impressum</h1>
                <div className="h-0.5 my-4 bg-gradient-to-r from-[#F26B1D] via-[#F2CF1D] to-[#F26B1D]"></div>
                <div className="text-lg leading-7 text-gray-800">
                    <p className="mt-6"><strong>Angaben gemäß § 5 TMG:</strong></p>
                    <p>Verantwortliche und Inhaberin der Website:</p>
                    <p>Mahinur Gönülalan<br />
                        Schillstr.9 <br />
                        47119 Duisburg</p>
                    <p>Kontakt:<br />
                        Telefon: 0178 7303452<br />
                        E-Mail: diefunfhelden@web.de</p>
                    <p className="mt-6"><strong>Urheberrecht:</strong></p>
                    <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Inhalte Dritter werden als solche gekennzeichnet. Bei Bekanntwerden von Urheberrechtsverletzungen werden wir entsprechende Inhalte umgehend entfernen.</p>
                </div>
            </div>
        </div>
    );
};

export default Impressum;
