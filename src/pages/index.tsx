import type { NextPage } from 'next';
import Head from 'next/head';
import Carousel from '../components/Carousel';

const Home: NextPage = () => {
    const slides = [
        "/images/hero1.jpg",
        "/images/hero2.jpg",
        "/images/hero3.jpg",
    ];

    return (
        <div>
            <Head>
                <title>Die 5 Helden</title>
                <meta name="description" content="Willkommen bei Die 5 Helden, Ihrer liebevollen und professionellen Kinderbetreuung." />
                <link rel="icon" href="/assets/favicon" />
            </Head>
            <div className="px-10">
                <h1 className="font-bold text-3xl text-[#f26b1d]">Willkommen</h1>
                {/* Gradient Line */}
                <div className="h-0.5 my-4 bg-gradient-to-r from-[#F26B1D] via-[#F2CF1D] to-[#F26B1D]"></div>

                <Carousel slides={slides} />
                <p className="text-2xl text-center text-[#557118]">
                    Sie suchen eine liebevolle und professionelle Betreuung für Ihr Kind?
                    In der Kindertagespflege Die 5 Helden bieten wir Kinderbetreuung bis zum 3. Lebensjahr.
                </p>
                <h2 className="font-medium text-3xl text-center text-[#f26b1d] my-4">Herzlich Willkommen bei Die 5 Helden!</h2>
                <p className="text-xl text-black">
                    In großzügigen, kindgerechten Räumen mitten in Duisburg Laar biete ich Montag bis Freitag Platz für bis zu fünf Kinder bis zum 3. Lebensjahr. Durch die kleine Gruppengröße kann ich mich intensiv um die Entwicklung Ihres Kindes kümmern und jedes Kind individuell und spielerisch fördern. Ich unterstütze Ihre Kinder dabei, Probleme selbständig zu meistern und Selbstvertrauen zu entwickeln. Dies alles geschieht in einem liebevollen, wertschätzenden Umgang miteinander, der durch Humor und Fröhlichkeit geprägt ist.
                </p>
                <h3 className="font-medium text-3xl text-[#f26b1d] my-4">Unsere Philosophie</h3>
                <p className="text-xl text-black">
                    Wichtig sind mir klare und verständliche Strukturen und Rituale. Sie bieten Ihrem Kind eine wohlfühlende Sicherheit und Stärke, sich selbst zu vertrauen. Die Zeit an der frischen Luft kommt bei uns nicht zu kurz. Wir entdecken bei Wind und Wetter die zahlreichen Spielplätze in der Nähe oder machen Ausflüge.
                </p>
            </div>
        </div>
    );
};

export default Home;
