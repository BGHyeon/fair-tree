import Text from '../../../atoms/text.tsx';
import Congraturation from '../../../../assets/congraturation.png';

const JoinResultTab = () => {
  return (
    <div className={'flex h-full flex-1 flex-col items-center justify-center'}>
      <div className={'flex flex-col items-center'}>
        <Text weight={'emphasize'} type={'title1'}>
          가입을 축하해요!
        </Text>
        <Text
          weight={'emphasize'}
          type={'headline2'}
          className={'text-text-body'}
        >
          이제 다양한 박람회를
        </Text>
        <Text
          weight={'emphasize'}
          type={'headline2'}
          className={'text-text-body'}
        >
          쉽게 찾아볼 수 있어요!
        </Text>
      </div>
      <img src={Congraturation} alt={'congraturation'} />
    </div>
  );
};
export default JoinResultTab;
