import BlockHeader from "@/components/tools/BlockHeader";
import dataHeader from "@/components/text/step2Header.json";
import dataContent from "@/components/text/step2Content.json";
import Section from "./Section";
import styles from "./step2.module.css";

function Step2() {
  return (
    <div>
      <BlockHeader
        title={dataHeader.title}
        blockname={dataHeader.blockname}
        description={dataHeader.description}
        bgcolor={dataHeader.bgcolor}
      />
      <div className={styles.sectionContainer}>
      {dataContent.map((item, index) => (
        <Section
        key={index}
          index={index}
          src={item.src}
          alt={item.alt}
          title={item.title}
          description={item.description}
          button={item.button}
          buttonUrl={item.buttonUrl}
          optionTitle={item.optionTitle}
          optionDescription={item.optionDescription}
        />
      ))}
      </div>
    </div>
  );
}

export default Step2;
