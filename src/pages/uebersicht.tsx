const Uebersicht = () => {
    return (
        <div className="px-10">
            <h1 className="font-bold text-3xl text-[#f26b1d]">Übersicht</h1>
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
            <div className="flex-shrink-0 w-full mt-20">
                <img src="/images/cover-übersicht.jpg" alt="Cover Übersicht"
                     className="w-full h-96 object-cover rounded-lg shadow-lg"/>
            </div>
            <section className="mt-20">
                <h2 className="font-medium text-3xl text-[#f26b1d]">Übersicht</h2>
                <div className="flex flex-wrap items-start my-6">
                    <p className="text-xl text-black flex-1 mr-4">
                        Der geregelte Tagesablauf mit Frühstück,
                        Morgenkreis, gemeinsamen Aktivitäten,
                        Mittagessen, Mittagsschlaf, Snacks und
                        anderen wiederkehrenden Ritualen bietet
                        den Kindern Halt und Geborgenheit.
                        Sie können dadurch schneller neue Situationen
                        und Umgebungen erkennen und wahrnehmen
                        und bewältigen, was neues Selbstvertrauen
                        und Selbstwertgefühl schafft. Durch Spielen,
                        Singen, Basteln, Toben, Tanzen, Spazierengehen
                        und andere attraktive Aktivitäten werden Sinne
                        und Motorik der (Klein-)Kinder gefördert.
                        Die Wünsche der Kinder werden selbstverständlich
                        berücksichtigt.
                    </p>
                    <img src="/images/logo.jpg" alt="Übersicht"
                         className="w-56 h-42 object-cover rounded-lg shadow-lg border-2"/>
                </div>
            </section>
            <section  className="mt-20">
                <h2 className="font-medium text-3xl text-[#f26b1d]">Räume und Umgebung</h2>
                <div className="flex flex-wrap items-start my-6">
                    <p className="text-xl text-black flex-1 mr-4">
                        Unsere Räumlichkeiten sind großzügig und kindgerecht gestaltet. Klare und verständliche
                        Strukturen und Rituale bieten Ihrem Kind eine wohltuende Sicherheit und stärken das
                        Selbstvertrauen. Die Zeit an der frischen Luft kommt bei uns nicht zu kurz. Wir entdecken
                        bei Wind und Wetter die zahlreichen Spielplätze in der Nähe oder machen Ausflüge.
                    </p>
                    <img src="/images/raume.jpg" alt="Räume und Umgebung"
                         className="w-56 h-42 object-cover rounded-lg shadow-lg"/>
                </div>
            </section>
            <section  className="mt-20">
                <h2 className="font-medium text-3xl text-[#f26b1d]">Gesundheit und Ernährung</h2>
                <p className="text-xl text-black my-6">
                    Die richtige Ernährung ist ein Grundstein, um gesund zu bleiben und sich fit zu fühlen.
                    Ich achte sehr darauf, dass ich für die Kinder abwechslungsreiche und gesunde Mahlzeiten
                    zubereite. Die Qualität und Herkunft der Lebensmittel spielt für mich eine große Rolle.
                    Der wöchentliche Speiseplan wird an der Tafel im Eingangsbereich ausgeschrieben.
                    Trinken ist sehr wichtig und wird natürlich auch nicht vergessen. Wasser steht immer zur
                    Verfügung.
                </p>
                <img src="/images/gesundheit.jpg" alt="Gesundheit und Ernährung"
                     className="w-full h-full object-cover rounded-lg shadow-lg mt-10"/>
            </section>
        </div>
    );
};

export default Uebersicht;
