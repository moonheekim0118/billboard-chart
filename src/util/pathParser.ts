export const pathParser = (pathname: string, removing: string) => {
    const query = pathname.replace(removing, '');
    return query;
};
