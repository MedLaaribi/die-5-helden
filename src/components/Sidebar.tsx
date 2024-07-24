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
    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className="bg-secondary w-60 bottom-0 left-44 z-10 p-4 space-y-4 rounded-lg shadow-lg">
            <ul>
                <li>
                    <Link href="/" passHref>
                        <span className={`block py-2 px-4 rounded text-white ${router.pathname === '/' ? 'bg-gradient-to-r from-[#0029FF] to-[#1B2BBA]' : 'hover:bg-gradient-to-r hover:from-[#0029FF] hover:to-[#1B2BBA]'}`}>
                            Willkommen
                        </span>
                    </Link>
                </li>
                <li>
                    <div className="relative">
                        <Link href="/uebersicht" passHref>
                            <span className={`block w-full text-left py-2 px-4 rounded text-white ${router.pathname.startsWith('/uebersicht') ? 'bg-gradient-to-r from-[#0029FF] to-[#1B2BBA]' : 'hover:bg-gradient-to-r hover:from-[#0029FF] hover:to-[#1B2BBA]'}`}>
                                Übersicht
                            </span>
                        </Link>
                        {isOverviewOpen && (
                            <ul className="ml-4 mt-2 space-y-2">
                                <li>
                                    <a href="/uebersicht#raeume" onClick={(e) => handleScroll(e, 'raeume')} className="block py-2 px-2 rounded text-white hover:bg-gradient-to-r hover:from-[#0029FF] hover:to-[#1B2BBA]">
                                        Räume und Umgebung
                                    </a>
                                </li>
                                <li>
                                    <a href="/uebersicht#gesundheit" onClick={(e) => handleScroll(e, 'gesundheit')} className="block py-2 px-2 rounded text-white hover:bg-gradient-to-r hover:from-[#0029FF] hover:to-[#1B2BBA]">
                                        Gesundheit und Ernährung
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>
                </li>
                <li>
                    <Link href="/oeffnungszeiten" passHref>
                        <span className={`block py-2 px-4 rounded text-white ${router.pathname === '/oeffnungszeiten' ? 'bg-gradient-to-r from-[#0029FF] to-[#1B2BBA]' : 'hover:bg-gradient-to-r hover:from-[#0029FF] hover:to-[#1B2BBA]'}`}>
                            Öffnungszeiten
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/kontakt" passHref>
                        <span className={`block py-2 px-4 rounded text-white ${router.pathname === '/kontakt' ? 'bg-gradient-to-r from-[#0029FF] to-[#1B2BBA]' : 'hover:bg-gradient-to-r hover:from-[#0029FF] hover:to-[#1B2BBA]'}`}>
                            Kontakt
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/impressum" passHref>
                        <span className={`block py-2 px-4 rounded text-white ${router.pathname === '/impressum' ? 'bg-gradient-to-r from-[#0029FF] to-[#1B2BBA]' : 'hover:bg-gradient-to-r hover:from-[#0029FF] hover:to-[#1B2BBA]'}`}>
                            Impressum
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
