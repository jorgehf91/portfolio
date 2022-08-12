import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>&lt;/html&gt;</span>
                <Outlet />

                <span className='tags bottom-tags'>
                &lt;/html&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>   
        </div>
    )
}

export default Layout