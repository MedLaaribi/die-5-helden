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
                        <img
                            src="/images/Oeffnungszeiten2.jpg"
                            alt="Öffnungszeiten"
                            className="rounded-lg shadow-lg w-full h-full object-cover"
                        />
                        <div className="absolute top-4 md:top-12 lg:top-16 w-full h-full flex items-start justify-center">
                            <div className="text-3xl text-[#333] bg-opacity-75 p-3">
                                <h2 className="font-medium text-lg md:text-3xl lg:text-4xl text-[#0774C3] flex justify-center">
                                    Öffnungszeiten
                                </h2>
                                <div className="ml-8 md:ml-8 lg:ml-16 mt-2 md:mt-6 lg:mt-10 ">
                                    <p className="font-medium text-sm md:text-2xl lg:text-3xl pb-2.5 md:pb-6 lg:pb-8">
                                        <span>Montag:</span><span>| 07:00 - 16:00 Uhr</span>
                                    </p>
                                    <p className="font-medium text-sm md:text-2xl lg:text-3xl pb-2.5 md:pb-6 lg:pb-8">
                                        <span>Dienstag:</span><span>| 07:00 - 16:00 Uhr</span>
                                    </p>
                                    <p className="font-medium text-sm md:text-2xl lg:text-3xl pb-2.5 md:pb-6 lg:pb-8">
                                        <span>Mittwoch:</span><span>| 07:00 - 16:00 Uhr</span>
                                    </p>
                                    <p className="font-medium text-sm md:text-2xl lg:text-3xl pb-2.5 md:pb-6 lg:pb-8">
                                        <span>Donnerstag:</span><span>| 07:00 - 16:00 Uhr</span>
                                    </p>
                                    <p className="font-medium text-sm md:text-2xl lg:text-3xl pb-2.5 md:pb-6 lg:pb-8">
                                        <span>Freitag:</span><span>| 07:00 - 16:00 Uhr</span>
                                    </p>
                                    <p className="font-medium text-sm md:text-2xl lg:text-3xl pb-2.5 md:pb-6 lg:pb-8">
                                       <span> und nach Vereinbarung </span>
                                    </p>
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
