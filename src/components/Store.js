import React, { useState, useEffect } from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import items from '../consts/storeItems';
import StoreItem from '../components/StoreItem.js';
import { Gallery } from '@vkontakte/vkui';

const Store = () => {
    const itms = items.map(item => {
        return (<StoreItem item={item} />);
    });
	return (
        <Gallery style={{ height: 200 }} slideWidth="140px">
            {itms}
        </Gallery>
	);
}

export default Store;
