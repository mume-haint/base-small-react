import { forwardRef, ForwardedRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface RouterLinkProps extends Omit<LinkProps, 'to'> {
    href: string;
}

const RouterLink = forwardRef((props: RouterLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const { href, ...other } = props;
    return <Link ref={ref} to={href} {...other} />;
});

export default RouterLink;
