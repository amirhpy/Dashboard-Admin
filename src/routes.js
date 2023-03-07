import Overview from './Pages/Overview/Overview'
import Analytics from './Pages/Analytics/Analytics'
import ECommerce from './Pages/ECommerce/ECommerce'
import Customers from './Pages/Customers/Customers'
import Products from './Pages/Products/Products'

let routes = [
    { path: '/', element: <Overview /> },
    { path: '/analytics', element: <Analytics /> },
    { path: '/ecommerce', element: <ECommerce /> },
    { path: '/customers', element: <Customers /> },
    { path: '/products', element: <Products /> }
]

export default routes