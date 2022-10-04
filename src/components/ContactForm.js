import React, { useState } from 'react';
import {TextField,Button} from '@mui/material';

// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = ({clickHandler}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [ name, setName ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ photos, setPhotos ] = useState("");

    const handleSUbmit =() =>{
        clickHandler({
            name : name,
            phone : phone,
            email : email,
            photos : photos
        })
    }
    return (
        <>
        <div className='cfrom'>

            <div className='cfrom-ipt'>
                <TextField
                    required
                    id='name'
                    label="Name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                      }}
                    sx={{ width: '100%'}}
                />
            </div>

            <div className='cfrom-ipt'>
                <TextField
                    required
                    id="phone"
                    type="tel"
                    label="Phone"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                    sx={{ width: '100%'}}
                />
            </div>
            
            <div className='cfrom-ipt'>
                <TextField
                    required
                    id="email"
                    label="Email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    sx={{ width: '100%'}}
                />
            </div>

            <div className='cfrom-ipt'>
                <TextField
                    required
                    id="photos"
                    label="Photo URL"
                    type="url"
                    value={photos}
                    onChange={(e) => {
                        setPhotos(e.target.value);
                      }}
                    sx={{ width: '100%'}}
                />
            </div>
            
            <div className='cfrom-ipt'>
                <Button 
                    variant="outlined" 
                    color="success" 
                    sx={{ width: '100%'}}
                    onClick={handleSUbmit}
                >
                    ADD NEW
                </Button>
            </div>
            
        </div>
        </>
    );
}

export default ContactForm;