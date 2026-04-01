import FairDetailTemplate from '../components/templates/fairDetailTemplate.tsx';
import FairDetailInfos from '../components/organisms/fairDetail/fairDetailInfos.tsx';
import FairDetailFooter from '../components/organisms/fairDetail/fairDetailFooter.tsx';

const FairDetail = () => {
  return (
    <FairDetailTemplate
      fairInfo={<FairDetailInfos />}
      fairPhoto={<div className={'h-100 w-full bg-black'} />}
      footer={<FairDetailFooter />}
    />
  );
};

export default FairDetail;
