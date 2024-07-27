// src/components/Footer.tsx
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
        window.location.href = `https://wa.me/491787303452`; // Internationale Telefonnummer ohne "+" und ohne führende "0"
    };

    const openInstagram = () => {
        window.location.href = `https://www.instagram.com/die5helden?igsh=MWd5NWF3ZDVvMWh5dQ==`;
    };

    return (
        <footer className="bg-primary w-full flex flex-col items-center justify-between p-4">
            <div className="w-full flex justify-around text-white">
                <div className="ml-20 leading-10">
                    <span className="font-normal text-2xl">Navigation</span>
                    <ul className="text-sm leading-6 cursor-pointer">
                        <li onClick={(e) => handleScroll(e, '/')}>Startseite</li>
                        <li onClick={(e) => handleScroll(e, '/uebersicht')}>Übersicht</li>
                        <li onClick={(e) => handleScroll(e, '/kontakt')}>Kontakt</li>
                        <li onClick={(e) => handleScroll(e, '/impressum')}>Impressum</li>
                        <li onClick={(e) => handleScroll(e, '/datenschutz')}>Datenschutz</li>
                    </ul>
                </div>
                <div className="leading-10 mx-32">
                    <span className="font-normal text-2xl">Folge uns</span>
                    <div className="flex space-x-2 justify-center">
                        <FaInstagram className="w-7 h-7 cursor-pointer" onClick={openInstagram} />
                        <FaWhatsapp className="w-7 h-7 cursor-pointer" onClick={openWhatsApp} />
                    </div>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                    <img src="/images/Kontakt1.footer.jpg" alt="Kontakt" className="w-72 h-40 object-cover rounded-lg" />
                    <div className="flex flex-col">
                        <span className="font-bold text-[24px]">Interessiert?</span>
                        <span className="font-normal text-[16px]">Interessiert? Kontakt aufnehmen!</span>
                        <button
                            className="bg-white text-[#1F3EC6] mt-4 px-4 py-2 rounded-3xl"
                            onClick={navigateToContact}
                        >
                            Kontakt
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-center text-white ">
                <span className="font-normal text-lg">© 2024 Die 5 Helden</span>
            </div>
        </footer>
    );
};

export default Footer;
