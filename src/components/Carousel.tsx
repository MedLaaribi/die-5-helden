import { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

interface CarouselProps {
    slides: string[];
}

const Carousel = ({ slides }: CarouselProps) => {
    const [current, setCurrent] = useState<number>(0);

    const previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    const nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [current, slides.length]);

    return (
        <div className="overflow-hidden relative rounded-lg w-full">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                        <img className="w-full h-96 my-8 object-cover rounded-lg" src={s} alt={`slide ${index}`} />
                    </div>
                ))}
            </div>

            <div className="absolute top-0 h-full w-full flex justify-between items-center px-5 md:px-10 text-white text-3xl">
                <button onClick={previousSlide} title="Previous Slide">
                    <BsFillArrowLeftCircleFill />
                </button>
                <button onClick={nextSlide} title="Next Slide">
                    <BsFillArrowRightCircleFill />
                </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((_, i) => (
                    <div
                        onClick={() => {
                            setCurrent(i);
                        }}
                        key={"circle" + i}
                        className={`rounded-full w-2 h-2 md:w-2 md:h-2 cursor-pointer ${i === current ? "bg-gray-300" : "bg-gray-400"}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

