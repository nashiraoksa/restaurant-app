import RestoCatalogue from '../views/pages/catalogue';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': RestoCatalogue,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
