import BusinessGrowth from "./BusinessGrowth"
import PortfolioWeb from "./Portfolio-Web"
import ProtfolioDesgin from "./Portfolio-Desgin"
import ProtfolioSeo from "./Protfolio-Seo";
import ProtfolioOptimisation from "./Protfolio-Optimisation";

export default function PortfolioMain() {
    return (
        <div className="container">
            <div className="pt-[120px] pb-[150px]">
                <BusinessGrowth />
                <PortfolioWeb />
                <ProtfolioDesgin />
                <ProtfolioSeo/>
                <ProtfolioOptimisation/>
            </div>
        </div>
    )
}
