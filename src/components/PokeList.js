import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap"
import PokeItem from "./PokeItem";
import {
    Link,
} from "react-router-dom";
import ReactPaginate from 'react-paginate';

const PokeList = props => {

    const { data } = props;
    // const perPage = 20;
    //
    // const pageCount = Math.ceil(data.length / perPage)
    //
    //
    // const [list, setList] = useState([])
    // useEffect(()=>{
    //     setList(data.splice(0,perPage))
    // },[data])
    //
    //
    // const handlePageClick = data => {
    //     const selected = data.selected;
    //     const offset = Math.ceil(selected * perPage);
    //     console.log(typeof data)
    //     if (data.length > 0) setList(data.splice(offset, perPage))
    // }

    return (
        <React.Fragment>
            <Row>
                {data.map((item, index)=>(
                    <Col lg={2} md={3} sm={4} xs={12} key={item.id}>
                        <Link to={"/poke/"+item.id}>
                            <PokeItem name={item.name} picture={item.picture} />
                        </Link>
                    </Col>
                ))}
                {/*<ReactPaginate*/}
                {/*    previousLabel={'previous'}*/}
                {/*    nextLabel={'next'}*/}
                {/*    breakLabel={'...'}*/}
                {/*    breakClassName={'break-me'}*/}
                {/*    pageCount={pageCount}*/}
                {/*    marginPagesDisplayed={2}*/}
                {/*    pageRangeDisplayed={5}*/}
                {/*    onPageChange={handlePageClick}*/}
                {/*    containerClassName={'pagination'}*/}
                {/*    activeClassName={'active'}*/}
                {/*/>*/}
            </Row>
        </React.Fragment>
    )

}

export default PokeList;