import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
    <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
    {
        title: 'dashboard',
        path: '/',
        icon: icon('ic_analytics'),
    },
    {
        title: 'local context post',
        path: '/local-posts',
        icon: icon('ic_user'),
    },
    {
        title: 'api context post',
        path: '/api-posts',
        icon: icon('ic_user'),
    },
    {
        title: 'redux profile',
        path: '/redux-profile',
        icon: icon('ic_cart'),
    },
    {
        title: 'RHF page',
        path: '/rhf-page',
        icon: icon('ic_blog'),
    },
    {
        title: 'MUI component',
        path: '/component',
        icon: icon('ic_lock'),
    },
    {
        title: '404',
        path: '/404',
        icon: icon('ic_disabled'),
    },
    {
        title: '403',
        path: '/403',
        icon: icon('ic_disabled'),
    },
    {
        title: '401',
        path: '/401',
        icon: icon('ic_disabled'),
    },
];

export default navConfig;
