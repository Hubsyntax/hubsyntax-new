import { useEffect, useState } from "react";
import Button from "../Button";
import LogosSlider from "./Logos-Slider";
import { Link } from "react-router-dom";

export function Counter({ target, duration = 2000 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(target);
        if (start === end) return;

        const totalMilSecDur = parseInt(duration);
        const incrementTime = 20;
        const step = Math.ceil((end - start) / (totalMilSecDur / incrementTime));

        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(start);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [target, duration]);

    return <span>{count}+</span>;
}

const businessData = [
    { target: 100, text: "Satisfied Clients" },
    { target: 600, text: "Successful Projects" },
    { target: 8, text: "Years Experience" },
    { target: 150, text: "App Development" },
];

export default function BusinessSales() {
    return (
        <section className='bg-white pt-[120px] scales-business'>
            <div className="relative">
                <div className='side-bg-right absolute top-0 right-0'>
                    <img src='https://hubsyntax.com/uploads/Element.svg' alt="Logo" className="w-auto" />
                </div>
                <div className='side-bg-left absolute top-0 left-0'>
                    <img src='https://hubsyntax.com/uploads/Element (1).svg' alt="Logo" className="w-auto" />
                </div>

                <div className='container relative z-10'>
                    <LogosSlider />
                    <div className='heading-text'>
                        <h1 className='text-[100px] leading-tight'>
                            <span className='block'>
                                <span className='text-[#FF3E5E] font-normal'>Scale </span>
                                <span className='text-[#FF3E5E] font-bold'>Your Business </span>
                                <span className='text-[#FF3E5E] font-normal'>with</span>
                            </span>

                            <span className='block'>
                                <span className='text-[#00293F] font-normal'>Our </span>
                                <span className='text-[#00293F] font-bold'>Web Solutions</span>
                            </span>
                        </h1>

                    </div>
                    <div className='descrition font-normal text-[#2C2C2C] text-[17px] pt-[5px] pb-[40px] text-center'>
                        <p>
                            From strategy to final execution, every element is focused on increasing conversions and revenue, ensuring visitors take the actions you want.
                        </p>
                    </div>

                    <div className='get-btn'>
                        <Link to="/about">
                            <Button
                                text="Learn More"
                                icon='https://hubsyntax.com/uploads/Group 1597883330.svg'
                                className="get-start btn"
                            />
                        </Link>
                    </div>
                    <div className="clients bussiness">
                        {businessData.map((item, index) => (
                            <div className={`clients-wrap ${index === businessData.length - 1 ? "last" : ""}`} key={index}>
                                <span className="client-no text-[51px] text-[#00293F] font-bold">
                                    <Counter target={item.target} />
                                </span>
                                <span className="text-[19px] text-[#FF3E5E] font-normal des">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
