import type {NextPage} from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Die 5 Helden</title>
                <meta name="description"
                      content="Willkommen bei Die 5 Helden, Ihrer liebevollen und professionellen Kinderbetreuung."/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="  ">
                <h1 className="font-bold text-[24px] text-[#f26b1d]">Willkommen</h1>
                <img src="/assets/images/hero.jpg" alt="Hero" className="w-[694px] h-[348px] object-cover my-4"/>
                <p className="text-[24px] text-center text-[#557118]">Sie suchen eine liebevolle und professionelle
                    Betreuung für Ihr Kind?
                    In der Kindertagespflege Die 5 Helden bieten wir Kinderbetreuung bis zum 3. Lebensjahr.</p>
                <h2 className="font-medium text-[32px] text-center text-[#f26b1d] my-4">Herzlich Willkommen bei Die 5
                    Helden!</h2>
                <p className="text-[18px] text-black">In großzügigen, kindgerechten Räumen mitten in Duisburg Laar biete
                    ich Montag bis Freitag Platz für bis zu fünf Kinder bis zum 3. Lebensjahr. Durch die kleine
                    Gruppengröße kann ich mich intensiv um die Entwicklung Ihres Kindes kümmern und jedes Kind
                    individuell und spielerisch fördern. Ich unterstütze Ihre Kinder dabei, Probleme selbständig zu
                    meistern und Selbstvertrauen zu entwickeln. Dies alles geschieht in einem liebevollen,
                    wertschätzenden Umgang miteinander, der durch Humor und Fröhlichkeit geprägt ist.</p>
                <h3 className="font-medium text-[24px] text-[#f26b1d] my-4">Unsere Philosophie</h3>
                <p className="text-[18px] text-black">Wichtig sind mir klare und verständliche Strukturen und Rituale.
                    Sie bieten Ihrem Kind eine wohlfühlende Sicherheit und Stärke, sich selbst zu vertrauen. Die Zeit an
                    der frischen Luft kommt bei uns nicht zu kurz. Wir entdecken bei Wind und Wetter die zahlreichen
                    Spielplätze in der Nähe oder machen Ausflüge.</p>
            </div>
        </div>
    );
};

export default Home;
