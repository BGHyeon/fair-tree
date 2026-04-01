import { createBrowserRouter } from 'react-router';
import RootTemplate from '../components/templates/common/rootTemplate.tsx';
import Home from '../pages/home/home.tsx';
import NonHeaderTemplate from '../components/templates/common/nonHeaderTemplate.tsx';
import Login from '../pages/login.tsx';
import JoinMember from '../pages/joinMember.tsx';
import FairDetail from '../pages/fairDetail.tsx';

const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootTemplate />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: '/login',
      element: <NonHeaderTemplate />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
    {
      path: '/join',
      element: <NonHeaderTemplate />,
      children: [
        {
          index: true,
          element: <JoinMember />,
        },
      ],
    },
    {
      path: '/fair',
      element: <NonHeaderTemplate />,
      children: [
        {
          index: true,
          element: <FairDetail />,
        },
      ],
    },
  ],
  { basename: '/fair-tree' },
);

export default appRouter;
