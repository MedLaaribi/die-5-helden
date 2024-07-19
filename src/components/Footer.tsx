// src/components/Footer.tsx
const Footer = () => {
    return (
        <footer className="bg-primary w-full h-40 flex flex-col items-center justify-center p-4 ">
            <div className="w-full flex justify-between text-white">
                <div>
                    <span className="font-normal text-[20px]">Navigation</span>
                    <ul className="text-[14px] leading-[26px]">
                        <li>Startseite</li>
                        <li>Kontakt</li>
                        <li>Impressum</li>
                        <li>Datenschutz</li>
                        <li>AGB</li>
                    </ul>
                </div>
                <div>
                    <span className="font-normal text-[20px]">Folge uns</span>
                    <div className="flex space-x-2">
                        <img src="/assets/images/icon1.png" alt="Icon" className="w-6 h-6 object-cover" />
                        <img src="/assets/images/icon2.png" alt="Icon" className="w-6 h-6 object-cover" />
                        <img src="/assets/images/icon3.png" alt="Icon" className="w-[26px] h-[26px] object-cover" />
                        <img src="/assets/images/icon4.png" alt="Icon" className="w-6 h-6 object-cover" />
                    </div>
                </div>
                <div>
                    <span className="font-normal text-[16px]">Interessiert? Kontakt aufnehmen!</span>
                    <div className="w-[150px] h-10 bg-white mt-2"></div>
                    <span className="font-bold text-[24px]">Interessiert?</span>
                    <span className="font-normal text-[18px]">© 2024 Die 5 Helden</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
