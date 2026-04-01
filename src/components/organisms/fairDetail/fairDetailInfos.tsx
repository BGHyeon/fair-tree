import Info from '../../molecules/info.tsx';
import Text from '../../atoms/text.tsx';
import TextSplit from '../../atoms/textSplit.tsx';

const FairDetailInfos = () => {
  return (
    <div className={'flex flex-col gap-2'}>
      <div className={'mb-2 flex flex-col'}>
        <Text
          weight={'emphasize'}
          type={'headline2'}
          className={'text-text-primary'}
        >
          베이비 육아
        </Text>
        <Text weight={'emphasize'} type={'headline1'}>
          2026 경남 코베 베이비페어&유아교육전
        </Text>
      </div>
      <Info title={'박람회 장소'} content={'경기도 성남시 코엑스대로 코엑스'} />
      <Info title={'박람회 운영 날짜'} content={'2026.10.15 ~ 2026.10.17'} />
      <Info
        title={'박람회 운영 시간'}
        content={
          <div className={'flex flex-col items-end'}>
            <Text weight={'emphasize'} type={'body1'}>
              11:00 ~ 18:00
            </Text>
            <Text
              weight={'emphasize'}
              type={'body2'}
              className={'text-text-warning'}
            >
              마지막 날은 15:00까지
            </Text>
          </div>
        }
      />
      <Info
        title={'박람회 가격'}
        content={
          <div className={'flex flex-col items-end'}>
            <div className={'ju flex items-center gap-1'}>
              <Text weight={'emphasize'} type={'body1'}>
                ~ 9월 1일
              </Text>
              <TextSplit />
              <Text
                weight={'emphasize'}
                type={'body1'}
                className={'text-text-body line-through'}
              >
                20,000원
              </Text>
              <Text
                weight={'emphasize'}
                type={'headline2'}
                className={'text-text-primary'}
              >
                50%
              </Text>
            </div>
            <Text weight={'emphasize'} type={'headline1'}>
              10,000원
            </Text>
          </div>
        }
      />
    </div>
  );
};

export default FairDetailInfos;
