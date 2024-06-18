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
        title: 'context post',
        path: '/posts',
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
        title: 'Not found',
        path: '/404',
        icon: icon('ic_disabled'),
    },
];

export default navConfig;
