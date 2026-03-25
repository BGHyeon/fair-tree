import FairCard from '../../molecules/fairCard.tsx';
import Text from '../../atoms/text.tsx';
import RsResponsiveLayout from '../../atoms/layout/rsResponsiveLayout.tsx';

const EarlyBirdSection = () => {
  return (
    <div className={'flex w-full flex-col'}>
      <div className={'row w-full items-center justify-between p-4'}>
        <Text
          weight={'emphasize'}
          type={'headline1'}
          className={'text-text-strong'}
        >
          지금이 제일 싸요!
          <br />
          박람회 티켓 얼리버드 구매하기
        </Text>
        <Text weight={'regular'} type={'body2'} className={'text-text-body'}>
          더보기
        </Text>
      </div>
      <RsResponsiveLayout className={'gap-1'}>
        {[1, 2, 3, 4, 5, 6, 7].map((id) => (
          <FairCard key={`early_bird_${id}`} />
        ))}
      </RsResponsiveLayout>
    </div>
  );
};
export default EarlyBirdSection;
