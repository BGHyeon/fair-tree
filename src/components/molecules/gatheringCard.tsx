import Text from '../atoms/text.tsx';
import LocationSvg from '../../assets/location.svg';

const GatheringCard = () => {
  return (
    <div
      className={
        'flex h-35 w-70 flex-shrink-0 flex-col justify-between rounded-xl border-1 border-gray-300 p-3'
      }
    >
      <div className={'flex flex-col'}>
        <Text
          weight={'emphasize'}
          type={'footnote'}
          className={'text-text-tertiary'}
        >
          대충 닉네임
        </Text>
        <Text weight={'emphasize'} type={'body2'}>
          디자인 및 개발 IT취업 박람회
        </Text>

        <Text
          weight={'emphasize'}
          type={'body2'}
          className={'text-text-tertiary mt-1 line-clamp-2 overflow-hidden'}
        >
          취업박람회 가실분? 취업박람회 가실분?취업박람회 가실분? 취업박람회
          가실분? 취업박람회 가실분?취업박람회 가실분? 취업박람회 가실분?
          취업박람회 가실분?취업박람회 가실분? 취업박람회 가실분? 취업박람회
          가실분?취업박람회 가실분? 취업박람회 가실분? 취업박람회
          가실분?취업박람회 가실분? 취업박람회 가실분? 취업박람회
          가실분?취업박람회 가실분? 취업박람회 가실분? 취업박람회
          가실분?취업박람회 가실분? 취업박람회 가실분? 취업박람회
          가실분?취업박람회 가실분? 취업박람회 가실분? 취업박람회
          가실분?취업박람회 가실분? 취업박람회 가실분? 취업박람회
          가실분?취업박람회 가실분? 취업박람회 가실분? 취업박람회
          가실분?취업박람회 가실분? 취업박람회 가실분? 취업박람회
          가실분?취업박람회 가실분? 취업박람회 가실분? 취업박람회
          가실분?취업박람회 가실분? 취업박람회 가실분? 취업박람회
          가실분?취업박람회 가실분? 취업박람회 가실분? 취업박람회
          가실분?취업박람회 가실분?
        </Text>
      </div>
      <div className={'mt-2 flex justify-between'}>
        <div className={'flex'}>
          <img src={LocationSvg} alt={'location'} />
          <Text weight={'regular'} type={'footnote'}>
            코엑스
          </Text>
        </div>
        <Text weight={'regular'} type={'footnote'}>
          1자리 남음
        </Text>
      </div>
    </div>
  );
};

export default GatheringCard;
