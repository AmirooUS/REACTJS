import React, {Component} from 'react';

class CreateProduct extends Component {

    constructor(props) {
        super(props);

        this.createProduct = this.createProduct.bind(this);
    }

    createProduct(event) {
        event.preventDefault();

        const { createProduct } = this.props;

        const product = { name: this.nameInput.value, price: this.priceInput.value };

        this.priceInput.value = '';
        this.priceInput.value = '';

        createProduct(product);

    }

    render() {

        return (
            <form onSubmit={this.createProduct}>
                <input type="text" placeholder="Product Name" ref={nameInput => this.nameInput = nameInput}/>
                <input type="number"  placeholder="Product Price" ref={priceInput => this.priceInput = priceInput}/>

                <button type="submit">Create Product</button>
            </form>
        );
    }
}

export default CreateProduct;