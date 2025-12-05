import BusinessGrowth from "./BusinessGrowth"
import PortfolioWeb from "./Portfolio-Web"
import ProtfolioDesgin from "./Portfolio-Desgin"
import ProtfolioSeo from "./Protfolio-Seo";
import ProtfolioOptimisation from "./Protfolio-Optimisation";

export default function PortfolioMain() {
    return (
        <div className="container">
         <div className="pt-[70px] pb-[70px] xl:pt-[120px] xl:pb-[120px] main-sections-portfolio">
                <BusinessGrowth />
                <PortfolioWeb />
                <ProtfolioDesgin />
                <ProtfolioSeo/>
                <ProtfolioOptimisation/>
            </div>
        </div>
    )
}
