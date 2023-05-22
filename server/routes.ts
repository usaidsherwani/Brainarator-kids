// #region Global Imports
const nextRoutes = require('next-routes');
// #endregion Global Imports

const routes = (module.exports = nextRoutes());

/* ------------------------------- HOME ROUTES ------------------------------ */

routes.add('home/index', '/');
routes.add('blockly/index', '/blockly');

export default routes;
