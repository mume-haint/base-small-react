import {useMemo} from 'react';
import {useNavigate} from 'react-router-dom';

interface Router {
    back: () => void;
    forward: () => void;
    reload: () => void;
    push: (href: string) => void;
    replace: (href: string) => void;
}

export function useRouter(): Router {
    const navigate = useNavigate();

    return useMemo<Router>(
        () => ({
            back: () => navigate(-1),
            forward: () => navigate(1),
            reload: () => window.location.reload(),
            push: (href) => navigate(href),
            replace: (href) => navigate(href, {replace: true}),
        }),
        [navigate]
    );
}
