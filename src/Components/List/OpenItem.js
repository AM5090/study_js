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
                    <div className="item-page__details">
                        <div className="item-page__rating">
                            <span>Рейтинг:</span>
                            {openItem.rating}
                        </div>
                        <div className="item-page__years">
                            <span>Год выпуска:</span>
                            {openItem.year}
                        </div>
                        <div className="item-page__genres">
                            <span>Жанр:</span>
                            <div>
                                {openItem.genres.map((item, i) => {
                                    return <div key={i}>{i>0 ? "/ " : ""}{item}</div>
                                })}
                            </div>
                        </div>
                        <div className="item-page__published">
                            <span>Опубликовано:</span>
                            {openItem.date_uploaded.slice(0, 10)}
                        </div>
                        <div className="item-page__comment">
                            <span>Комментарии:</span>
                            {10}
                        </div>
                    </div>
                    <div className="item-page__description">
                        {openItem.synopsis}
                    </div>
                </div>
            </div>
            <div className="item-page__play">
                <div className="play__wrapper">
                    <img src={openItem.background_image_original}/>
                </div>
                <div className="item-page__download">
                    <div>
                        <div className="item-page__download-title">Скачать</div>
                        <div className="item-page__download-item">
                            {openItem.torrents.map((item, i) => {
                                return  <a href={item.url}>
                                            {item.quality}
                                        </a>
                                        
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
        



    );

}