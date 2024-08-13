import type { NextPage } from 'next';
import Head from 'next/head';

const Oeffnungszeiten: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Öffnungszeiten - Die 5 Helden</title>
                <meta name="description" content="Öffnungszeiten und Verfügbarkeit der Kindertagespflege Die 5 Helden." />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <div className="px-1 md:px-8 lg:px-10 pt-28 md:pt-28 lg:pt-10">
                <h1 className="font-normal md:font-medium text-3xl text-[#f26b1d] lg:font-bold">Öffnungszeiten</h1>
                <div className="h-0.5 my-4 bg-gradient-to-r from-[#F26B1D] via-[#F2CF1D] to-[#F26B1D]"></div>
                <div className="flex justify-center">
                    <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent" style={{
                        backgroundImage: 'linear-gradient(to right, #50D4F2 0%, #F2CF1D 25%, #F26B1D 50%, #F2911B 75%, #30D979 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Die 5 Helden
                    </h1>
                </div>
                <section className="flex-shrink-0 w-full mt-10 md:mt-20">
                    <div className="relative flex justify-center">
                        <img src="/images/Oeffnungszeiten2.jpg" alt="Öffnungszeiten" className="rounded-lg shadow-lg w-full h-64 md:h-full object-cover" />
                        <div className="absolute top-1/4 w-full h-full flex items-start justify-center pt-8">
                            <div className="text-3xl text-[#333] bg-white bg-opacity-75 p-4">
                                <h2 className="font-medium text-4xl md:text-5xl text-[#0774C3] flex justify-center">Öffnungszeiten</h2>
                                <div className="mt-8 md:mt-12">
                                    <p><span className="inline-block w-36 md:w-44 py-4">Montag:</span><span>| 07:00 - 16:00 Uhr</span></p>
                                    <p><span className="inline-block w-36 md:w-44 py-4">Dienstag:</span><span>| 07:00 - 16:00 Uhr</span></p>
                                    <p><span className="inline-block w-36 md:w-44 py-4">Mittwoch:</span><span>| 07:00 - 16:00 Uhr</span></p>
                                    <p><span className="inline-block w-36 md:w-44 py-4">Donnerstag:</span><span>| 07:00 - 16:00 Uhr</span></p>
                                    <p><span className="inline-block w-36 md:w-44 py-4">Freitag:</span><span>| 07:00 - 16:00 Uhr</span></p>
                                    <span className="w-36 md:w-44 pl-10">und nach Vereinbarung</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Oeffnungszeiten;
