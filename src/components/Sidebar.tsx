import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleSidebar = () => {

        setIsOpen(!isOpen);
    };

    const navigateTo = async (url: string) => {
        setIsOpen(false); // Schließt die Sidebar nach der Navigation
        await router.push(url);
    };

    return (
        <>
            {/* Hamburger-Icon für kleine Bildschirme */}
            <div className="lg:hidden p-4 z-30 fixed top-4 left-4">
                {isOpen ? (
                    <FaTimes onClick={toggleSidebar} className="text-white w-8 h-8 cursor-pointer" />
                ) : (
                    <FaBars onClick={toggleSidebar} className="text-white w-8 h-8 cursor-pointer" />
                )}
            </div>

            {/* Sidebar Overlay - sichtbar auf kleinen Bildschirmen */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-transform duration-300 ${
                    isOpen ? 'block' : 'hidden'
                } lg:hidden`}
                onClick={toggleSidebar} // Schließt die Sidebar, wenn auf das Overlay geklickt wird
            >
                <div
                    className="bg-secondary w-60 h-full p-4 space-y-4 shadow-lg rounded-r-lg z-50"
                    onClick={(e) => e.stopPropagation()} // Verhindert das Schließen beim Klicken innerhalb der Sidebar
                >
                    <ul>
                        <li onClick={() => navigateTo('/')}>
                            <span className={`block py-2 px-4 rounded text-white cursor-pointer ${router.pathname === '/' ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                                Willkommen
                            </span>
                        </li>
                        <li onClick={() => navigateTo('/uebersicht')}>
                            <span className={`block py-2 px-4 rounded text-white cursor-pointer ${router.pathname === '/uebersicht' ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                                Übersicht
                            </span>
                        </li>
                        <li onClick={() => navigateTo('/oeffnungszeiten')}>
                            <span className={`block py-2 px-4 rounded text-white cursor-pointer ${router.pathname === '/oeffnungszeiten' ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                                Öffnungszeiten
                            </span>
                        </li>
                        <li onClick={() => navigateTo('/kontakt')}>
                            <span className={`block py-2 px-4 rounded text-white cursor-pointer ${router.pathname === '/kontakt' ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                                Kontakt
                            </span>
                        </li>
                        <li onClick={() => navigateTo('/impressum')}>
                            <span className={`block py-2 px-4 rounded text-white cursor-pointer ${router.pathname === '/impressum' ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                                Impressum
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Sidebar für große Bildschirme */}
            <nav
                className={`hidden lg:block bg-secondary w-60 fixed lg:relative top-0 bottom-0 left-0 z-20 p-4 space-y-4 shadow-lg rounded-lg`}
            >
                <ul>
                    <li onClick={() => navigateTo('/')}>
                        <span className={`block py-2 px-4 rounded text-white cursor-pointer ${router.pathname === '/' ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                            Willkommen
                        </span>
                    </li>
                    <li onClick={() => navigateTo('/uebersicht')}>
                        <span className={`block py-2 px-4 rounded text-white cursor-pointer ${router.pathname === '/uebersicht' ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                            Übersicht
                        </span>
                    </li>
                    <li onClick={() => navigateTo('/oeffnungszeiten')}>
                        <span className={`block py-2 px-4 rounded text-white cursor-pointer ${router.pathname === '/oeffnungszeiten' ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                            Öffnungszeiten
                        </span>
                    </li>
                    <li onClick={() => navigateTo('/kontakt')}>
                        <span className={`block py-2 px-4 rounded text-white cursor-pointer ${router.pathname === '/kontakt' ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                            Kontakt
                        </span>
                    </li>
                    <li onClick={() => navigateTo('/impressum')}>
                        <span className={`block py-2 px-4 rounded text-white cursor-pointer ${router.pathname === '/impressum' ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]' : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'}`}>
                            Impressum
                        </span>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
