import React from 'react';
import { useOpenItem } from '../Hooks/useOpenItem';
import { OpenItem } from './OpenItem';
import { ListItem } from './ListItem';

export const List = ({ res }) => {

    const openItem = useOpenItem();

    return (
        
        <>
            {openItem.openItem ? 
                
                <OpenItem {...openItem}/>
                
            :   <div  className="list">
                    <ListItem res={res} {...openItem}/>
                </div>
            }
        </>
    );
}
