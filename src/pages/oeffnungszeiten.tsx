// src/pages/oeffnungszeiten.tsx

const Oeffnungszeiten = () => {
    return (
        <div className="container mx-auto px-4 py-8">
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
            <img src="/images/Gesundheit und Ernährung.jpg" alt="Gesundheit und Ernährung"
                 className="w-full h-80 my-10 object-cover rounded-lg"/>
            <section className="my-8">
                <h2 className="font-medium text-3xl text-[#f26b1d] my-4">Öffnungszeiten für jeden Tag</h2>
                <p>
                    Montag: 07:00 - 16:00 Uhr<br/>
                    Dienstag: 07:00 - 16:00 Uhr<br/>
                    Mittwoch: 07:00 - 15:00 Uhr<br/>
                    Donnerstag: 07:00 - 16:00 Uhr<br/>
                    Freitag: 07:00 - 16:00 Uhr<br/>
                    und nach Vereinbarung
                </p>
            </section>
        </div>
    );
};

export default Oeffnungszeiten;
