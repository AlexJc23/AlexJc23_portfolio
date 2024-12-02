import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';

import Homepage from '../Components/Homepage';
import Resume from '../Components/Resume/Resume';
import DuelForge from '../Components/DuelForge/DuelForge';
import Crafty from '../Components/Crafty';
import Sqg from '../Components/SidequestGatherings/Sqg';


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
      {
        path: "/crafty",
        element: <Crafty />,
      },
      {
        path: "/sidequest_gatherings",
        element: <Sqg />,
      },

          ],
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);
