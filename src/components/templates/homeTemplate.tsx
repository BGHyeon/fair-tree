import type { ReactNode } from 'react';

interface HomeTemplateProps {
  earlyBird: ReactNode;
  gather: ReactNode;
  location1: ReactNode;
  location2: ReactNode;
}

const HomeTemplate = (props: HomeTemplateProps) => {
  return (
    <div
      className={
        'scrollbar-hide flex h-screen w-full flex-col gap-7 overflow-y-scroll'
      }
    >
      {props.earlyBird}
      {props.gather}
      {props.location1}
      {props.location2}
      <div className={'mt-35'} />
    </div>
  );
};

export default HomeTemplate;
