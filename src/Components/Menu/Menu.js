import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListItem } from './Listitem';
import { Banner } from './Banner';
//import { useFetch } from '../Hooks/useFetch';
import { Context } from '../Functions/context';

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 300px;
`;

const SectionMenu = styled.section`
    padding: 30px;
`;

export const Menu = () => {

    //const { openItem: { setOpenItem }} = useContext(Context);
    const { dbMenu } = useContext(Context);

    return (
        <MenuStyled>
            <Banner/>
            {dbMenu ? 
            <>
                <SectionMenu>
                    <h2>Бургеры</h2>
                    <ListItem itemList={dbMenu.burger} />
                </SectionMenu>
        
                <SectionMenu>
                    <h2>Закуски / Напитки</h2>
                    <ListItem itemList={dbMenu.other} />
                </SectionMenu>
            </> : /*res.error ? 
            <div>Sorry, we will fix it soon...</div> :*/
            <div>Loading...</div>
            }
        </MenuStyled>
    );

};
