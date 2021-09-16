import React from 'react'

const Home = React.lazy(() => import('./Pages/Home'))
const UserManagement = React.lazy(() => import('./Pages/UserManagement'))
const routes = [
  { path: '/', name: 'Home', component: UserManagement  },
  { path: '/dashboard', exact: true, name: 'Domain', component: Home  },
  { path: '/user',  name: 'User Management', component: UserManagement  },
  { path: '/dashboard', exact: true, name: 'State', component: Home  },
  { path: '/dashboard', exact: true, name: 'Custom Field', component: Home  },
  { path: '/dashboard', exact: true, name: 'Configuration', component: Home  },
  { path: '/dashboard', exact: true, name: 'Service Provider', component: Home  },
  { path: '/dashboard', exact: true, name: 'Number Plan', component: Home  },
  { path: '/dashboard', exact: true, name: 'Block Component', component: Home  },
  { path: '/dashboard', exact: true, name: 'Number Ownership', component: Home  },
]
export default routes;