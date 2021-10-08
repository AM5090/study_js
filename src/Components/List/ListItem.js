import React from "react";

export const ListItem = ({ res, openItem, setOpenItem }) => {

    return (

        <>
            {res.map(item => (
                <div className="list__item" key={item.id} onClick={() => setOpenItem(item)} >
                    <div className="list__img">
                        <img src={item.large_cover_image} alt=""/>
                    </div>
                    <div className="list__details">
                        <div className="list__comment">
                            <i className="fa fa-commenting-o" aria-hidden="true"></i>
                            {10}
                        </div>
                        <div className="list__rating">
                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                            {item.rating}
                        </div>
                        <div className="list__years">
                            {item.year}
                        </div>
                    </div>
                    <div className="list__info">
                        <div className="list__info-title">
                            {item.title_english}
                        </div>
                        <div className="list__info-details">
                            <div className="list__info-genres">
                                <span>Жанр:</span>
                                <div>
                                    {item.genres.map((item, i) => {
                                        return <div key={i}>{i>0 ? "/ " : ""}{item}</div>
                                    })}
                                </div>
                            </div>
                            <div>
                                <span>Опубликовано:</span>
                                {item.date_uploaded.slice(0, 10)}
                            </div>
                        </div>
                        <div className="list__info-description">
                            {item.synopsis.slice(0, 150)}
                        </div>
                    </div>
                </div>
                ))
            }
        </>
        
        
    );
}