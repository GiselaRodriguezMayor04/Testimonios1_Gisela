import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import '../App.css';


import {MyFavorite, MyFavoriteBorder, MyButton} from 'milibreria'; 



function Testimonios1({ testimon }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleIconClick = () => {
        setIsFavorite(prev => !prev)
    }

    return (
        testimon.map((testi) => (
            <Box 
            key={testi.id} 
            sx={{
                margin: "20px", 
            }}>
                <Card sx={{ maxWidth: 430}}>
                    <CardActionArea>
                        <CardMedia sx={{height: 300}}
                            component="img"
                            height="140"
                            image={testi.imgSrc}
                            alt={testi.alt}
                        />
                        <CardContent>
                            <Typography variant="h5">
                                {testi.name}
                            </Typography>
                            <Typography variant="h6">
                                {testi.trabajo}
                            </Typography>
                            <Typography variant="body2">
                                {testi.descripcion}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    {isFavorite ? (
                        <MyFavorite iconColor="red" onClick={handleIconClick}/>
                    ) : (
                        <MyFavoriteBorder iconColor="grey" onClick={handleIconClick}/>
                    )}
                    <MyButton
                        text="Hola"
                        txtcolor="blue"
                        bgcolor="red"
                        bordercolor="black"
                        bordersize="1px"
                        size="large" 
                        hoverTxtColor="red"
                        hoverBgColor="blue"
                        onClick={() => alert('Botón clickeado!')}
                    />
                </Card>
            </Box>
        ))
    );
}

export default Testimonios1;