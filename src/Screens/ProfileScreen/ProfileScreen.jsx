import React, { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
 
const ProfileScreen= () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div 
            className="d-flex justify-content-center align-items-center flex-column" style={{ marginTop: '80px' }}
        >
            <NavBar />

            {/* PROFILE SECTION */}
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h1>Profile</h1>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        Change Settings
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Languages</DropdownItem>
                        <DropdownItem>English</DropdownItem>
                        <DropdownItem text>Italian</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem header>Google Books Policy</DropdownItem>
                        <DropdownItem>Privacy</DropdownItem>
                        <DropdownItem>Conditions</DropdownItem>
                        <DropdownItem>Help center</DropdownItem>
                    </DropdownMenu>
                </Dropdown>       
                <img 
                    style={{ maxWidth: '90%' }}
                    src="https://i.pinimg.com/originals/8d/79/26/8d79268aea902bc90784e62917399ac9.jpg"
                    alt=""
                />
                <span 
                    className="mb-4"
                    style={{ marginTop: '80px' }}
                >
                        Powered By Matteo Rascioni ©2021
                </span>
            </div>
        </div>
    )
}

export default ProfileScreen;
