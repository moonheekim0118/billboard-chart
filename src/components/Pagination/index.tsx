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

    // 현재 페이지에 따라서 다른 page list를 저장해준다.
    useEffect(() => {
        const temp = [];
        if (props.nowPage < 4) {
            for (let i = 1; i <= 4; i++) {
                temp.push(
                    <Page
                        key={i}
                        nowPage={props.nowPage === i}
                        onClick={props.paginate.bind(this, i)}>
                        {i}
                    </Page>
                );
            }
        } else {
            for (let i = 3; i >= 0; i--) {
                const pageNumber = props.nowPage - i;
                temp.push(
                    <Page
                        key={pageNumber}
                        nowPage={props.nowPage === pageNumber}
                        onClick={props.paginate.bind(this, pageNumber)}>
                        {pageNumber}
                    </Page>
                );
            }
            for (let i = 1; i <= 3; i++) {
                const pageNumber = props.nowPage + i;
                temp.push(
                    <Page
                        key={pageNumber}
                        nowPage={props.nowPage === pageNumber}
                        onClick={props.paginate.bind(this, pageNumber)}>
                        {pageNumber}
                    </Page>
                );
            }
        }
        setPages(temp);
    }, [props.nowPage]);

    return (
        <Container>
            {props.nowPage >= 6 && (
                <Page onClick={props.paginate.bind(this, props.nowPage - 5)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Page>
            )}
            {props.nowPage >= 5 && (
                <>
                    {' '}
                    <Page onClick={props.paginate.bind(this, 1)}>
                        1
                    </Page> ...{' '}
                </>
            )}
            {pages}
            <Page onClick={props.paginate.bind(this, props.nowPage + 5)}>
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
    margin: 0 25px;

    cursor: pointer;
`;

export default Pagination;
