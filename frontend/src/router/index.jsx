import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';

import Homepage from '../Components/Homepage';
import Resume from '../Components/Resume/Resume';
import DuelForge from '../Components/DuelForge/DuelForge';


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/duelforge",
        element: <DuelForge />,
      },

          ],
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);
