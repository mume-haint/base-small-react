import {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "src/redux/store.ts";
import {usePathname, useRouter} from "src/hooks";
import {Outlet} from "react-router-dom";
import DashboardLayout from "src/layouts/dashboard";
import LoadingScreen from "src/components/LoadingScreen.tsx";

export default function AuthGuard() {
    const {isAuthenticated} = useSelector((state: RootState) => state.auth)
    const pathname = usePathname();
    const router = useRouter();
    const [requestedLocation, setRequestedLocation] = useState(null);
    const [init, setInit] = useState(false);

    useEffect(() => {
        const initData = async () => {
            setInit(true);
            if (!isAuthenticated) {
                if(pathname === '/') {
                    router.replace('/login')
                } else {
                    router.replace('/401')
                }
            }
            if (requestedLocation && pathname !== requestedLocation) {
                setRequestedLocation(null);
                router.push(requestedLocation)
            }
        }
        initData();
    }, [isAuthenticated, pathname, requestedLocation, router]);

    if(!init) {
        return <LoadingScreen />
    }

    return (
        <DashboardLayout>
            <Outlet />
        </DashboardLayout>
    )
}
