// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import Typography from '@mui/material/Typography';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Call a Friend
      </Typography>
      <h6><span>Your friendly contact app</span></h6>

    </>
  );
};

export default Header;
