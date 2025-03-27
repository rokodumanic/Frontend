import BlockHeader from "@/components/tools/BlockHeader";
import dataHeader from "@/components/text/step3Header.json";
import FlexBenefits from "@/components/flexible/FlexBenefits";
import dataBenefits from "@/components/text/step3Benefits.json";
import CallToAction from "./CTA";
import Gradient from "@/components/tools/Gradiant";

function Step3() {
  return (
    <div>
      <BlockHeader
        title={dataHeader.title}
        blockname={dataHeader.blockname}
        description={dataHeader.description}
        bgcolor={dataHeader.bgcolor}
      />
      <FlexBenefits data={dataBenefits} />
      <CallToAction />
    </div>
  );
}

export default Step3;
