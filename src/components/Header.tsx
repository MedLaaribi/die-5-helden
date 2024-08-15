import { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import Sidebar from './Sidebar';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header className="bg-primary p-2 sm:p-3 lg:p-4 rounded-lg lg:relative fixed w-full top-0 left-0 z-20 lg:z-10">
                <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-start px-4 sm:px-8">
                    <div className="lg:hidden flex flex-col items-center">
                        <HamburgerIcon isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                        <span className="text-white text-sm font-semibold">Menü</span>
                    </div>
                    <div className="flex items-center justify-center w-full lg:w-auto">
                        <img src="/images/logo.jpg" alt="Logo" className="w-20 h-24 sm:w-24 sm:h-28 m-2 rounded-lg" />
                        <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold ml-4 whitespace-nowrap">
                            Die 5 Helden
                        </h1>
                    </div>
                </div>
            </header>
            {/* Dropdown-Menü für mobile Bildschirme */}
            {isSidebarOpen && (
                <div className="absolute top-36 left-0 w-full bg-secondary p-4 shadow-lg rounded-lg z-30 lg:hidden">
                    <nav className="bg-secondary p-4 rounded-lg shadow-lg">
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 px-4 rounded text-white bg-gradient-to-r from-[#557118] to-[#50D4F2] hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]">
                                    Willkommen
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/uebersicht"
                                    className="block py-2 px-4 rounded text-white bg-gradient-to-r from-[#557118] to-[#50D4F2] hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]">
                                    Übersicht
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/oeffnungszeiten"
                                    className="block py-2 px-4 rounded text-white bg-gradient-to-r from-[#557118] to-[#50D4F2] hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]">
                                    Öffnungszeiten
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/kontakt"
                                    className="block py-2 px-4 rounded text-white bg-gradient-to-r from-[#557118] to-[#50D4F2] hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]">
                                    Kontakt
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/impressum"
                                    className="block py-2 px-4 rounded text-white bg-gradient-to-r from-[#557118] to-[#50D4F2] hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]">
                                    Impressum
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Header;
