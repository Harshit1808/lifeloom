// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { GrStar } from "react-icons/gr";

// export default function MediaCard() {
//   return (
//     <>
//     </>
//   );
// }

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GrStar } from "react-icons/gr";
import Link from 'next/link';

export default function MediaCard({ title, duration, price, description, image, style, tripId }) {
    return (
        <Link href={{ pathname: "/itinerary", query: { tripId } }} style={{ textDecoration: "none" }}>
        <Card sx={{ maxWidth: 345, marginBottom:"20px", marginLeft:"50px", borderRadius:"10px" }}>
            <CardMedia
                sx={{ height: 238, width: 325, objectFit: "cover", marginLeft:"10px", marginRight:"10px", marginTop:"10px", borderRadius:"10px"}}
                image="../Pawna.jpeg"
                title="green iguana"
            />
            <CardContent sx={{ pb: 0 }}>
            <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <div style={{color:"black"}}>{duration}</div>
                            <div style={{ display: "flex" }}>
                                <GrStar style={{ color: "red", fontSize: "18px" }} />
                                <div style={{ color: "red" }}>5.0 (15.2k)</div>
                            </div>
                        </div>
                <Typography style={{marginTop:"5px"}}>{title}</Typography>
                <Typography style={{marginTop:"2px"}}><span style={{ textDecoration: "line-through", color:'black' }}>INR 1900</span>{price}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', pt: 1, pl: 2, pr: 2 }}>
                <Button
                    sx={{
                        width: 'auto',
                        backgroundColor: '#0EC3EB',
                        color: 'white',
                        padding: '0.5rem',
                        borderRadius: '6px',
                        opacity: '90%',
                        '&:hover': { backgroundColor: '#0EC3EB' },
                    }}
                >
                    View Details
                </Button>
                <Button
                    sx={{
                        width: 'auto',
                        backgroundColor: '#0EC3EB',
                        color: 'white',
                        padding: '0.5rem',
                        borderRadius: '6px',
                        opacity: '90%',
                        '&:hover': { backgroundColor: '#0EC3EB' },
                    }}
                >
                    Request Callback
                </Button>
            </CardActions>
        </Card>
        </Link>
    );
}
