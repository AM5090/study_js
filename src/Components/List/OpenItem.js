import React from "react";

export const OpenItem = ({ openItem, setOpenItem }) => {


    return (

        
        <div className="item-page">
            <div className="back-list" onClick={()=>setOpenItem(null)}>
                <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                <span>Назад</span>
            </div>
            <div className="item-page__info">
                <div className="item-page__img">
                    <img src={openItem.large_cover_image} alt=""/>
                </div>
                <div className="item-page__content">
                    <div className="item-page__title">
                        {openItem.title_english}
                    </div>
                    <div className="item-page__description">
                        {openItem.synopsis}
                    </div>
                </div>
            </div>


        </div>
        



    );

}