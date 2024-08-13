import { useState } from 'react';
import HamburgerIcon from './HamburgerIcon'; // Importiere die HamburgerIcon-Komponente

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="bg-primary p-2 sm:p-3 lg:p-4 rounded-lg lg:relative fixed w-full top-0 left-0 z-50 lg:z-10">
            <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-start px-4 sm:px-8">
                {/* Hamburger-Icon und "Menü" zentriert mit gleichem Padding auf beiden Seiten */}
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
    );
};

export default Header;
