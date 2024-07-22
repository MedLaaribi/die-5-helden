import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const [isOverviewOpen, setIsOverviewOpen] = useState(false);
    const router = useRouter();

    const handleOverviewClick = () => {
        setIsOverviewOpen(!isOverviewOpen);
    };

    return (
        <nav className="bg-secondary w-60 bottom-0 left-44 z-10 p-4 space-y-4 rounded-lg shadow-lg">
            <ul>
                <li>
                    <Link href="/" passHref>
                        <span className={`block py-2 px-4 rounded hover:bg-gradient-to-r hover:from-[#0029FF] hover:to-[#1B2BBA] ${router.pathname === '/' ? 'bg-gradient-to-r from-[#0029FF] to-[#1B2BBA] text-white' : 'text-black'}`}>
                            Willkommen
                        </span>
                    </Link>
                </li>
                <li>
                    <div className="relative">
                        <button
                            onClick={handleOverviewClick}
                            className={`block w-full text-left py-2 px-4 rounded hover:bg-gradient-to-r hover:from-[#0029FF] hover:to-[#1B2BBA] ${router.pathname === '/uebersicht' ? 'bg-gradient-to-r from-[#0029FF] to-[#1B2BBA] text-white' : 'text-black'}`}
                        >
                            Übersicht
                        </button>
                        {isOverviewOpen && (
                            <ul className="ml-4 mt-2 space-y-2">
                                <li>
                                    <Link href="/uebersicht#raeume" passHref>
                                        <span className="block py-2 px-4 rounded hover:bg-gradient-to-r hover:from-[#0029FF] hover:to-[#1B2BBA] text-black">
                                            Räume und Umgebung
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/uebersicht#gesundheit" passHref>
                                        <span className="block py-2 px-4 rounded hover:bg-gradient-to-r hover:from-[#0029FF] hover:to-[#1B2BBA] text-black">
                                            Gesundheit und Ernährung
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </li>
                <li>
                    <Link href="/oeffnungszeiten" passHref>
                        <span className={`block py-2 px-4 rounded hover:bg-gradient-to-r hover:from-[#0029FF] hover:to-[#1B2BBA] ${router.pathname === '/oeffnungszeiten' ? 'bg-gradient-to-r from-[#0029FF] to-[#1B2BBA] text-white' : 'text-black'}`}>
                            Öffnungszeiten
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/kontakt" passHref>
                        <span className={`block py-2 px-4 rounded hover:bg-gradient-to-r hover:from-[#0029FF] hover:to-[#1B2BBA] ${router.pathname === '/kontakt' ? 'bg-gradient-to-r from-[#0029FF] to-[#1B2BBA] text-white' : 'text-black'}`}>
                            Kontakt
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/impressum" passHref>
                        <span className={`block py-2 px-4 rounded hover:bg-gradient-to-r hover:from-[#0029FF] hover:to-[#1B2BBA] ${router.pathname === '/impressum' ? 'bg-gradient-to-r from-[#0029FF] to-[#1B2BBA] text-white' : 'text-black'}`}>
                            Impressum
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
