import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import appRouter from './router/appRouter.tsx';
import '@ncdai/react-wheel-picker/style.css';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={appRouter} />,
);
