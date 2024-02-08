import ProductContainer from "./ProductContainer";

export default function BodyPanel() {

    return <div className="content" id="bodyPanel">
        <div id="dealsSaveBox" className="flex">
            <div className="saveSlotBox">
                <span title="load bookmark" data-slot="0" className="dealsSaveSlot">Your Deals #0</span>
                <ul>
                    <li data-type="0">Overwrite with current selection</li>
                    <li data-type="1">Rename</li>
                    <li data-type="2">Delete</li>
                </ul>
                <span title="edit bookmark" className="editSaveSlot">
                    <i className="fa fa-pencil"></i>
                </span>
            </div>
            <div id="dealsSaveSlotAdd" title="create bookmark for this selection">
                <i className="fa fa-plus-circle fa-lg"></i>
            </div>
        </div>
        <div id="dealsNotice" className="hidden text-[12px] absolute">
            <aside className="ml-[50px]">
                <span id="betaNotice"></span>
            </aside>
        </div>
        <div className="filterContainer unselectable">
            <div className="text-right w-[90%] min-w-[740px] m-auto relative">
                <label htmlFor="dealCategoryIncludeMeta" className="cursor-pointer pr-5 text-xs">
                    <input id="dealCategoryIncludeMeta" name="dealCategoryIncludeMeta" value="1" type="checkbox" /> Show meta categories
                </label>
                <input className="w-[200px]" maxLength={28} id="dealCategorySearchBar" placeholder="Search for subcategories" />
                <span className="right-[3px]" id="submitDealCategorySearch"></span>
            </div>
            <div id="filterBar" className="filterBar lightShadow">
                <div id="categorySearchResults"></div>
                <div id="filterBarContent">

                    <div id="filterCats">
                        <span className="text-[#444] whitespace-nowrap" style={{ textShadow: "#ccc 1px 1px 2px" }}>Show all (16213)</span>
                        <hr className="mt-[9px] border-[#0a285280]" />
                        <span className="whitespace-nowrap ml-[-6px]"><a rel="9223372036854776000">? (53)</a>
                            <a className="removeCat" rel="9223372036854776000">
                                <i className="fa fa-times"></i>
                            </a>
                        </span>
                        <span className="whitespace-nowrap ml-[-6px]">
                            <a rel="16333372011">Amazon Devices &amp; Accessories (1)</a>
                            <a className="removeCat" rel="16333372011">
                                <i className="fa fa-times"></i>
                            </a>
                        </span>
                        <span className="whitespace-nowrap ml-[-6px]">
                            <a rel="2619525011">Appliances (58)</a>
                            <a className="removeCat" rel="2619525011">
                                <i className="fa fa-times"></i>
                            </a>
                        </span>
                    </div>
                    <div id="removedCats"></div>
                </div>
            </div>
        </div>
        <div className="text-[12px] text-[#999] pl-[36px]" id="dealsTitleSearchResults"></div>
        <div id="productPage0" className="productPage">
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
            <ProductContainer />
        </div>
        <div id="loadingIcon" style={{ display: "none" }}></div>
        <div className="button" id="submitDealQuery" style={{ display: "none" }}>Find Deals!</div>
    </div>
}