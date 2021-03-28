import React, { useState, useEffect, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import debounce from 'debounce';

import './App.css';

import { getStreamerList } from './helpers/api';

import Constants from './constants/constants';
import StreamerForm from './components/StreamerForm/StreamerForm';
import StreamerList from './components/StreamerList/StreamerList';
import ProductList from './components/ProductList/ProductList';

const App = () => {
	const [streamerList, setStreamerList] = useState([])
	const [streamerName, setStreamerName] = useState('')
	const [currentStreamerPoints, setCurrentStreamerPoints] = useState(0)
	const [productList, setProductList] = useState([])
	const [currentStreamer, setCurrentStreamer] = useState({})
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		handleGetStreamerList()
	}, [])

	const handleStreamerPoints = (name) => {
		const endpoint = Constants.BASE_API_PATHS.getPointsByStreamer(name, 'hermanoteu95')

		fetch(endpoint)
			.then(response => response.json())
			.then(jsonResponse => {
				const { data: { points } } = jsonResponse
				setCurrentStreamerPoints(points)
			}).catch(console.error)
	}

	const handleGetProductListByStreamerName = useCallback((name) => {
		setLoading(true)
		const endpoint = Constants.BASE_API_PATHS.getStoreItemsByStreamer(name, 'streamElements')

		fetch(endpoint)
			.then(response => response.json())
			.then(jsonResponse => {
				setProductList(jsonResponse.data.skins_list || [])
				setCurrentStreamer({ name: name })
				setLoading(false)
				handleStreamerPoints(name)
			}).catch(error => {
				console.log(error)
				setLoading(false)
			})
	}, [])

	const handleGetStreamerList = () => {
		setLoading(true)
		getStreamerList()
			.then(response => {
				if (response.success) {
					const { streamer_list } = response.data

					setLoading(false)
					setStreamerList(streamer_list)
					return
				}
			}).catch(error => {
				console.log(error)
				setLoading(false)
			})
	}

	const handleDebouncedStreamerName = useCallback(
		debounce(newValue => {
			handleGetProductListByStreamerName(newValue)
		}, 1000),
		[]
	)

	const handleStreamer = (variation) => {
		const currentStreamerIndex = streamerList.findIndex(streamer => streamer.name === currentStreamer.name)

		if (!currentStreamer.name || currentStreamer.name === '') {
			return setStreamerName(streamerList[1].name)
		}

		if (variation === 'next') {
			const nextStreamer = streamerList[currentStreamerIndex + 1]
			return setStreamerName(nextStreamer.name)
		} else {
			const prevStreamer = streamerList[currentStreamerIndex - 1]
			return setStreamerName(prevStreamer.name)
		}
	}

	useEffect(() => {
		if (streamerName && streamerName !== '') {
			handleDebouncedStreamerName(streamerName)
		}
	}, [streamerName, handleDebouncedStreamerName])

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
				<p>Total de pontos: {currentStreamerPoints}</p>
			</div>
			<div>
				<StreamerForm
					onSubmit={handleFormSubmit}
					onChange={handleStreamerNameChange}
					streamerName={streamerName}
				/>
			</div>

			{isLoading ? <div>Loading....</div> : (<div>
				<div style={{ width: '60%', justifyContent: 'space-between', display: 'flex', margin: '0 auto' }}>
					<Button onClick={() => handleStreamer('prev')}>Anterior</Button>
					<Button onClick={() => handleStreamer('next')} >Próximo</Button>
				</div>
				{productList.length > 0 && <ProductList productList={productList} />}
			</div>)}
		</div>
	);
}

export default App;
