// src/pages/kontakt.tsx


const kontakt = () => {
    return (
        <>
            <div className="px-10">
                <h1 className="font-bold text-3xl text-[#f26b1d]">Kontakt</h1>
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
                <div className="flex-shrink-0 w-full">
                    <img src="/images/raume.jpg" alt="Gesundheit und Ernährung"
                         className="w-full h-96 my-8 object-cover rounded-lg shadow-lg"/>
                </div>
                <p>Die 5 Helden</p>
                <p>Schillstr. 9, 47119 Duisburg</p>
                <p>Telefon: +49 178 7303452</p>
                <p>Email: exemple@gmail.com</p>
            </div>

        </>
    );
};

export default kontakt;
