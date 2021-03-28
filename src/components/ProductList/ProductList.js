import React, { Component } from 'react';

import './ProductList-style.scss';

import ProductCard from '../ProductCard/ProductCard';

export default class ProductList extends Component {
    render() {
        const { productList } = this.props

        return (
            <div className="list-container">
                {
                    productList.map((product) => (
                        <ProductCard
                            key={product._id}
                            image={product.image || product.alert.graphics.src || product.thumbnail}
                            title={product.name}
                            description={product.description}
                            remaining={product.quantity.current}
                            price={product.cost}
                        />
                    ))
                }
            </div>
        )
    }
}
