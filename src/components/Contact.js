// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { List, 
    ListItem, 
    Divider, 
    ListItemText, 
    ListItemAvatar, 
    Avatar, 
    Typography, 
    Paper} from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    // console.log(data[0].name))
    /*
    email
    name
    phone
    photo
    */

    return (
        <>
        <Paper style={{maxHeight: "78vh", overflow: 'auto'}}>
                <List sx={{ width: '100%', bgcolor: '#cfe8fc' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <img alt={data.name} src={data.photo}/>
                        
                    </ListItemAvatar>
                    <ListItemText
                        primary={data.name}
                        secondary={
                            <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                            </Typography>
                            {data.phone}
                            <br/>
                            {data.email}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                </List>
        </Paper>
        
        </>
    );
};

export default Contact;

