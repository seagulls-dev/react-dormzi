import React, { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";

const PokePage = props => {
    const { id } = useParams();

    return (
        <div>
            {id}
        </div>
    )
}

export default PokePage