import InsightCard from "./InsightCard";
import image1 from "../../../../Images/stat-3.jpg";
import image2 from "../../../../Images/stat-4.jpg";

function Cards() {
  return (
    <div className="flex flex-col justify-center px-4 gap-3 sm:px-8 sm:gap-6 md:px-12 md:gap-6 md:max-w-[70dvw] lg:px-4 lg:gap-3">
      <InsightCard cardImage={image1}
        cardText ={'Islamabad real estate, particularly within Capital Development Authority (CDA) sectors, is no longer just a housing market—it is an aggressive wealth-generation engine.The following introduction is built on actual market surges observed in the capital over the last decade (2016–2026).Buy, Sell, and Trade Islamabad Assets with Performance DataReal estate in Pakistan’s capital is a high-velocity transactional market. In the last 10 years, land value across Islamabad’s master-planned zones has moved from steady appreciation to exponential growth.CDA Sector Performance (10-Year Growth Index)Data from official CDA auctions and secondary market transactions confirms that investors who entered the market a decade ago have seen capital appreciation exceeding 200-300% in premium sectors.CDA Location2016 Base Rate (Est. per sq. ft.)2026 Market Rate (Est. per sq. ft.)Performance DeltaF-7 SectorRs. 8,750Rs. 26,250+200%G-11 SectorRs. 6,370Rs. 19,110+200%Blue Area (Comm)Rs. 4,950Rs. 14,840+199%D-12 SectorRs. 3,210Rs. 9,650+200%Market Insight: As of June 2026, the shift has moved toward "The Future Corridor" (Sectors C-14, C-15, and C-16) and the high-density vertical developments in the Blue Area. Verified CDA inventory remains the primary hedge against national inflation.Execute Your Next TransactionWe provide a transparent, data-driven platform for serious buyers and sellers to liquidate or acquire prime Islamabad acreage.'} 
        />
      <InsightCard cardImage={image2}
        cardText ="demmo one two three"/>
    </div>
  );
}

export default Cards;
