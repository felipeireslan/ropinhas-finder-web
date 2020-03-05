import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import './StreamerForm-style.scss';

export default class StreamerForm extends Component {
    render() {
        return (
            <div>
                <Form className="form" action="#" onSubmit={this.props.onSubmit}>
                    <InputGroup className="input-group-container">
                        <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            placeholder="Streamer Name"
                            value={this.props.streamerName}
                            onChange={this.props.onChange}
                        />
                    </InputGroup>
                </Form>
            </div>
        )
    }
}
