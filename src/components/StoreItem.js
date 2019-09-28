import React, { useState, useEffect } from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import './StoreItem.css';

const StoreItem = ({ item }) => {
	return (
        <div className="storeItem">
            <img className="img" src={item.img}></img>
            <div className="name">{item.name}</div>
            <div className="cost">{`${item.cost} баллов`}</div>
        </div>
	);
}

export default StoreItem;
