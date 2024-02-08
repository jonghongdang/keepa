import Link from "next/link";

export default function Notification() {
  return (
    <div
      id="contentAlign"
      className="mt-[160px] min-w-[650px] max-w-[850px] mr-[40px] ml-[40px] relative w-[1461px]"
    >
      <div id="bodyPanel" className="content">
        <span className="paper">
          <ul
            style={{
              listStyle: "none",
              lineHeight: "19px",
              paddingLeft: "1.8em",
              textIndent: "-1.8em",
            }}
          >
            <li>✜&emsp; Comprehensive price history graphs</li>
            <li>✜&emsp; Price Drop & Availability Alerts</li>
            <li>
              ✜&emsp; Browser extensions - once installed the Keepa price
              history graph will be displayed directly on each Amazon product
              page
            </li>
            <li>
              ✜&emsp; Amazon Locales Support [ .com | .co.uk | .de | .co.jp |
              .fr | .ca | .it | .es | .in | .com.mx | .com.br ]
            </li>
            <li>✜&emsp; Registration Optional</li>
            <li>✜&emsp; Wish List Import</li>
            <li>✜&emsp; Deals, an overview of recent price drops</li>
          </ul>
          <br></br>
          <br></br>
          Monitoring
          <span id="productCount">4,408,082,967</span> products:
          <div id="productCountEntries">
            <div
              style={{
                lineHeight: "25px",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              <span
                title="Amazon.com"
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                <img style={{ marginBottom: "-1px" }} src="/flag.png"></img>
                &nbsp; 462,719,876 &emsp; &emsp;
              </span>
              <span
                title="Amazon.com"
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                <img style={{ marginBottom: "-1px" }} src="/flag.png"></img>
                &nbsp; 462,719,876, &emsp; &emsp;
              </span>
              <span
                title="Amazon.com"
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                <img style={{ marginBottom: "-1px" }} src="/flag.png"></img>
                &nbsp; 462,719,876 ,&emsp; &emsp;
              </span>
              <span
                title="Amazon.com"
                style={{ display: "inline-block", whiteSpace: "nowrap" }}
              >
                <img style={{ marginBottom: "-1px" }} src="/flag.png"></img>
                &nbsp; 462,719,876, &emsp; &emsp;
              </span>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
