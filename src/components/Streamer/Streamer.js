import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup'

const Streamer = ({ streamerName, index, setStreamerName, handleCloseModal }) => {
    const variant = index % 2 === 0 ? 'secondary' : ''

    const handleSelectStreamer = () => {
        setStreamerName(streamerName)
        handleCloseModal()
    }

    return (
        <ListGroup.Item className="ListGroupItem" variant={variant} onClick={handleSelectStreamer}>{streamerName}</ListGroup.Item>
    )
}

export default Streamer