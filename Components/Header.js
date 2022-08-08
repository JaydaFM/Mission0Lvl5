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
            {/* <Button style={{color: "#333", textTransform: "none", fontFamily: "Work Sans"}} variant="text">Cart</Button> */}
            </Stack>
            <Stack className="buttonGroupHeaderLeft" spacing={1} direction="row">
            <Button sx={{ ':hover': { backgroundColor: 'white', opacity: "40%"}}}
                    style={{color: "#333", textTransform: "none", fontFamily: "Work Sans"}} variant="text">Home</Button>
            <Button sx={{ ':hover': { backgroundColor: 'white', opacity: "40%"}}}
                    style={{color: "#333", textTransform: "none", fontFamily: "Work Sans"}} variant="text">Instagram</Button>
            <Button sx={{ ':hover': { backgroundColor: 'white', opacity: "40%"}}}
                    style={{color: "#333", textTransform: "none", fontFamily: "Work Sans"}} variant="text">Packages</Button>
            {/* <Button style={{color: "#333", textTransform: "none", fontFamily: "Work Sans"}} variant="text">Search</Button> */}
            {/* <div class="topnav">
            <div class="search-container">
            <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            </form>
            </div>
            </div> */}
            </Stack>
            <Stack className="logoAndName" direction="row" spacing={2}>
            <Avatar className="croissant"
                alt="Remy Sharp"
                src={croissant}
                sx={{ width: 55, height: 55 }}
                />
            <p className="logoName">jayda.doodles</p>
            </Stack>
            
            {/* <header className="header">
                <h1 className="title">jayda.doodles</h1>
            </header> */}
            
        </div>
    )
}