import { useRouter } from 'next/router';

const Sidebar = ({ isOpen }) => {
    const router = useRouter();

    const navigateTo = async (url: string) => {
        await router.push(url);
    };

    return (
        <>
            <nav
                className={`${
                    isOpen ? 'block' : 'hidden'
                } lg:block bg-secondary w-full lg:w-60 lg:fixed lg:relative top-0 left-0 z-20 p-4 space-y-52 shadow-lg rounded-lg`}>
                <ul>
                    <li onClick={() => navigateTo('/')}>
                        <span
                            className={`block py-2 px-4 rounded text-white cursor-pointer ${
                                router.pathname === '/'
                                    ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]'
                                    : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'
                            }`}>
                            Willkommen
                        </span>
                    </li>
                    <li onClick={() => navigateTo('/uebersicht')}>
                        <span
                            className={`block py-2 px-4 rounded text-white cursor-pointer ${
                                router.pathname === '/uebersicht'
                                    ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]'
                                    : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'
                            }`}>
                            Übersicht
                        </span>
                    </li>
                    <li onClick={() => navigateTo('/oeffnungszeiten')}>
                        <span
                            className={`block py-2 px-4 rounded text-white cursor-pointer ${
                                router.pathname === '/oeffnungszeiten'
                                    ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]'
                                    : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'
                            }`}>
                            Öffnungszeiten
                        </span>
                    </li>
                    <li onClick={() => navigateTo('/kontakt')}>
                        <span
                            className={`block py-2 px-4 rounded text-white cursor-pointer ${
                                router.pathname === '/kontakt'
                                    ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]'
                                    : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'
                            }`}>
                            Kontakt
                        </span>
                    </li>
                    <li onClick={() => navigateTo('/impressum')}>
                        <span
                            className={`block py-2 px-4 rounded text-white cursor-pointer ${
                                router.pathname === '/impressum'
                                    ? 'bg-gradient-to-r from-[#557118] to-[#50D4F2]'
                                    : 'hover:bg-gradient-to-r hover:from-[#557118] hover:to-[#50D4F2]'
                            }`}>
                            Impressum
                        </span>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
