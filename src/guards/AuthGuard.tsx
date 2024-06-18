import {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "src/redux/store.ts";
import {usePathname, useRouter} from "src/hooks";
import LoadingScreen from "src/components/LoadingScreen.tsx";
import {Outlet} from "react-router-dom";
import DashboardLayout from "src/layouts/dashboard";
import {isValidToken, setAccessToken} from "src/utils/jwt.ts";

// ----------------------------------------------------------------------

export default function AuthGuard() {
    const {isAuthenticated} = useSelector((state: RootState) => state.auth)
    const pathname = usePathname();
    const router = useRouter();
    const [init, setInit] = useState<boolean>(false);
    const [requestedLocation, setRequestedLocation] = useState(null);

    useEffect(() => {
        setInit(true);

        const accessToken = window.localStorage.getItem('accessToken');

        if (accessToken && isValidToken(accessToken)) {
            setAccessToken(accessToken);
        }
        if (!isAuthenticated) {
            router.replace('/login')
        }

        if (requestedLocation && pathname !== requestedLocation) {
            setRequestedLocation(null);
            router.push(requestedLocation)
        }

    }, [isAuthenticated, pathname, requestedLocation, router]);


    if (!init) {
        return <LoadingScreen/>;
    }

    return (
        <DashboardLayout>
            <Outlet />
        </DashboardLayout>
    )
}
