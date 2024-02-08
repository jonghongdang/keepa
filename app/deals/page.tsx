import LeftPanel from "@/components/Deals/LeftPanel";
import BodyPanel from "@/components/Deals/LeftPanel/BodyPanel";
import LeftPanelBox from "@/components/Deals/LeftPanel/LeftPanelBox";

export default function Deals() {

    return <>
        <LeftPanel />
        <div id="contentAlign" className="mt-[130px] w-auto mr-[5px] ml-[180px] min-w-[650px] relative">
            <BodyPanel />
        </div>
    </>
}