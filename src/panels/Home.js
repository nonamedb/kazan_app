import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Event from '../components/Event';
import { connect, useSelector } from 'react-redux';
import { getEvents, setDetailedId, getUserInfo } from "../store/actions";
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import Store from '../components/Store';
import { Div, InfoRow } from '@vkontakte/vkui';

const Home = ({ id, go, getEvents, events, userInfo, vkInfo }) => {
	const [popout, setPopout] = useState(null);

	useSelector((state) => {
		if (state.events.events.length === 0 && popout === null) {
			setPopout(<ScreenSpinner size="large" />)
		} else if (state.events.events.length !== 0 && popout !== null) {
			setPopout(null);
		}
	});

	useEffect(() => {
		(async function() {
			try {
				getEvents(vkInfo.id);
			} catch (error) {
			}
		})();
	}, []);

	useEffect(() => {
		(async function() {
			try {
				getUserInfo();
			} catch (error) {
			}
		})();
	}, []);

	const handleClick = (id) => {
		setDetailedId(id);
		go('eventdetail');
	};

	const eventsList = events.map(e => {
		return (<Event key={e.id} handleClick={() => handleClick(e.id)} event={e} />)
	});

	return (
		<Panel id={id}>
			<PanelHeader>Доступные события</PanelHeader>
			<Group>
				<Div>
					<InfoRow title="Баланс">220 баллов</InfoRow>
				</Div>
			</Group>
			{popout === null ? <Group title="Ближайшие события">{eventsList}</Group> : popout}
			<Group title="Магазин">
				<Store></Store>
			</Group>
		</Panel>
	);
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
	console.log('home', state)
	return { events: state.events.events, userInfo: state.user.userInfo, vkInfo: state.user.vkInfo };
}

export default connect(
	mapStateToProps,
	{ getEvents },
  )(Home);
