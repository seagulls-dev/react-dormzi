import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Row, Col } from "reactstrap"
import PokeItem from "./PokeItem";

const PokeList = props => {


    const { data } = props;

    return (
        <React.Fragment>
            <Row>
                {data.map((item, index)=>(
                    <Col lg={2} md={3} sm={4} xs={12} key={item.id}>
                        <PokeItem name={item.name} picture={item.picture} />
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    )

}

export default PokeList;