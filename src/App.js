import React from 'react'
import { useRoutes } from 'react-router-dom'

// Routes
import routes from './routes'

// Components
import Header from './Components/Header/Header'
import PanelAdmin from './Components/PanelAdmin/PanelAdmin'

function App() {
    let router = useRoutes(routes)

    return (
        <div className='app-container'>
            <PanelAdmin />
            <div className='app-right'>
                <Header />
                {router}
            </div>
        </div>
    )
}

export default App