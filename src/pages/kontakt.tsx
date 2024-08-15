import type { NextPage } from 'next';
import Head from 'next/head';

const Kontakt: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Kontakt - Die 5 Helden</title>
                <meta name="description" content="Kontaktinformationen für Die 5 Helden." />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <div className="px-1 md:px-8 lg:px-10 pt-28 md:pt-28 lg:pt-10">
                <h1 className="font-normal md:font-medium text-3xl text-[#f26b1d] lg:font-bold">Kontakt</h1>
                <div className="h-0.5 my-4 bg-gradient-to-r from-[#F26B1D] via-[#F2CF1D] to-[#F26B1D]"></div>
                <div className="flex justify-center">
                    <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent whitespace-nowrap" style={{
                        backgroundImage: 'linear-gradient(to right, #50D4F2 0%, #F2CF1D 25%, #F26B1D 50%, #F2911B 75%, #30D979 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Die 5 Helden
                    </h1>
                </div>
                <div className="flex-shrink-0 w-full mt-10 md:mt-20">
                    <img
                        src="/images/Kontakt1.footer.jpg"
                        alt="Kontakt"
                        className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>
                <section className="mt-10 md:mt-20">
                    <p className="font-bold text-2xl md:text-3xl">Die 5 Helden</p>
                    <p className="font-medium text-xl md:text-2xl my-4">Schillstr. 9, 47119 Duisburg</p>
                    <p className="font-medium text-xl md:text-2xl mt-10">Telefon: +49 178 7303452</p>
                    <p className="font-medium text-xl md:text-2xl">Email: Diefunfhelden@web.de</p>
                </section>
                <div className="flex justify-center items-center mt-10 md:mt-20 overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.289542931649!2d6.727022115740512!3d51.46771917962827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8be6a9d97222b%3A0xb90ae88d2fe9b7b0!2sSchillstra%C3%9Fe%209%2C%2047119%20Duisburg%2C%20Germany!5e0!3m2!1sen!2sus!4v1619477983264!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        title="Google Maps"
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Kontakt;
