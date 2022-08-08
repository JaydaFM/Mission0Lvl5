import artboard from "./images/artboard-01.jpg"
import pjs2 from "./images/pjs2.jpg"
import gift from "./images/gift.png"
import moshi from "./images/moshi.png"
import "./ComponentsCSS/Body.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';

export default function Body() {
    return (
    <body>
        <h2 className="memo">DESIGN, CREATE &<br/>ILLUSTRATE</h2>
        <div className="container">
            <img className="artboard" src={artboard} alt="artboard"/>
        </div><br></br><br></br><br></br>
        {/* Summary Section */}
        <div className="summaryCard">
        <p3>Launched in 2020, jayda.doodles captures the cultural spirit and sensibility of your business<br/>
             or imagination. jayda.doodles is a reflection of the diversity that has defined the world's<br/> cultural landscape. Simultaneously 
            classic and contemporary, jayda.doodles evokes both the<br/> changing aesthetic vibrancy and timelessness of ever changing design.
        </p3>
        </div>
        <br></br><br></br>
        {/* About Section */}
        {/* <div className="aboutCard">
            <p>About Me</p>
            <Stack direction="row" spacing={6}>
            <Box
      sx={{
        width: 650,
        height: 410,
        backgroundColor: 'white',
      }}
    />
    <h2 className="aboutText">Doodles <br/>for Noodles</h2>
    </Stack>
        </div> */}
        <br></br><br></br><br></br>
        {/* Package Cards Section */}
        <div>
        <Stack className="imageCards" direction="row" spacing={6}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="400"
                    image={pjs2}
                    alt="green iguana"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: "Work Sans"}}>
                        Business
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ fontFamily: "Work Sans"}}>
                        Illustrations to suit all of your business needs.
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, marginLeft: "100px"  }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="400"
                    image={gift}
                    alt="green iguana"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: "Work Sans"}}>
                        Gift
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ fontFamily: "Work Sans"}}>
                        Personalised illustrations, perfect for gifting or for seeing your vision come to life...
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, marginLeft: "100px"  }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="400"
                    image={moshi}
                    alt="green iguana"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: "Work Sans"}}>
                        Custom
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ fontFamily: "Work Sans"}}>
                        See your vision come to life through an illustration...
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </Stack>
        </div>
    </body>
    )
}