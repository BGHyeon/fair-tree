import { Outlet } from 'react-router';
import Header from '../../organisms/common/header.tsx';

const RootTemplate = () => {
  return (
    <main className={'h-full w-full'}>
      <Header />
      <Outlet />
    </main>
  );
};

export default RootTemplate;
