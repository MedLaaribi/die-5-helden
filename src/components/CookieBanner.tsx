import { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = document.cookie.split('; ').find(row => row.startsWith('userConsent='));
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        document.cookie = "userConsent=true; max-age=31536000; path=/";
        setShowBanner(false);
    };

    const rejectCookies = () => {
        document.cookie = "userConsent=false; max-age=31536000; path=/";
        setShowBanner(false);
    };

    const customizeCookies = () => {
        window.location.href = '/cookie-einstellungen';
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-darkOrange text-white p-4 z-50 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-center sm:text-left">
                <p className="font-bold">Wir schätzen Ihre Privatsphäre</p>
                <p>Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Indem Sie auf "Alle akzeptieren" klicken, stimmen Sie der Verwendung von Cookies zu.</p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-2">
                <button onClick={acceptCookies} className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">
                    Alle akzeptieren
                </button>
                <button onClick={rejectCookies} className="bg-orange hover:bg-darkOrange text-white font-bold py-2 px-4 rounded">
                    Alle ablehnen
                </button>
                <button onClick={customizeCookies} className="bg-yellow hover:bg-primary text-white font-bold py-2 px-4 rounded">
                    Anpassen
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;
