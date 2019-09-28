import React, { useState, useEffect } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import List from '@vkontakte/vkui/dist/components/List/List';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import { connect, useSelector } from 'react-redux';
import vkConnect from '@vkontakte/vk-connect';
import { getDetailed } from '../store/actions';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';

import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';

const EventDetail = ({ id, go, eventId, getDetailed, detailed, vkInfo }) => {
	const handleClick = () => {
		vkConnect.send('VKWebAppAllowMessagesFromGroup', { group_id: 186998404 });
	};
	const [popout, setPopout] = useState(null);

	useSelector(state => {
		const length = Object.keys(state.events.detailed).length;
		if (length === 0 && popout === null) {
			setPopout(<ScreenSpinner size="large" />);
		} else if (length !== 0 && popout !== null) {
			setPopout(null);
		}
	});

	useEffect(() => {
		(async function() {
			try {
				getDetailed(eventId);
			} catch (error) {
				
			}
		})();
	}, []);

	return (
		<Panel id={id}>
			<PanelHeader left={<HeaderButton onClick={() => go('home')}>
				{<Icon24Back/>}
			</HeaderButton>}>
				{detailed.name}
            </PanelHeader>
			{popout ||
			<Group title="Информация о событии">
				<List>
					<Cell>
						<InfoRow title="Описание">
							{detailed.description}
						</InfoRow>
					</Cell>
					<Cell>
						<InfoRow title="Дата">
							{new Date(detailed.event_date).toLocaleDateString('ru-RU') || ''}
						</InfoRow>
					</Cell>
				</List>
			</Group>
			}
			{popout ? null : <Button size="xl" onClick={handleClick}>Стать волонтёром</Button>}
		</Panel>
    );
};

const mapStateToProps = state => {
	console.log('eventDetailed', state);
	return { eventId: state.events.eventDetailedId, detailed: state.events.detailed, vkInfo: state.user.vkInfo };
}

export default connect(
	mapStateToProps,
	{ getDetailed }
)(EventDetail);
