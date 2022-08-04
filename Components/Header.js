import "./ComponentsCSS/Header.css"
import croissant from "./images/croissant.jpg"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";

export default function Header() {
    return (
        <div>
            <Stack className="buttonGroupHeader" spacing={1} direction="row">
            <Button style={{color: "#333", textTransform: "none", fontFamily: "Work Sans"}} variant="text">About</Button>
            <Button style={{color: "#333", textTransform: "none", fontFamily: "Work Sans"}} variant="text">Lookbook</Button>
            <Button style={{color: "#333", textTransform: "none", fontFamily: "Work Sans"}} variant="text">Contact</Button>
            <Button style={{color: "#333", textTransform: "none", fontFamily: "Work Sans"}} variant="text">Cart</Button>
            </Stack>
            <Stack direction="row" spacing={2}>
            <Avatar className="croissant"
                alt="Remy Sharp"
                src={croissant}
                sx={{ width: 55, height: 55 }}
                />
            <a className="headerInsta" href="https://www.instagram.com/jayda.doodles/">@jayda.doodles</a>
            </Stack>
            
            <header className="header">
                <h1 className="title">jayda.doodles</h1>
            </header>
            
        </div>
    )
}