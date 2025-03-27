import BlockHeader from "@/components/tools/BlockHeader";
import dataHeader from "../../text/step1Header.json";
import dataRoute from "../../text/step1Routes.json";
import Expandable from "./Expandable";

function Step1() {
  return (
    <div>
      <BlockHeader
        blockname={dataHeader.blockname}
        title={dataHeader.title}
        description={dataHeader.description}
        bgcolor={dataHeader.bgcolor}
      />
      {dataRoute.map((item, index) => (
        <Expandable
          key={index}
          src={item.src}
          alt={item.alt}
          title={item.title}
          items={item.items}
        />
      ))}
    </div>
  );
}

export default Step1;
