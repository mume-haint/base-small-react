import {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState} from "src/redux/store.ts";
import {usePathname, useRouter} from "src/hooks";
import {Outlet} from "react-router-dom";
import DashboardLayout from "src/layouts/dashboard";

// ----------------------------------------------------------------------

export default function AuthGuard() {
    const {isAuthenticated} = useSelector((state: RootState) => state.auth)
    const pathname = usePathname();
    const router = useRouter();
    const [requestedLocation, setRequestedLocation] = useState(null);

    useEffect(() => {

    }, [])

    useEffect(() => {
        const initData = async () => {
            if (!isAuthenticated) {
                router.replace('/login')
            }
            if (requestedLocation && pathname !== requestedLocation) {
                setRequestedLocation(null);
                router.push(requestedLocation)
            }
        }
        initData();
    }, [isAuthenticated, pathname, requestedLocation, router]);


    return (
        <DashboardLayout>
            <Outlet />
        </DashboardLayout>
    )
}
