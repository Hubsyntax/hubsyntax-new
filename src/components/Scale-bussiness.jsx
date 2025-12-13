import Button from "./Button";

export default function ScaleBussiness() {
    const images = [
        { src: "https://hubsyntax.com/uploads/Group 1597883412 (4).svg", class: "first boost-top-1" },
        { src: "https://hubsyntax.com/uploads/Group 1597883413 (2).svg", class: "second boost-top-2" },
        { src: "https://hubsyntax.com/uploads/Group 1597883417 (1).svg", class: "third boost-top-3" },
        { src: "https://hubsyntax.com/uploads/Group 1597883415 (2).svg", class: "four boost-top-4" },
        { src: "https://hubsyntax.com/uploads/Group 1597883416 (1).svg", class: "five boost-top-5" },
        { src: "https://hubsyntax.com/uploads/Group 1597883414 (1).svg", class: "six boost-top-6" },
        { src: "https://hubsyntax.com/uploads/Group 1597883418 (2).svg", class: "seven boost-top-7" },
    ];

    return (
        <section className='bg-[#fff5f7] pt-[158px] ready-section'>
            <div className="container scaleBussiness-wrapper">
                <p className='text-[104px]  text-center leading-[115px] pb-[50px] ready-text'>
                    <span className='text-[#00293F] font-bold'>HubSyntax is ready to </span>
                    <span className='text-[#FF3E5E] font-bold business'>Scale Your Business</span>
                </p>
                <a href="mailto:info@hubsyntax.com?subject=Scale%20My%20Business&body=Hello%20HubSyntax,%0A%0AI%20am%20interested%20in%20scaling%20my%20business.%0A%0AThanks!"
                    className="block" >
                    <Button
                        text="Get in Touch"
                        icon="https://hubsyntax.com/uploads/Vector(2).svg"
                        className="get-start let-go touch"
                    />
                </a>
            </div>
            <div className="flex items-center gap-[20px] boost-wrapper">
                {images.map((item, index) => (
                    <span key={index} className={`boost-item ${item.class}`}>
                        <img src={item.src} alt="" />
                    </span>
                ))}
            </div>
        </section>
    )
}