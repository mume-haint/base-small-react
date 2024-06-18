// import {jwtDecode, JwtPayload} from 'jwt-decode';
//
import axios from 'src/api/base.ts';

const isValidToken = (accessToken: string): boolean => {
    if (!accessToken) {
        return false;
    }

    return true;

    // ----------------------------------------------------------------------

    // const decoded = jwtDecode<JwtPayload>(accessToken);
    // const currentTime = Date.now() / 1000;
    //
    // return decoded.exp !== undefined && decoded.exp > currentTime;
};

// ----------------------------------------------------------------------

const setAccessToken = (accessToken: string | null): void => {
    if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        // This function below will handle when the token is expired
        // const { exp } = jwtDecode<JwtPayload>(accessToken);
        // handleTokenExpired(exp);
    } else {
        localStorage.removeItem('accessToken');
        delete axios.defaults.headers.common.Authorization;
    }
};

export { isValidToken, setAccessToken };