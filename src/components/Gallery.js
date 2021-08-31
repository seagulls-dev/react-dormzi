import React, { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Gallery = props => {

    const { isOpen, toggle, data } = props

    return (
        <Modal
            isOpen={isOpen}
            role="dialog"
            autoFocus={true}
            centered={true}
            tabIndex="-1"
            size="lg"
        >
            <ModalHeader toggle={toggle}>Image Gallery</ModalHeader>
            <ModalBody>
                <Carousel>
                    {
                        data.map((item, index)=>(
                            <div key={item.id}>
                                <img src={item.picture}/>
                                <p className="legend">{item.name}</p>
                            </div>
                        ))
                    }
                </Carousel>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>Close</Button>
            </ModalFooter>
        </Modal>
    )
}

export default Gallery