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

export default function Body() {
    return (
    <body>
        <div className="container">
            <img className="artboard" src={artboard} alt="artboard"/>
            <div className="nav">
            <input type="text" placeholder="Search.." />
            <button className="submit" type="submit">Submit</button>
            </div>
        </div><br></br><br></br>
        <div>
        <Stack className="imageCards" direction="row" spacing={6}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={pjs2}
                    alt="green iguana"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: "Work Sans"}}>
                        Business
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ fontFamily: "Work Sans"}}>
                        Illustrations to suit all of your business needs. Enquire for illustrations ranging from social
                        media posts, logos, presentations and more...
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, marginLeft: "100px"  }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="140"
                    image={gift}
                    alt="green iguana"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: "Work Sans"}}>
                        Personal
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
                    height="140"
                    image={moshi}
                    alt="green iguana"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: "Work Sans"}}>
                        Friends
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ fontFamily: "Work Sans"}}>
                        Who else is obsessed with their fur friends? What better way to show your love, 
                        than having their picture with you 24/7...
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </Stack>
        </div>
    </body>
    )
}