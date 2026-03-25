import Text from '../../atoms/text.tsx';
import RsResponsiveLayout from '../../atoms/layout/rsResponsiveLayout.tsx';
import GatheringCard from '../../molecules/gatheringCard.tsx';
import TextSplit from '../../atoms/textSplit.tsx';

const GatheringSection = () => {
  return (
    <div className={'flex w-full flex-col'}>
      <div className={'row w-full items-center justify-between p-4'}>
        <div className={'flex flex-col'}>
          <Text
            weight={'emphasize'}
            type={'headline1'}
            className={'text-text-strong'}
          >
            박람회 같이 가요!
          </Text>
          <Text weight={'emphasize'} type={'body2'}>
            서울 <TextSplit /> 경기도
          </Text>
        </div>
        <Text className={'text-text-body'} weight={'regular'} type={'body2'}>
          더보기
        </Text>
      </div>
      <RsResponsiveLayout className={'gap-1'}>
        {[1, 2, 3, 4, 5, 6, 7].map(() => (
          <GatheringCard />
        ))}
      </RsResponsiveLayout>
    </div>
  );
};
export default GatheringSection;
