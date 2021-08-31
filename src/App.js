import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeList from "./components/PokeList";
import { Button, Modal } from "reactstrap";
import Gallery from "./components/Gallery";
import axios from 'axios';

function App() {

    const [isOpen, setIsOpen] = useState(false);

    const [lists, setLists] = useState([]);
    useEffect(()=>{
        axios.get(`http://pokemon.test.dormzi.com/pokemon`)
            .then(res => {
                const data = res.data;
                console.log(data)
                setLists(data);
            })
    },[])

    const showModal = () => {
        setIsOpen(true)
    }

    return (
        <React.Fragment>
            <Button onClick={showModal}>
                Show Gallery
            </Button>
            <PokeList data={lists}/>
            <Gallery isOpen={isOpen} data={lists} toggle={()=>setIsOpen(!isOpen)}/>
        </React.Fragment>
    );
}

export default App;
