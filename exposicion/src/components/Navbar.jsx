import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Container } from '@mui/material';
import MyIcon from '/react.svg';
import { purple } from '@mui/material/colors';

const color = purple[700];
const Navbar = () => {
    return (
        <AppBar sx={{ backgroundColor: color, padding:'0.5em'}} >
            <Toolbar>
                <IconButton>
                    <img src={MyIcon} alt="My Icon" />
                </IconButton>
                <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button color="inherit" component={Link} to="/">Inicio</Button>
                    <Button color="inherit" component={Link} to="/desarrollo">Desarrollo</Button>
                    <Button color="inherit" component={Link} to="/desenlace">Desenlace</Button>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
