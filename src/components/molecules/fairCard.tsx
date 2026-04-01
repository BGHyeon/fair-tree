import Text from '../atoms/text.tsx';
import { useNavigate } from 'react-router';

const FairCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate('/fair');
      }}
      className={
        'flex h-60 w-50 flex-shrink-0 flex-col justify-between rounded-xl border-1 border-gray-300 bg-black p-2 text-white'
      }
    >
      <div className={'flex items-center justify-between'}>
        <div className={'bg-primary-default rounded px-1'}>
          <Text weight={'emphasize'} type={'caption'}>
            베이비 육아
          </Text>
        </div>
      </div>
      <div>
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
            <Text weight={'emphasize'} type={'footnote'}>
              3월 16일 까지
            </Text>
            <Text weight={'emphasize'} type={'headline2'}>
              18,000원
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairCard;
