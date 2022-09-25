import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import Header from './components/Header';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import { useState } from 'react';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  
  const [ files, setFiles ] = useState(contactsJSON);
  
  const clickHandler =(isi) =>{
    if(isi.length !== 0){
      setFiles([...files, isi]);
    }
    else{
    console.log(isi.length);
    }
    // 

  }

  return (
    <div className="App">
      <Container fixed>
        <Box sx={{height: '90vh' }} className='back-gr' mt={5} mb={5}>
          <Header/>

          <Grid container spacing={6}>
            <Grid xs>
              <ContactForm clickHandler={clickHandler}/>
            </Grid>
            <Grid xs>
              <Contact data={files}/>
              
            </Grid>
          </Grid>
        </Box>
      </Container>
      
    </div>
  );
};

export default App;
