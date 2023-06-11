import { Outlet ,Navigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

const ProtectedRoutes = () =>
{
    const { isLoginUser } = useSelector((state)=>state.loginUserReducer)

    return(
        isLoginUser ? <Outlet/> : <Navigate to="/" replace />
    )

}
export default ProtectedRoutes