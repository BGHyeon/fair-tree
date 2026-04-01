import Text from '../atoms/text.tsx';
import TextSplit from '../atoms/textSplit.tsx';

const FairInfo = () => {
  return (
    <div className={'border-border-strong flex flex-col border-b p-4'}>
      <Text
        weight={'emphasize'}
        type={'footnote'}
        className={'text-text-primary'}
      >
        베이비 육아
      </Text>
      <Text weight={'emphasize'} type={'body1'}>
        2026 유학박람회
      </Text>
      <Text weight={'emphasize'} type={'body2'} className={'text-gray-400'}>
        ~2026.03.20(금)까지 <TextSplit /> 코엑스
      </Text>
    </div>
  );
};

export default FairInfo;
