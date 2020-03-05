import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Icon from '@material-ui/core/Icon';


import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductCard-style.scss';


export default class ProductCard extends Component {
    render() {
        const { image, title, description, remaining, price } = this.props

        return (
            <div>
                <Card className="card-container">
                    <Card.Img className="card-image" variant="top" src={image} />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">{title}</Card.Title>
                        <div className="card-text-container">
                            <Icon className="card-icon">description</Icon>
                            <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">{description}</Tooltip>}>
                                <Card.Text className="card-text">{description}</Card.Text>
                            </OverlayTrigger>
                        </div>
                        <div className="card-text-container">
                            <Icon className="card-icon">shopping_basket</Icon>
                            <Card.Text className="card-text">{remaining > 1 ? remaining + ' items left' : remaining + ' item left'}</Card.Text>
                        </div>
                        <div className="card-text-container">
                            <Icon className="card-icon">monetization_on</Icon>
                            <Card.Text className="card-text">{price}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
