import { SosRounded } from '@mui/icons-material'
import { styled, Typography, Fab, Grid, Box, Divider, } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { path as p } from '../path'
import { Button } from '../Theme'
import logo from './logo.png'

const NavLink = styled(Link)((props) => ({
  color: "#212121",
  fontSize: "16px",
  marginLeft: "7px",
  paddingTop:"3px",
  paddingBottom:"3px",
  padding: "7px",
  textDecoration: "none",
  transition: "all 0.2s ease",
}));


const Footer = () => {

  const path = useLocation()
  const slug = path.pathname


  const Subscribe = styled(Grid)((props) => ({
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
    backgroundSize: 'cover',
    textDecoration: 'none',
    background: '#000',
    color: 'white',
    fontSize: '20px',
    minHeight: '150px',
    padding: '20px 2rem',
    position: 'relative',
    margin: '0',
    lineHeight: '1.4',
    zIndex: '1',
    justifyContent: "center",
    ['&::before']: {
      content: '""',
      background: 'url(https://hips.hearstapps.com/hmg-prod/images/cute-baby-animals-1558535060.jpg?crop=1.00xw:0.669xh;0,0.158xh&resize=1200:*)',
      zIndex: '-1',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: '0.6',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left',
      backgroundSize: 'cover'
    }
  }))

  return (

    <React.Fragment>

      <Box sx={{ display: slug === "/register" || slug === "/login" ? "none" : "block", }}>
        <Subscribe container>
          <Grid item ><Typography variant="h5" sx={{ fontWeight: "700" }}>Want to Give Feedback for Our Work?</Typography></Grid>
          <Grid item sx={{ ml: { md: "1rem", xs: "0", }, mt: { xs: "1rem", md: 0 } }}><a href='tel:+919044558703' style={{textDecoration:"none"}}><Button variant="contained">Talk to Us</Button></a></Grid>
        </Subscribe>
        <Grid container sx={{ background: "#ebebeb", p: {md:"2rem",xs:"2rem 1rem"}, color: "#fff", justifyContent: "center" }} direction="column">
          <Grid item sx={{ textAlign: "center" }}><Link to="/"> <img src={logo} style={{ width: '150px' }} alt="Savarrior" /></Link></Grid>
          {/* <Grid item sx={{ display: "flex", justifyContent: "center",flexWrap:"wrap",my:"10px" }}>
            <NavLink to="/" ><Typography sx={{fontWeight:"600"}}>Home</Typography></NavLink>
            <NavLink to="/"><Typography sx={{fontWeight:"600"}}>About Us</Typography></NavLink>
            <NavLink to="/"><Typography sx={{fontWeight:"600"}}>Contact Us</Typography></NavLink>
            <NavLink to="/"><Typography sx={{fontWeight:"600"}}>Rescues</Typography></NavLink>
            <NavLink to="/"><Typography sx={{fontWeight:"600"}}>NGOs</Typography></NavLink>
          </Grid> */}
        </Grid>
          <Box sx={{textAlign:"center",py:"10px",background:"#d1d1d1"}}><Typography sx={{color:"#000"}}>Copyright {new Date().getFullYear()} Savarrior</Typography></Box>
      </Box>
    </React.Fragment>
  )
}


export default Footer