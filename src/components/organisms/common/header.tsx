import PrimaryButton from '../../atoms/buttons/primaryButton.tsx';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigation = useNavigate();
  return (
    <div
      className={
        'flex items-center justify-between border-b border-gray-200 p-4'
      }
    >
      <div className={'flex gap-x-2'}>
        <img
          src={`${import.meta.env.BASE_URL}logo.svg`}
          alt={'logo'}
          width={26}
        />
        <img
          src={`${import.meta.env.BASE_URL}title.svg`}
          alt={'title'}
          width={97}
        />
      </div>
      <div>
        <PrimaryButton
          text={'로그인'}
          onClick={() => {
            navigation('/login');
          }}
        />
      </div>
    </div>
  );
};

export default Header;
