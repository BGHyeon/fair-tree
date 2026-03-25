import Text from '../atoms/text.tsx';

const FairCard = () => {
  return (
    <div
      className={
        'flex h-35 w-70 flex-shrink-0 flex-col justify-between rounded-xl border-1 border-gray-300 p-2'
      }
    >
      <Text weight={'emphasize'} type={'headline2'}>
        2026 경남 코베 베이비페어&유아교육전
      </Text>
      <div className={'flex flex-col items-end justify-end'}>
        <Text
          weight={'emphasize'}
          type={'body2'}
          className={'text-gray-600 line-through'}
        >
          36,000원
        </Text>
        <div className={'row items-center gap-1'}>
          <Text
            weight={'emphasize'}
            type={'footnote'}
            className={'text-blue-500'}
          >
            3월 16일 까지
          </Text>
          <Text weight={'emphasize'} type={'headline1'}>
            18,000원
          </Text>
        </div>
      </div>
    </div>
  );
};

export default FairCard;
