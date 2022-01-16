import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    grid-gap: 10px;
`;

export const Layout = () => {
    return (
        <>
            <header>
                <div className="container">
                    <Menu>
                        <Link to='/contacts'>Contacts</Link>
                        <Link to='/'>LogIn</Link>
                    </Menu>
                </div>
            </header>

            <div className="container">
                <Outlet/>
            </div>
        </>
    );
};