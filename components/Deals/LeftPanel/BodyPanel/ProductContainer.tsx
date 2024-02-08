import Image from "next/image";

export default function ProductContainer() {

    return <div id="p0" className="productContainer min-w-[210px]">
        <div className="title max-w-[210px] text-[14px]">Aerosoles Women's Binocular …</div>
        <a href="#!product/1-B005B84SIQ">
            <div className="productBox colorTipContainer whiteDeals" id="pB0">
                <div className="productImageDiv">
                    <div className="productImage">
                        <Image className="active visible" alt="productImage" src="/productImage.jpg" width={180} height={180} data-xblocker="passed" />
                    </div>
                </div>
                <div className="productSmallDescription ml-[6px]" >
                    <div className="flex h-[12px]">
                        <span title="1 month Amazon price history" className="mb-[2px] hh-[10px] w-[50px] inline-block" style={{
                            backgroundImage: "url(https://graph.keepa.com/pricehistory.png?asin=B005B84SIQ&amp;domain=com&amp;salesrank=0&amp;amazon=1&amp;new=0&amp;used=0&amp;bb=0&amp;fba=0&amp;fbm=0&amp;pe=0&amp;ld=0&amp;bbu=0&amp;wd=0&amp;range=31&amp;width=50&amp;height=10&amp;type=1)"
                        }}></span>
                        <span title="1 month Sales Rank history. Current Rank: # 118,430" className="grow text-right right-[13px] h-[10px] w-[50px] inline-block" style={{
                            backgroundImage: "url(https://graph.keepa.com/pricehistory.png?asin=B005B84SIQ&amp;domain=com&amp;salesrank=1&amp;amazon=0&amp;new=0&amp;used=0&amp;bb=0&amp;fba=0&amp;fbm=0&amp;pe=0&amp;ld=0&amp;bbu=0&amp;wd=0&amp;range=31&amp;width=50&amp;height=10&amp;type=1) no-repeat right"
                        }}></span>
                        <br />
                    </div>
                    <div className="flex">
                        <div className="productDiscountBox">
                            <i className="fa fa-arrow-circle-down fa-18 arrowBlue text-[27px]"></i>
                            <span className="productSmallPercent-24">59%</span>
                        </div>
                        <div className="productDealTable">
                            <span className="productPriceTableTdSmallS">Average: $ 146.55</span>
                            <br />
                            <span className="productPriceTableTdLargeS">Now: $ 59.99</span>
                        </div>
                    </div>
                    <div className="productDealAgoBox">
                        <span className="productDealAgo">Deal found: 15 hours ago</span>
                        <br />
                        <span className="dealsFindRelatedDeals" data-catids="[11721155011,119764241011,5478067011,11549918011,119774357011]">Find related Deals</span>
                        <a className="externalAmazon absolute text-[#555] cursor-alias right-[7px] bottom-[7px]" href="https://dyn.keepa.com/r/?type=amazon&amp;smile=0&amp;domain=1&amp;asin=B005B84SIQ&amp;source=website&amp;path=dealsOverlay/AMAZON" title="Show on Amazon" target="_blank">
                            <i className="fa fa-amazon"></i>
                        </a>
                    </div>
                </div>
                <span className="colorTip w-[250px] top-[-55.0625px] ml-[-132px]" style={{ display: "none" }}>
                    <span className="colorTipContent">Aerosoles Women's Binocular Knee High Boot, Black, 8</span>
                    <span className="pointyTipShadow"></span>
                    <span className="pointyTip"></span>
                </span>
            </div>
        </a>
    </div>
}