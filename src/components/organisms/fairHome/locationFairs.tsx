import Text from '../../atoms/text.tsx';
import FairInfo from '../../molecules/fairInfo.tsx';

interface LocationFairsProps {
  address: string;
}

const LocationFairs = (props: LocationFairsProps) => {
  return (
    <div className={'flex flex-col'}>
      <div className={'mb-4 flex justify-between px-4'}>
        <Text
          weight={'emphasize'}
          type={'headline1'}
          className={'text-text-strong'}
        >
          {props.address}에서 진행중인 박람회
        </Text>
        <Text className={'text-text-body'} weight={'emphasize'} type={'body2'}>
          더보기
        </Text>
      </div>
      <div>
        {[0, 1, 2, 3, 4].map(() => (
          <FairInfo />
        ))}
      </div>
    </div>
  );
};

export default LocationFairs;
