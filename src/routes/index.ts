import Home from '../components/pages/Home';
import News from '../components/pages/News';
import Discuss from '../components/pages/Discuss';
import Login from '../components/pages/Login';
import Recruit from '../components/pages/Recruit';
import Contact from '../components/pages/Contact';
import { HeaderOnly } from '../components/Layouts';
import NewsDetail from '../components/pages/NewsDetail';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/news/', component: News },
    { path: '/news/:id', component: NewsDetail },
    { path: '/recruit', component: Recruit },
    { path: '/contact', component: Contact },
];
const privateRoutes = [{ path: '/discuss', component: Discuss }];
export { publicRoutes, privateRoutes };
