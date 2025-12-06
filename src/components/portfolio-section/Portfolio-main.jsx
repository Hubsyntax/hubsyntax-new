import BusinessGrowth from "./BusinessGrowth"
import PortfolioWeb from "./Portfolio-Web"
import ProtfolioDesgin from "./Portfolio-Desgin"
import ProtfolioSeo from "./Protfolio-Seo";
import ProtfolioOptimisation from "./Protfolio-Optimisation";

export default function PortfolioMain() {
    return (
        <div className="relative">
            <div className='side-bg-right absolute top-0 right-0'>
                <img src='https://hubsyntax.com/uploads/Element.svg' alt="Logo" className="w-auto" />
            </div>
            <div className='side-bg-left absolute top-0 left-0'>
                <img src='https://hubsyntax.com/uploads/Element (1).svg' alt="Logo" className="w-auto" />
            </div>
            <div className="container">
                <div className="pt-[70px] pb-[70px] xl:pt-[120px] xl:pb-[120px] main-sections-portfolio">
                    <BusinessGrowth />
                    <PortfolioWeb />
                    <ProtfolioDesgin />
                    <ProtfolioSeo />
                    <ProtfolioOptimisation />
                </div>
            </div>
        </div>
    )
}
