import React from 'react';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Event = ({ go, event, handleClick }) => (
    <Cell onClick={handleClick}
        before={event.img ? <Avatar src={event.img}/> : null}
        description={event.desription}
    >
        {event.name}
    </Cell>
);

export default Event;
