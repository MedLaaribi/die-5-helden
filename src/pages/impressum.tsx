import type { NextPage } from 'next';
import Head from 'next/head';

const Impressum: NextPage = () => {
    return (
        <div className="px-10">
            <h1 className="font-bold text-3xl text-[#f26b1d]">Impressum</h1>
            <div className="h-0.5 my-4 bg-gradient-to-r from-[#F26B1D] via-[#F2CF1D] to-[#F26B1D]"></div>
            <div className="flex justify-center">
                <h1 className="text-5xl font-bold bg-clip-text text-transparent" style={{
                    backgroundImage: 'linear-gradient(to right, #50D4F2 0%, #F2CF1D 25%, #F26B1D 50%, #F2911B 75%, #30D979 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    Die 5 Helden
                </h1>
            </div>


        </div>
    );
};

export default Impressum;
