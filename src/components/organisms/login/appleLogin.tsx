import AppleSvg from '../../../assets/apple.svg';
import Text from '../../atoms/text.tsx';
import { useNavigate } from 'react-router';

const AppleLogin = () => {
  const navigation = useNavigate();
  return (
    <button
      type={'button'}
      onClick={() => {
        navigation('/join');
      }}
      className={
        'border-border-strong row justify-center gap-0.5 rounded-xl border bg-black py-3 text-white'
      }
    >
      <img src={AppleSvg} alt={'apple svg'} />
      <Text weight={'emphasize'} type={'headline2'}>
        애플 계정으로 시작하기
      </Text>
    </button>
  );
};

export default AppleLogin;
