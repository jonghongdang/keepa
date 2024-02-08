import Link from "next/link";

export default function Manage() {
  return (
    <div
      id="contentAlign"
      className="mt-[160px] min-w-[650px] max-w-[850px] mr-[5%] ml-[5%] relativew-[1484px]"
    >
      <div id="bodyPanel" className="content">
        <div className="data-container text_long manage">
          <div id="grid-tools-fab-floating" className="grid-wrapper-tools-fab">
            <ul className="tools-fab-floating">
              <li className="mdc-menu-anchor">
                <button
                  id="fab-search"
                  className="mdc-fab mdc-fab--mini"
                  aria-label="Search"
                >
                  ::before
                  <i className="fa fa-search mdc-fab__icon colorTipContainer manage-fab">
                    ::before
                    <span className="colorTip">
                      <span className="colorTipContent">Search</span>
                      <span className="pointyTipShadow">Search</span>
                      <span className="pointyTip">Search</span>
                    </span>
                  </i>
                  ::after
                </button>
                <div id="fab-search-menu" className="mdc-menu" tabIndex={-1}>
                  <ul
                    className="mdc-menu__items mdc-list"
                    role="menu"
                    aria-hidden="true"
                  >
                    <li className="mdc-list-item" role="menuitem" tabIndex={0}>
                      <div className="mdc-text-field mdc-text-field--dense">
                        <input
                          id="fab-search-input"
                          className="mdc-text-field__input"
                          type="text"
                          placeholder="Search"
                          autoFocus
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="grid-wrapper-manage"
          className="grid-wrapper manage"
          style={{ height: "789px", width: "900px" }}
        >
          <div id="grid-manage" className="grid ag-theme-balham">
            <div className="ag-root-wrapper ag-layout-normal ag-ltr">
                <div>

                </div>
                <div>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
