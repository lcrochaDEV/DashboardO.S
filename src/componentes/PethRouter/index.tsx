import Header from '../Header';
import { Outlet } from 'react-router-dom';


const PethRouter = () => {
    return (
        <>
            <Header/>
            <Outlet />
       </>
    );
}

export default PethRouter;