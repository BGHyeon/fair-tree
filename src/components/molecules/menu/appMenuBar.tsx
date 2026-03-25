import AppMenu from './appMenu.tsx';
import { useState } from 'react';
import { LayoutGroup } from 'framer-motion';
import HomeIcon from '../../../assets/menu/home.svg';
import HomeFocusIcon from '../../../assets/menu/home_focus.svg';
import ProfileIcon from '../../../assets/menu/profile.svg';
import ProfileFocusIcon from '../../../assets/menu/profile_focus.svg';
import { twMerge } from 'tailwind-merge';

const AppMenuBar = () => {
  const [index, setIndex] = useState(0);

  return (
    <div
      className={twMerge(
        'absolute right-2 bottom-4 left-2 flex rounded-[5rem] border border-white/20 bg-white/70 p-1 backdrop-blur-xl',
        'shadow-xl/20 inset-shadow-2xs',
      )}
    >
      <LayoutGroup>
        <AppMenu
          title={'홈'}
          focus={index === 0}
          onClick={() => setIndex(0)}
          icon={(focus) => (
            <img src={focus ? HomeFocusIcon : HomeIcon} alt={'home'} />
          )}
        />
        <AppMenu
          title={'스크랩'}
          focus={index === 1}
          onClick={() => setIndex(1)}
          icon={(focus) => (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.5 3.5C18.78 3.5 19 3.72 19 4V19.64L12.64 16.65C12.44 16.55 12.22 16.51 12 16.51C11.78 16.51 11.56 16.56 11.36 16.65L5 19.64V4C5 3.72 5.22 3.5 5.5 3.5H18.5ZM18.5 2H5.5C4.4 2 3.5 2.9 3.5 4V22L12 18L20.5 22V4C20.5 2.9 19.6 2 18.5 2Z"
                fill={focus ? '#7474FF' : '#606060'}
              />
            </svg>
          )}
        />
        <AppMenu
          title={'일정'}
          focus={index === 2}
          onClick={() => setIndex(2)}
          icon={(focus) => (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4H16.75V3C16.75 2.59 16.41 2.25 16 2.25C15.59 2.25 15.25 2.59 15.25 3V4H8.75V3C8.75 2.59 8.41 2.25 8 2.25C7.59 2.25 7.25 2.59 7.25 3V4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM5 5.5H19C19.28 5.5 19.5 5.72 19.5 6V9.25H4.5V6C4.5 5.72 4.72 5.5 5 5.5ZM19 20.5H5C4.72 20.5 4.5 20.28 4.5 20V10.75H19.5V20C19.5 20.28 19.28 20.5 19 20.5Z"
                fill={focus ? '#7474FF' : '#606060'}
              />
            </svg>
          )}
        />
        <AppMenu
          title={'마이페이지'}
          focus={index === 3}
          onClick={() => setIndex(3)}
          icon={(focus) => (
            <img src={focus ? ProfileFocusIcon : ProfileIcon} alt={'profile'} />
          )}
        />
      </LayoutGroup>
    </div>
  );
};

export default AppMenuBar;
