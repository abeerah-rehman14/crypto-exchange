import { Outlet ,Navigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

// const ProtectedRoutes = ({child}) =>
// {
//     const { isLoginUser } = useSelector((state)=>state.loginUserReducer)

//     return(
//         isLoginUser ? child? child : <Outlet/> : <Navigate to="/" replace />
//     )

// }
// export default ProtectedRoutes


const ProtectedRoutes = ({
    redirectPath = '/',
    children,
  }) => 
  {
    const { isLoginUser } = useSelector((state)=>state.loginUserReducer)

    if (!isLoginUser) {
      return <Navigate to={redirectPath} replace />;
    }
    return children ? children : <Outlet />;
  };
  export default ProtectedRoutes