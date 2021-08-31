import React, { useEffect, useState } from "react";
import { Card } from "reactstrap"

const PokeItem = props => {
    const { name, picture } = props;

    return (
        <Card className="poke-item">
            <h3>{name}</h3>
            <img src={picture} alt="image" width="100" />
        </Card>
    )
}

export default PokeItem;