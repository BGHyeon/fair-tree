import Text from '../atoms/text.tsx';

const GatheringCard = () => {
  return (
    <div
      className={
        'flex h-35 w-70 flex-shrink-0 flex-col rounded-xl border-1 border-gray-300 p-2'
      }
    >
      <Text weight={'emphasize'} type={'body2'}>
        대충 닉네임
      </Text>
      <div className={'row'}>
        <Text weight={'regular'} type={'footnote'}>
          코엑스
        </Text>
      </div>
      <Text weight={'emphasize'} type={'body1'} className={'mt-2'}>
        취업박람회 가실분?
      </Text>
    </div>
  );
};

export default GatheringCard;
