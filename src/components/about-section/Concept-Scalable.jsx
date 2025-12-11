import Button from "../Button";

export default function ConceptScalable() {
    return (
        <div className="flex gap-[80px] items-center conceptScalable-wrapping">
            <div className="concept-img w-1/2 conceptScalable-wrapping-img">
                <img src="https://www.hubsyntax.com/uploads/Mask group (3).svg" alt="" className="w-auto" />
            </div>
            <div className=" w-1/2 max-w-[650px] conceptScalable-wrapping-text">
                <h2 className="text-[60px] leading-[65px] text-[#00293F] font-black pb-[20px] concept-heading">
                    <span className="text-[#FF3E5E] font-normal block">
                        From Concept to
                    </span>
                    Scalable Digital Solution
                </h2>
                <p className="text-[#2C2C2C] text-[14px] leading-[22px] font-normal  concept-des pb-[20px] ">
                    We transform ideas into high-performance digital solutions by combining strategy, design, and technology to deliver scalable results.
                </p>
                <div className="about-btn">
                    <Button
                        text='Learn More'
                        icon='https://hubsyntax.com/uploads/Vector(2).svg'
                        className="get-start "
                    />
                </div>
            </div>
        </div>
    )
}
