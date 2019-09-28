import React, { useEffect } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import './Welcome.css';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import VKconnect from '@vkontakte/vk-connect';
import { connect } from 'react-redux';
import { setVkInfo } from '../store/actions';
import { Avatar } from '@vkontakte/vkui';

const Welcome = ({ id, go, setVkInfo, vkInfo }) => {
	useEffect(() => {
		VKconnect.subscribe(e => {
			const { type, data } = e.detail;
			if (type === 'VKWebAppGetUserInfoResult') {
				setVkInfo(data);

				return;
			}

			if (type === 'VKWebAppAllowMessagesFromGroupResult') {
				if (data.result) {
					console.log('seeeend');
				} else {
					console.error(':(((');
				}

				return;
			}
		});
		VKconnect.send('VKWebAppGetUserInfo');
	}, []);

	return (
		<Panel id={id}>
			<PanelHeader>
				Добро пожаловать
			</PanelHeader>
			<div className="welcome">
				<span className="greeting">{`Привет, ${vkInfo.first_name}!`}</span>
				<Avatar src={vkInfo.photo_200}></Avatar>
				<img src="/Logo.gif"></img>
				<Button className="goButton" size="xl" onClick={() => go('home')}>Начать</Button>
			</div>
		</Panel>
	);
};

const mapStateToProps = state => {
	console.log('welcome', state);
	return { vkInfo: state.user.vkInfo };
}

export default connect(
	mapStateToProps,
	{ setVkInfo },
  )(Welcome);
