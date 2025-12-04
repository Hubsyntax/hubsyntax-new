import BusinessSales from "./home-section/Business-scales";
import ScalesSlider from "./home-section/scales-slider";
import ClientReview from "./home-section/Client-review";
import RecentProject from "./home-section/Recent-project";
import TrustWorld from "./home-section/Trust-world";
import BoostAgency from "./home-section/Boost-Agency";
import AgencySlider from "./home-section/Agency-slider";
import KickProject from "./home-section/Kick-project";
import DeliverSolution from "./home-section/Deliver-solution";

export default function Home() {
    return (
        <div>
            <BusinessSales />
            <ScalesSlider />
            <DeliverSolution />
            <KickProject/>
            <BoostAgency />
            <AgencySlider/>
            <TrustWorld />
            <RecentProject />
            <ClientReview />
        </div>
    )
}
