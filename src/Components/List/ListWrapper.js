import React from 'react';
import { List } from './List';
import { Fetches } from '../Function/Fetch';

export const ListWrapper = ({ openItem, setOpenItem }) => {

    const res = Fetches();
    const resResult = res.response;


    return (
        <>
            {res.response ? 
                <div className="list-wrapper">
                    <List res={resResult.data.movies} />
                </div>

            :   res.error ?

                <div className="list__error">
                    <p>Ошибка при получении данных!</p>
                </div>
            
            :   <div className="list__load">
                    <p>Загрузка...</p>
                </div>
            }
        </>
        
    )
    
};