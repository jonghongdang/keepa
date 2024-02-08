import LeftPanelBox from "./LeftPanelBox";

export default function LeftPanel() {

    return <div id="leftPanel" className="block">
        <div title="You can blacklist words by prefixing a minus sign, like this: &quot;-keyword&quot;">
            <input maxLength={2000} id="dealSearchBar" placeholder="Search deals" />
            <span id="submitDealSearch"></span>
        </div>
        <LeftPanelBox
            title="View as"
            contentDivId="dealsViewType"
            bgColor="#11171f80"
        >
            <div data-viewtype="1">
                Table &nbsp;
                <i className="fa fa-table" />
            </div>
            <div data-viewtype="0" className="active">
                Product Boxes&nbsp;
                <i className="fa fa-th-large"></i>
            </div>
        </LeftPanelBox>
        <LeftPanelBox
            title="Choose Deal type"
            contentDivId="dealPriceTypesFilter"
        >
            <div data-type="3">Sales Rank</div>
            <div className="h-[5px]"></div>
            <div data-type="18">Buy Box 🚚</div>
            <div className="active" data-type="0">Amazon</div>
            <div data-type="1">New</div>
            <div data-type="10">New, 3rd Party FBA</div>
            <div data-type="7">New, 3rd Party FBM 🚚</div>
            <div data-type="33">New, Prime exclusive</div>
            <div data-type="8">Lightning Deals</div>
            <div className="h-[5px]"></div>
            <div data-type="32">Buy Box Used 🚚</div>
            <div data-type="2">Used</div>
            <div data-type="19">Used, like new 🚚</div>
            <div data-type="20">Used, very good 🚚</div>
            <div data-type="21">Used, good 🚚</div>
            <div data-type="22">Used, acceptable 🚚</div>
            <div data-type="9">
                Warehouse Deals
                <div className="sub-deal-type-filter sub-deal-type-filter-9">
                    <div>
                        <input id="sub-deal-type-filter-9-2" type="checkbox" checked={false} data-warehousecondition="2" />
                        <label htmlFor="sub-deal-type-filter-9-2">Used - Like New</label>
                    </div>
                    <div>
                        <input id="sub-deal-type-filter-9-3" type="checkbox" checked={false} data-warehousecondition="3" />
                        <label htmlFor="sub-deal-type-filter-9-3">Used - Very Good</label>
                    </div>
                    <div>
                        <input id="sub-deal-type-filter-9-4" type="checkbox" checked={false} data-warehousecondition="4" />
                        <label htmlFor="sub-deal-type-filter-9-4">Used - Good</label>
                    </div>
                    <div>
                        <input id="sub-deal-type-filter-9-5" type="checkbox" checked={false} data-warehousecondition="5" />
                        <label htmlFor="sub-deal-type-filter-9-5">Used - Acceptable</label>
                    </div>
                </div>
            </div>
            <div className="h-[5px]"></div>
            <div data-type="6">Refurbished</div>
            <div data-type="5">Collectible</div>
            <div data-type="30">Trade-In</div>
            <div className="h-[5px]"></div>
        </LeftPanelBox>
        <LeftPanelBox
            title="Limit Drop Interval"
            contentDivId="dealDateRange"
        >
            <div className="active" data-daterange="0">Day</div>
            <div data-daterange="1">Week</div>
            <div data-daterange="2">Month</div>
            <div data-daterange="3">3 Months</div>
            <div data-daterange="4">All</div>
        </LeftPanelBox>
        <LeftPanelBox
            title={
                <a title="disable range selections" id="panelRangeSelectionDisableCross">
                    <i className="fa fa-caret-down"></i>{" "}
                    Select Ranges
                </a>
            }
            contentDivId="panelRangeSelection"
            contentDivClassName="ui-rangeSlider ui-rangeSlider-withArrows relative"
            contentDivStyle={{
                marginTop: "12px",
                // marginBottom: "-14px"
            }}
            className="filterbar__box filterbar__box--range h-auto"
        >
            <>
                <div id="deltaPercentRange" className="ui-rangeSlider ui-rangeSlider-withArrows relative">
                    <div className="ui-rangeSlider-container absolute w-[123px]">
                        <div className="ui-rangeSlider-innerBar absolute top-0 left-0 w-[123px]"></div>
                        <div className="ui-rangeSlider-bar absolute top-0 left-[12.3028px] w-[98.4px]"></div>
                        <div className="ui-rangeSlider-handle ui-rangeSlider-leftHandle absolute top-0 left-[12.3155px]">
                            <div className="ui-rangeSlider-handle-inner"></div>
                        </div>
                        <div className="ui-rangeSlider-handle ui-rangeSlider-rightHandle absolute top-0 left-[103.701px]">
                            <div className="ui-rangeSlider-handle-inner"></div>
                        </div>
                    </div>
                    <div className="ui-rangeSlider-arrow ui-rangeSlider-leftArrow absolute left-0">
                        <div className="ui-rangeSlider-arrow-inner"></div>
                    </div>
                    <div className="ui-rangeSlider-arrow ui-rangeSlider-rightArrow absolute right-0">
                        <div className="ui-rangeSlider-arrow-inner"></div>
                    </div>
                    <div className="ui-rangeSlider-label ui-rangeSlider-leftLabel absolute block right-[105.872px]">
                        <div className="ui-rangeSlider-label-value">10%</div>
                        <div className="ui-rangeSlider-label-inner"></div>
                    </div>
                    <div className="ui-rangeSlider-label ui-rangeSlider-rightLabel absolute block right-[14.4719px]">
                        <div className="ui-rangeSlider-label-value">90%</div>
                        <div className="ui-rangeSlider-label-inner"></div>
                    </div>
                </div>
                <div className="filterbar__label filterbar__label--up">
                    Drop Percent Range
                </div>
                <div id="deltaRange" className="ui-rangeSlider ui-rangeSlider-withArrows relative">
                    <div className="ui-rangeSlider-container absolute w-[123px]">
                        <div className="ui-rangeSlider-innerBar absolute top-0 left-0 w-[123px]"></div>
                        <div className="ui-rangeSlider-bar absolute top-0 w-[110.7px] left-0"></div>
                        <div className="ui-rangeSlider-handle ui-rangeSlider-leftHandle absolute top-0 left-0">
                            <div className="ui-rangeSlider-handle-inner"></div>
                        </div>
                        <div className="ui-rangeSlider-handle ui-rangeSlider-rightHandle absolute top-0 left-[103.701px]">
                            <div className="ui-rangeSlider-handle-inner"></div>
                        </div>
                    </div>
                    <div className="ui-rangeSlider-arrow ui-rangeSlider-leftArrow absolute left-0">
                        <div className="ui-rangeSlider-arrow-inner"></div>
                    </div>
                    <div className="ui-rangeSlider-arrow ui-rangeSlider-rightArrow absolute right-0">
                        <div className="ui-rangeSlider-arrow-inner"></div>
                    </div>
                    <div className="ui-rangeSlider-label ui-rangeSlider-leftLabel absolute block right-[121.711px]">
                        <div className="ui-rangeSlider-label-value">$ 0</div>
                        <div className="ui-rangeSlider-label-inner"></div>
                    </div>
                    <div className="ui-rangeSlider-label ui-rangeSlider-rightLabel absolute block right-[14.5031px]">
                        <div className="ui-rangeSlider-label-value">$ 90</div>
                        <div className="ui-rangeSlider-label-inner"></div>
                    </div>
                </div>
                <div className="filterbar__label filterbar__label--up">
                    Drop Range
                </div>
                <div id="deltaRange" className="ui-rangeSlider ui-rangeSlider-withArrows relative">
                    <div className="ui-rangeSlider-container absolute w-[123px]">
                        <div className="ui-rangeSlider-innerBar absolute top-0 left-0 w-[123px]"></div>
                        <div className="ui-rangeSlider-bar absolute top-0 w-[110.7px] left-0"></div>
                        <div className="ui-rangeSlider-handle ui-rangeSlider-leftHandle absolute top-0 left-0">
                            <div className="ui-rangeSlider-handle-inner"></div>
                        </div>
                        <div className="ui-rangeSlider-handle ui-rangeSlider-rightHandle absolute top-0 left-[103.701px]">
                            <div className="ui-rangeSlider-handle-inner"></div>
                        </div>
                    </div>
                    <div className="ui-rangeSlider-arrow ui-rangeSlider-leftArrow absolute left-0">
                        <div className="ui-rangeSlider-arrow-inner"></div>
                    </div>
                    <div className="ui-rangeSlider-arrow ui-rangeSlider-rightArrow absolute right-0">
                        <div className="ui-rangeSlider-arrow-inner"></div>
                    </div>
                    <div className="ui-rangeSlider-label ui-rangeSlider-leftLabel absolute block right-[121.711px]">
                        <div className="ui-rangeSlider-label-value">$ 58</div>
                        <div className="ui-rangeSlider-label-inner"></div>
                    </div>
                    <div className="ui-rangeSlider-label ui-rangeSlider-rightLabel absolute block right-[14.5031px]">
                        <div className="ui-rangeSlider-label-value">$ 400</div>
                        <div className="ui-rangeSlider-label-inner"></div>
                    </div>
                </div>
                <div className="filterbar__label filterbar__label--up">
                    Price Range
                </div>
                <div id="salesRankRange" className="flex">
                    <span>
                        Min. #
                        <div id="srRangeMin" contentEditable="true" title="Enter sales rank limit. Leave empty to set no limit. If a value is set all products with no sales rank will be excluded!">
                            All
                        </div>
                    </span>
                    <span>
                        Max. #
                        <div id="srRangeMax" contentEditable="true" title="Enter sales rank limit. Leave empty to set no limit. If a value is set all products with no sales rank will be excluded!">
                            All
                        </div>
                    </span>
                </div>
                <div className="filterbar__label filterbar__label">Sales Rank Range</div>
                <div id="minRating" className="filterbar__filter filterbar__filter--star">
                    <i className="fa fa-star" data-rating="10"></i>
                    <i className="fa fa-star-o" data-rating="20"></i>
                    <i className="fa fa-star-o" data-rating="30"></i>
                    <i className="fa fa-star-o" data-rating="40"></i>
                    <i className="fa fa-star-o" data-rating="50"></i>
                </div>
                <div className="filterbar__label">Min. Rating</div>
            </>
        </LeftPanelBox>
        <LeftPanelBox
            title={
                <a title="disable filters" id="panelFilterSelectionDisableCross">
                    <i className="fa fa-caret-down"></i>{" "}
                    Apply filter
                </a>
            }
            contentDivId="dealCheckBoxes"
        >
            <div>
                <input id="checkboxLowestEver" type="checkbox" />
                <label htmlFor="checkboxLowestEver">Lowest ever</label>
            </div>
            <div>
                <input id="checkboxLowestAll" type="checkbox" />
                <label title="only show products with the lowest of all new offers (Amazon, Marketplace New)" htmlFor="checkboxLowestAll">Lowest New offer</label>
            </div>
            <div>
                <input id="checkboxOutOfStock" type="checkbox" />
                <label htmlFor="checkboxOutOfStock">Out of stock</label>
            </div>
            <div>
                <input id="checkboxMustHaveAmazonOffer" disabled={true} type="checkbox" />
                <label htmlFor="checkboxMustHaveAmazonOffer">Has Amazon offer</label>
            </div>
            <div>
                <input id="checkboxMustNotHaveAmazonOffer" disabled={true} type="checkbox" />
                <label htmlFor="checkboxMustNotHaveAmazonOffer">No Amazon offer</label>
            </div>
            <div>
                <input id="checkboxHasReviews" type="checkbox" />
                <label htmlFor="checkboxHasReviews">Must have reviews</label>
            </div>
            <div>
                <input id="checkboxIsPrimeExclusive" type="checkbox" />
                <label htmlFor="checkboxIsPrimeExclusive">Is Prime exclusive (beta)</label>
            </div>
            <div>
                <input id="checkboxFilterErotic" checked={true} type="checkbox" />
                <label htmlFor="checkboxFilterErotic">Filter adult items</label>
            </div>
            <div>
                <input id="checkboxSingleVariation" checked={true} type="checkbox" />
                <label htmlFor="checkboxSingleVariation" className="w-[132px]">Show only one variation per product</label>
            </div>
        </LeftPanelBox>
        <LeftPanelBox
            title="Sort by"
            contentDivId="dealSortType"
        >
            <div className="active" data-sort="percentage">Percentage&nbsp;<i className="fa fa-sort-numeric-desc"></i></div>
            <div data-sort="drop">Drop</div>
            <div data-sort="price">Price</div>
            <div data-sort="newest">Newest</div>
            <div data-sort="salesRank" title="Products with no sales rank will be excluded!">Sales Rank</div>
        </LeftPanelBox>
        <div className="pr-[10px]">
            <div className="text-[#8a8a8a] text-[12px] text-right mb-[6px] mt-[-4px]">
                {" "}🚚 = shipping included
            </div>
            <div id="resetSettings" title="reset selections to default values"><i className="fa fa-undo"></i>{" "}Reset Selections</div>
            <div id="clearVisited"><i className="fa fa-eraser"></i>{" "}Clear visited deals</div>
            <div id="clearVisitedSetting"><i className="fa fa-sliders"></i>{" "}Set clearing interval</div>
            <br />
            <div id="queryJSON" title="show Deals API query"><i className="fa fa-file-code-o"></i>{" "}Show API query</div>
            <br /> <br />
            <div id="leftPanelMarkAllVisited"><i className="fa fa-check-square-o fa-lg"></i><br /><span>Mark all as seen</span></div>
            <div>
                <div className="leftPanelBottomMenu none" id="leftPanelBackToTop">
                    <i className="fa fa-arrow-up fa-lg"></i><br />
                    <span>Back to top</span>
                </div>
            </div>
        </div>

    </div >
}