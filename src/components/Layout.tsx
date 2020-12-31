import React from 'react';
import { useSelector } from 'react-redux';

const Layout = () => {
    const { number, counterLoading } = useSelector((state) => state.test);

    return <div>{counterLoading ? '로딩중' : number}</div>;
};

export default Layout;
