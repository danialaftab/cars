import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';

const CarsPagination = (props: any) => {
    const [pages, setPages] = useState<any>([]);
    let { currentPage, totalPages } = props;

    useEffect(() => {
        let pages = [];
        let startingPage = (Math.floor(currentPage / 10) * 10);
        if(startingPage === 0)
            startingPage = 1
    
        for (let i = startingPage; (i < (startingPage + 10)) && (i <= totalPages); i++) {
            pages.push(<Pagination.Item key={i} active={(currentPage === (i))} onClick={() => { props.openPage(i) }}>{i}</Pagination.Item>)
        }

        setPages(pages);
        
    }, [currentPage, totalPages])


    return (
        <Pagination>
            {(currentPage > 10) ? <Pagination.First onClick={() => {props.openPage(1)}} /> : null }
            {(currentPage > 10) ? <Pagination.Prev onClick={() => {props.openPage(currentPage - 10)}} /> : null}

            {pages}

            {(totalPages > 10 && currentPage < totalPages) ? <Pagination.Ellipsis /> : null}
            {(totalPages > 10 && currentPage < totalPages) ? <Pagination.Next onClick={() => {props.openPage(currentPage + 10)}}/> : null}
            {(totalPages > 10 && currentPage < totalPages) ? <Pagination.Last onClick={() => {props.openPage(totalPages)}} /> : null}
        </Pagination>
    )
}

export default CarsPagination;

