import Ratings from './experience/Ratings';
import ImageExp from './experience/ImageExp';
import BlockHeader from './tools/BlockHeader';
import welcomeHeader from './text/welcomeHeader.json';

function Experience() {
  return (
    <div className="bg-[#062949] w-full text-white py-10">
      <Ratings />
      <BlockHeader blockname={welcomeHeader.blockname} title={welcomeHeader.title} description={welcomeHeader.description} bgcolor={welcomeHeader.bgcolor} color={welcomeHeader.color}/>
      <ImageExp />
    </div>
  );
}

export default Experience;
