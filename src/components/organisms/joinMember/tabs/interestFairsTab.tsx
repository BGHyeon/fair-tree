import FairsSelect from '../fairsSelect.tsx';
import Text from '../../../atoms/text.tsx';

const InterestFairsTab = () => {
  return (
    <div className={'flex flex-col pt-12'}>
      <div className={'mb-12 flex flex-col items-center'}>
        <Text weight={'emphasize'} type={'title3'}>
          어떤 박람회 카테고리에
        </Text>
        <Text weight={'emphasize'} type={'title3'}>
          관심이 있으신가요?
        </Text>
      </div>
      <FairsSelect />
    </div>
  );
};

export default InterestFairsTab;
