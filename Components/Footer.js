import * as React from 'react';
import Stack from '@mui/material/Stack';
import "./ComponentsCSS/Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Footer() {
    return (
        <div className="Footer">
            
            <Stack direction="row" spacing={32}>
            <p> </p>
            <Stack direction="row" spacing={1}>
                <InstagramIcon className="InstaIcon" href="https://www.instagram.com/jayda.doodles/"/>
            <a href="https://www.instagram.com/jayda.doodles/">@jayda.doodles</a>
            </Stack>
            <Stack direction="row" spacing={1}>
                <FacebookIcon className="InstaIcon" href="https://www.instagram.com/jayda.doodles/"/>
            <a href="https://www.instagram.com/jayda.doodles/">Jayda Felix-Mounlath</a>
            </Stack>
            <Stack direction="row" spacing={1}>
                <MailOutlineIcon className="InstaIcon" href="https://www.instagram.com/jayda.doodles/"/>
            <a href="https://www.instagram.com/jayda.doodles/">jayda@doodles.com</a>
            </Stack>
            </Stack>
        </div>
    )
}