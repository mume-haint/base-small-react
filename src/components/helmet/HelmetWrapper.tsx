import React, {ReactNode} from "react";
import {Helmet} from "react-helmet-async";

interface HelmetWrapperProps {
    title: string;
    children: ReactNode;
}

const HelmetWrapper: React.FC<HelmetWrapperProps> = ({ title, children }) => (
    <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        {children}
    </>
);

export default HelmetWrapper;