import boost1 from '../images/boost1.png';
import boost2 from '../images/boost2.png';
import boost3 from '../images/boost3.png';
import boost4 from '../images/boost4.png';
import boost5 from '../images/boost5.png';
import Button from "./Button";

export default function ScaleBussiness() {
    return (
        <section className='bg-[#fff5f7] pt-[158px] ready-section'>
            <div className="container">
                <p className='text-[104px]  text-center leading-[115px] pb-[50px] ready-text'>
                    <span className=' text-[#00293F] font-bold'>HubSyntax is ready to </span>
                    <span className='  text-[#FF3E5E] font-bold'>Scale Your Business</span>
                </p>
                
                <Button
                    text=" Get in Touch"
                    icon='https://hubsyntax.com/uploads/Vector(2).svg'
                    className="get-start let-go touch"
                />
            </div>
            <div className='flex items-center gap-[20px] pt-[40px] boost-wrapper'>
                <span className="boost-item first"><img src={boost1} alt="" /></span>
                <span className="boost-item second"><img src={boost2} alt="" /></span>
                <span className="boost-item third"><img src={boost3} alt="" /></span>
                <span className="boost-item four"><img src={boost4} alt="" /></span>
                <span className="boost-item five"><img src={boost5} alt="" /></span>
                <span className="boost-item six"><img src={boost4} alt="" /></span>
                <span className="boost-item seven"><img src={boost5} alt="" /></span>
            </div>
        </section>
    )
}
