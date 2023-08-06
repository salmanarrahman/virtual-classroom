import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';



export default function PrivateRoute({ children }) {
    const { user, isLoading } = useSelector(state => state.user)
    console.log(user);


    const { pathname } = useLocation();

    if (isLoading) {
        return <p>Loading...</p>;
    } else if (!user.email && !isLoading) {
        return <Navigate to="/login" state={{ path: pathname }} />;
    }

    return children;
}