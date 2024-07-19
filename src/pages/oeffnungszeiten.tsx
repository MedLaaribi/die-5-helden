// src/pages/oeffnungszeiten.tsx

const Oeffnungszeiten = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center my-8">Öffnungszeiten</h1>
            <section className="my-8">
                <h2 className="text-3xl font-semibold my-4">Öffnungszeiten für jeden Tag</h2>
                <p>
                    Montag: 07:00 - 16:00 Uhr<br />
                    Dienstag: 07:00 - 16:00 Uhr<br />
                    Mittwoch: 07:00 - 15:00 Uhr<br />
                    Donnerstag: 07:00 - 16:00 Uhr<br />
                    Freitag: 07:00 - 16:00 Uhr<br />
                    und nach Vereinbarung
                </p>
            </section>
        </div>
    );
};

export default Oeffnungszeiten;
