import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const [isOverviewOpen, setIsOverviewOpen] = useState(false);
    const router = useRouter();

    const handleOverviewClick = () => {
        setIsOverviewOpen(!isOverviewOpen);
    };

    // Funktion für sanftes Scrollen
    const handleScroll = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, targetId: string) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const navigateTo = (url: string) => {
        router.push(url);
    };

    return (
        <nav className="bg-secondary w-60 bottom-0 left-44 z-10 p-4 space-y-4 rounded-lg shadow-lg cursor-pointer">
            <ul>
                <li onClick={() => navigateTo('/')}>
                    <span className={`block py-2 px-4 rounded text-white ${router.pathname === '/' ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                        Willkommen
                    </span>
                </li>
                <li>
                    <div className="relative" onClick={handleOverviewClick}>
                        <span className={`block w-full text-left py-2 px-4 rounded text-white ${router.pathname.startsWith('/uebersicht') ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                            Übersicht
                        </span>
                        {isOverviewOpen && (
                            <ul className="ml-4 mt-2 space-y-2">
                                <li onClick={(e) => handleScroll(e, 'raeume')}>
                                    <span className="block py-2 px-2 rounded text-white hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]">
                                        Räume und Umgebung
                                    </span>
                                </li>
                                <li onClick={(e) => handleScroll(e, 'gesundheit')}>
                                    <span className="block py-2 px-2 rounded text-white hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]">
                                        Gesundheit und Ernährung
                                    </span>
                                </li>
                            </ul>
                        )}
                    </div>
                </li>
                <li onClick={() => navigateTo('/oeffnungszeiten')}>
                    <span className={`block py-2 px-4 rounded text-white ${router.pathname === '/oeffnungszeiten' ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                        Öffnungszeiten
                    </span>
                </li>
                <li onClick={() => navigateTo('/kontakt')}>
                    <span className={`block py-2 px-4 rounded text-white ${router.pathname === '/kontakt' ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                        Kontakt
                    </span>
                </li>
                <li onClick={() => navigateTo('/impressum')}>
                    <span className={`block py-2 px-4 rounded text-white ${router.pathname === '/impressum' ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                        Impressum
                    </span>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
