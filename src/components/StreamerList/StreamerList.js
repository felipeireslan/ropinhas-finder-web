import React, { useState } from 'react';

import './StreamerList-style.scss';

import Streamer from './../Streamer/Streamer';

import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const StreamerList = ({ streamerList, setStreamerName }) => {
    const [isModalOpen, setModalOpen] = useState(false)

    const handleOpenModal = () => {
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
    }

    return (
        <div className="StreamerListContainer">
            <Button onClick={handleOpenModal}>Selecione o streamer...</Button>
            <Modal onHide={handleCloseModal} show={isModalOpen}>
                <Modal.Header closeButton>
                    <Modal.Title>Streamer List</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ListGroup>
                        {streamerList.map((streamer, index) => {
                            return <Streamer key={JSON.stringify(streamer)} streamerName={streamer.name} index={index} setStreamerName={setStreamerName} handleCloseModal={handleCloseModal} />
                        })}
                    </ListGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleCloseModal} variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default StreamerList