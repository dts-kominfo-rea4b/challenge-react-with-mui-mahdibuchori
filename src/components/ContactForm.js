import React, { useState } from 'react';
import {TextField,Button} from '@mui/material';

// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = ({clickHandler}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [data, setData] = useState([]);
    const [ name, setName ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ photoUrl, setPhotoUrl ] = useState("");

    return (
        <>
        <div className='cfrom'>

            <div className='cfrom-ipt'>
                <TextField
                    required
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
                    id="outlined-required"
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
                    id="outlined-required"
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
                    id="outlined-required"
                    label="Photo URL"
                    type="url"
                    value={photoUrl}
                    onChange={(e) => {
                        setPhotoUrl(e.target.value);
                      }}
                    sx={{ width: '100%'}}
                />
            </div>
            
            <div className='cfrom-ipt'>
                <Button 
                    variant="outlined" 
                    color="success" 
                    sx={{ width: '100%'}}
                    onClick={() => {
                        setData({
                            name: name,
                            phone: phone,
                            email: email,
                            photo: photoUrl
                        })
                        console.log(data)
                        clickHandler(data)
                        // setTodo('');
                    }}
                >
                    ADD NEW
                </Button>
            </div>
            
        </div>
        </>
    );
}

export default ContactForm;