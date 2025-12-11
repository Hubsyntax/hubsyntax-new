import Button from "./Button";

export default function ScaleBussiness() {
    return (
        <section className='bg-[#fff5f7] pt-[158px] ready-section'>
            <div className="container scaleBussiness-wrapper">
                <p className='text-[104px]  text-center leading-[115px] pb-[50px] ready-text'>
                    <span className='text-[#00293F] font-bold'>HubSyntax is ready to </span>
                    <span className='text-[#FF3E5E] font-bold business'>Scale Your Business</span>
                </p>
                
                <Button
                    text="Get in Touch"
                    icon='https://hubsyntax.com/uploads/Vector(2).svg'
                    className="get-start let-go touch"
                />
            </div>
            <div className='flex items-center gap-[20px]  boost-wrapper'>
                <span className="boost-item first boost-top-1">
                    <img src='https://hubsyntax.com/uploads/Group 1597883412 (4).svg' alt="" />
                </span>

                <span className="boost-item second boost-top-2">
                    <img src='https://hubsyntax.com/uploads/Group 1597883413 (2).svg' alt="" />
                </span>

                <span className="boost-item third boost-top-3">
                    <img src='https://hubsyntax.com/uploads/Group 1597883417 (1).svg' alt="" />
                </span>

                <span className="boost-item four boost-top-4">
                    <img src='https://hubsyntax.com/uploads/Group 1597883415 (2).svg' alt="" />
                </span>

                <span className="boost-item five boost-top-5">
                    <img src='https://hubsyntax.com/uploads/Group 1597883416 (1).svg' alt="" />
                </span>

                <span className="boost-item six boost-top-6">
                    <img src='https://hubsyntax.com/uploads/Group 1597883414 (1).svg' alt="" />
                </span>

                <span className="boost-item seven boost-top-7">
                    <img src='https://hubsyntax.com/uploads/Group 1597883418 (2).svg' alt="" />
                </span>
            </div>
        </section>
    )
}