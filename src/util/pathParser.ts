export const pathParser = (pathname: string, removing: string): string => {
    const query = pathname.replace(removing, '');
    return query;
};
