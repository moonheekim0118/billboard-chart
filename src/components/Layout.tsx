import React from 'react';
import { useSelector } from 'react-redux';

const Layout = () => {
    const number = useSelector((state) => state.test.number);

    return <div>{number}</div>;
};

export default Layout;
