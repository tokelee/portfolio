import React from 'react';
import { MenuItem } from './MenuItems';
import { StyledNavbar } from './Navbar.styled';

function Navbar() {
    return(
        <>
        <StyledNavbar>
            <MenuItem>
            //01. Home
            </MenuItem>

            <MenuItem>
            //02. Blog
            </MenuItem>
        </StyledNavbar> 

        <StyledNavbar>
            <MenuItem>
            //03. Portfolio
            </MenuItem>

            <MenuItem>
            //04. Contact
            </MenuItem>
        </StyledNavbar> 
        </>
    )
}

export default Navbar