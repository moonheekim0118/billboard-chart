import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

interface Props {
    nowPage: number;
    paginate: (target: number) => void;
}

const Pagination = (props: Props) => {
    const [pages, setPages] = useState<JSX.Element[]>([]);

    // 현재 페이지에 따라 page list 변경
    useEffect(() => {
        const temp = [];
        for (let i = 0; i < 4; i++) {
            const pageNumber = props.nowPage + i;
            temp.push(
                <Page
                    id="page"
                    key={pageNumber}
                    onClick={props.paginate.bind(this, pageNumber)}
                    nowPage={props.nowPage === pageNumber}>
                    {pageNumber}
                </Page>
            );
        }
        setPages(temp);
    }, [props.nowPage]);

    return (
        <Container>
            {props.nowPage >= 5 && (
                <Page
                    id="page"
                    onClick={props.paginate.bind(this, props.nowPage - 4)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Page>
            )}
            {props.nowPage >= 2 && (
                <>
                    {' '}
                    <Page id="page" onClick={props.paginate.bind(this, 1)}>
                        1
                    </Page>{' '}
                    ...{' '}
                </>
            )}
            {pages}
            <Page
                id="page"
                onClick={props.paginate.bind(this, props.nowPage + 4)}>
                <FontAwesomeIcon icon={faChevronRight} />
            </Page>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;

    margin: 25px 0;
`;

const Page = styled.div<{ nowPage: boolean }>`
    background-color: ${(props) => (props.nowPage ? '#fcba03' : '#fff')};
    text-align: center;
    padding: 5px 10px;
    margin: 0 15px;

    cursor: pointer;
`;

export default Pagination;
