import GoogleSvg from '../../../assets/google.svg';
import Text from '../../atoms/text.tsx';

const GoogleLogin = () => {
  return (
    <button
      type={'button'}
      className={
        'row justify-center gap-0.5 rounded-xl border border-[#D7D7D7] bg-white py-3'
      }
    >
      <img src={GoogleSvg} alt={'google svg'} />
      <Text weight={'emphasize'} type={'headline2'}>
        구글 계정으로 시작하기
      </Text>
    </button>
  );
};

export default GoogleLogin;
