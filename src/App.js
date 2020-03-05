import React, { useState, useEffect, useCallback } from 'react';

import './App.css';

import { getStreamerList } from './helpers/api';

import Constants from './constants/constants';
import StreamerForm from './components/StreamerForm/StreamerForm';
import StreamerList from './components/StreamerList/StreamerList';
import ProductList from './components/ProductList/ProductList';

const App = () => {
	const [streamerList, setStreamerList] = useState([])
	const [streamerName, setStreamerName] = useState('')
	const [productList, setProductList] = useState([])

	const handleGetProductListByStreamerName = useCallback(() => {
		const endpoint = Constants.BASE_API_PATHS.getStoreItemsByStreamer(streamerName, 'streamElements')

		fetch(endpoint)
			.then(response => response.json())
			.then(jsonResponse => {
				setProductList(jsonResponse.data.skins_list || [])
			}).catch(error => console.warn)
	}, [streamerName])

	useEffect(() => {
		handleGetStreamerList()
	}, [])

	useEffect(() => {
		if (streamerName && streamerName !== '') {
			handleGetProductListByStreamerName()
		}
	}, [streamerName, handleGetProductListByStreamerName])

	const handleGetStreamerList = async () => {
		getStreamerList()
			.then(response => {
				if (response.success) {
					const { streamer_list } = response.data

					return setStreamerList(streamer_list)
				}
			}).catch(error => {
				console.log(error)
			})
	}

	const handleStreamerNameChange = (e) => {
		setStreamerName(e.target.value)
	}

	const handleFormSubmit = (e) => {
		handleGetProductListByStreamerName(streamerName, 'streamElements')
	}

	return (
		<div className="App">
			<div>
				<StreamerList streamerList={streamerList} setStreamerName={setStreamerName} />
			</div>

			<div>
				<StreamerForm
					onSubmit={handleFormSubmit}
					onChange={handleStreamerNameChange}
					streamerName={streamerName}
				/>
			</div>
			{productList.length > 0 && <ProductList productList={productList} />}
		</div>
	);
}

export default App;
