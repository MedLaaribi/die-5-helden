// src/pages/oeffnungszeiten.tsx

const Oeffnungszeiten = () => {
    return (
        <div className="px-10">
            <h1 className="font-bold text-3xl text-[#f26b1d]">Öffnungszeiten</h1>
            <div className="h-0.5 my-4 bg-gradient-to-r from-[#F26B1D] via-[#F2CF1D] to-[#F26B1D]"></div>
            <div className="flex justify-center">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent" style={{
                    backgroundImage: 'linear-gradient(to right, #50D4F2 0%, #F2CF1D 25%, #F26B1D 50%, #F2911B 75%, #30D979 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    Die 5 Helden
                </h1>
            </div>

            <section className="mt-20">
                <div className="relative flex justify-center">
                    <img src="/images/Oeffnungszeiten2.jpg" alt="Öffnungszeiten" className="rounded-lg shadow-lg w-full h-full object-cover mt-20" />
                    <div className="absolute top-40 w-full h-full flex items-start justify-center pt-8">
                        <div className="text-3xl  text-[#333] bg-white bg-opacity-75 p-4">
                            <h2 className="font-medium text-5xl text-[#0774C3] flex  justify-center">Öffnungszeiten</h2>
                            <div className="mt-12">
                                <p><span className="inline-block w-44 py-6">Montag:</span><span>| 07:00 - 16:00 Uhr</span></p>
                                <p><span className="inline-block w-44 py-6">Dienstag:</span><span>| 07:00 - 16:00 Uhr</span></p>
                                <p><span className="inline-block w-44 py-6">Mittwoch:</span><span>| 07:00 - 15:00 Uhr</span></p>
                                <p><span className="inline-block w-44 py-6">Donnerstag:</span><span>| 07:00 - 16:00 Uhr</span></p>
                                <p><span className="inline-block w-44 py-6">Freitag:</span><span>| 07:00 - 16:00 Uhr</span></p>
                                <span className=" w-44 pl-10"> und nach Vereinbarung </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Oeffnungszeiten;
