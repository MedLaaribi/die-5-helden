import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    const router = useRouter();

    const handleScroll = (e: MouseEvent<HTMLLIElement>, href: string) => {
        e.preventDefault();

        if (router.pathname === href) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            router.push(href).then(() => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            });
        }
    };

    const navigateToContact = () => {
        router.push('/kontakt');
    };

    const openWhatsApp = () => {
        window.location.href = `https://wa.me/491787303452`;
    };

    const openInstagram = () => {
        window.location.href = `https://www.instagram.com/die5helden?igsh=MWd5NWF3ZDVvMWh5dQ==`;
    };

    return (
        <footer className="bg-primary w-full p-4 flex flex-col md:flex-row md:justify-between items-center relative">
            <div className="w-full md:flex md:justify-around text-white">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <span className="font-normal text-xl md:text-2xl">Navigation</span>
                    <ul className="text-sm leading-6 cursor-pointer flex flex-wrap justify-center md:block space-x-4 md:space-x-0">
                        <li onClick={(e) => handleScroll(e, '/')} className="cursor-pointer">Startseite</li>
                        <li onClick={(e) => handleScroll(e, '/uebersicht')} className="cursor-pointer">Übersicht</li>
                        <li onClick={(e) => handleScroll(e, '/kontakt')} className="cursor-pointer">Kontakt</li>
                        <li onClick={(e) => handleScroll(e, '/impressum')} className="cursor-pointer">Impressum</li>
                        <li onClick={(e) => handleScroll(e, '/datenschutz')} className="cursor-pointer">Datenschutz</li>
                    </ul>
                </div>
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <span className="font-normal text-xl md:text-2xl">Folge uns</span>
                    <div className="flex justify-center md:justify-start space-x-4 mt-2">
                        <FaInstagram className="w-6 h-6 md:w-7 md:h-7 cursor-pointer" onClick={openInstagram} />
                        <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7 cursor-pointer" onClick={openWhatsApp} />
                    </div>
                </div>
                <div className="flex flex-col items-center md:flex-row md:items-start">
                    <img src="/images/Kontakt1.footer.jpg" alt="Kontakt" className="w-48 md:w-64 h-32 md:h-40 object-cover rounded-lg mb-4 md:mb-0" />
                    <div className="flex flex-col px-5 text-center md:text-left">
                        <span className="font-bold text-lg md:text-2xl">Interessiert?</span>
                        <span className="font-normal text-sm md:text-base">Kontakt aufnehmen!</span>
                        <button
                            className="bg-white text-primary mt-4 px-4 py-2 rounded-full"
                            onClick={navigateToContact}
                        >
                            Kontakt
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center mt-4 md:justify-end items-center pr-7 md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 lg:justify-center lg:bottom-0 lg:w-full">
                <span className="font-normal text-sm md:text-lg text-white">© 2024 Die 5 Helden</span>
            </div>
        </footer>
    );
};

export default Footer;
