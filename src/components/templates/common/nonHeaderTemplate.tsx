import { Outlet } from 'react-router';

const NonHeaderTemplate = () => {
  return (
    <main className={'h-full w-full'}>
      <Outlet />
    </main>
  );
};

export default NonHeaderTemplate;
