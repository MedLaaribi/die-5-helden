import { useState } from 'react';

const CookieSettings = () => {
    const [functionalCookies, setFunctionalCookies] = useState(true);
    const [analyticsCookies, setAnalyticsCookies] = useState(false);
    const [marketingCookies, setMarketingCookies] = useState(false);

    const saveSettings = () => {
        document.cookie = `functionalCookies=${functionalCookies}; max-age=31536000; path=/`;
        document.cookie = `analyticsCookies=${analyticsCookies}; max-age=31536000; path=/`;
        document.cookie = `marketingCookies=${marketingCookies}; max-age=31536000; path=/`;

        alert('Ihre Cookie-Einstellungen wurden gespeichert.');
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-darkOrange text-center">Cookie-Einstellungen</h1>
            <div className="h-0.5 my-6 bg-gradient-to-r from-orange via-yellow to-orange"></div>
            <p className="text-lg lg:text-xl text-start text-gray-700 mb-10 mt-10">
                Hier können Sie Ihre Cookie-Einstellungen anpassen.
            </p>
            <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <input
                        type="checkbox"
                        checked={functionalCookies}
                        onChange={(e) => setFunctionalCookies(e.target.checked)}
                        className="mt-1 h-5 w-5 text-primary border-gray-300 rounded focus:ring-secondary"
                    />
                    <label className="text-xl text-gray-800">
                        Funktionale Cookies <span className="text-gray-600">(notwendig für die Nutzung der Seite)</span>
                    </label>
                </div>
                <div className="flex items-start space-x-4">
                    <input
                        type="checkbox"
                        checked={analyticsCookies}
                        onChange={(e) => setAnalyticsCookies(e.target.checked)}
                        className="mt-1 h-5 w-5 text-primary border-gray-300 rounded focus:ring-secondary"
                    />
                    <label className="text-xl text-gray-800">
                        Analytische Cookies <span className="text-gray-600">(zur Verbesserung der Seite)</span>
                    </label>
                </div>
                <div className="flex items-start space-x-4">
                    <input
                        type="checkbox"
                        checked={marketingCookies}
                        onChange={(e) => setMarketingCookies(e.target.checked)}
                        className="mt-1 h-5 w-5 text-primary border-gray-300 rounded focus:ring-secondary"
                    />
                    <label className="text-xl text-gray-800">
                        Marketing Cookies <span className="text-gray-600">(für personalisierte Werbung)</span>
                    </label>
                </div>
            </div>
            <div className="mt-10 text-center">
                <button
                    onClick={saveSettings}
                    className="bg-primary hover:bg-secondary text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out"
                >
                    Einstellungen speichern
                </button>
            </div>
        </div>
    );
};

export default CookieSettings;
