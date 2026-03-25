import { Outlet } from 'react-router';
import Header from '../../organisms/common/header.tsx';
import AppMenuBar from '../../molecules/menu/appMenuBar.tsx';

const RootTemplate = () => {
  return (
    <main className={'h-full w-full'}>
      <Header />
      <Outlet />
      <AppMenuBar />
    </main>
  );
};

export default RootTemplate;
