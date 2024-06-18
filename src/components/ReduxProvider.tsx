// ReduxProvider.tsx
import React, {ReactNode, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from 'src/redux/store.ts';
import LoadingScreen from "src/components/LoadingScreen.tsx";
import {isValidToken, setAccessToken} from "src/utils/jwt.ts";
import {authProfile} from "src/redux/slices/authSlice.ts";

interface ReduxProviderProps {
    children: ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
    const [isStoreReady, setIsStoreReady] = useState(false);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const initializeStore = async () => {
            const accessToken = window.localStorage.getItem('accessToken');

            if (accessToken && isValidToken(accessToken)) {
                setAccessToken(accessToken);
                await dispatch(authProfile(null))
            }
            console.log('complete redux use effect')
            setIsStoreReady(true);
        };

        initializeStore();
    }, []);

    if (!isStoreReady) {
        return <LoadingScreen />;
    }

    return <>{children}</>;
};

export default ReduxProvider;
