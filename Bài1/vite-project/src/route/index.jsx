import Home from '~/pages/Home';
import Following from '~/pages/Following';
import { HeaderOnly } from '~/components/Layout';
import Content from '~/pages/Content';

const publicRoute = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/content', component: Content, layout: HeaderOnly },
];
const privateRoute = [];

export { privateRoute, publicRoute };
