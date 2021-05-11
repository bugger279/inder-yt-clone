import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../redux/actions/auth.action';
import './loginScreen.scss'

const LoginScreen = () => {
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.auth.accessToken);
    console.log(accessToken, 'accessToken');
    const history = useHistory();
    const handleLogin = () => {
        dispatch(login());
    }

    useEffect(() => {
        if (accessToken) {
            history.push('/');
        }
    }, [accessToken, history])

    return (
        <div className="login">
            <div className="login__container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="Login"/>
                <button onClick={handleLogin}>Login with Google</button>
                <p>General description about the project</p>
            </div>
        </div>
    )
}

export default LoginScreen
