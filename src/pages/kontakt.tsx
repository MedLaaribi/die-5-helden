// src/pages/kontakt.tsx
import React from 'react';

const Kontakt: React.FC = () => {
    return (
        <>
            <div className="px-10">
                <h1 className="font-bold text-3xl text-[#f26b1d]">Kontakt</h1>
                <div className="h-0.5 my-4 bg-gradient-to-r from-[#F26B1D] via-[#F2CF1D] to-[#F26B1D]"></div>
                <div className="flex justify-center">
                    <h1
                        className="text-5xl font-bold bg-clip-text text-transparent"
                        style={{
                            backgroundImage:
                                'linear-gradient(to right, #50D4F2 0%, #F2CF1D 25%, #F26B1D 50%, #F2911B 75%, #30D979 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Die 5 Helden
                    </h1>
                </div>
                <div className="flex-shrink-0 w-full mt-20">
                    <img
                        src="/images/Kontakt1.footer.jpg"
                        alt="Kontakt"
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                </div>
                <div className="mt-20">
                    <p className="font-bold text-2xl">Die 5 Helden</p>
                    <p className="font-medium text-xl my-4">Schillstr. 9, 47119 Duisburg</p>
                    <p className="font-medium text-xl mt-10">Telefon: +49 178 7303452</p>
                    <p className="font-medium text-xl">Email: exemple@gmail.com</p>
                </div>
                <div className="flex justify-center items-center mt-20 ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.289542931649!2d6.727022115740512!3d51.46771917962827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8be6a9d97222b%3A0xb90ae88d2fe9b7b0!2sSchillstra%C3%9Fe%209%2C%2047119%20Duisburg%2C%20Germany!5e0!3m2!1sen!2sus!4v1619477983264!5m2!1sen!2sus"
                        width="800"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        title="Google Maps"
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Kontakt;
