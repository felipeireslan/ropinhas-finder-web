import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import './StreamerForm-style.scss';

const StreamerForm = ({ onSubmit, streamerName, onChange }) => {
    return (
        <div>
            <Form className="form" action="#" onSubmit={onSubmit}>
                <InputGroup className="input-group-container">
                    <InputGroup.Prepend>
                        <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder="Streamer Name"
                        value={streamerName}
                        onChange={onChange}
                    />
                </InputGroup>
            </Form>
        </div>
    )
}

export default StreamerForm