import React, {Component} from 'react';
import { products } from './crud/db'; // Mimic DB

import ReadProduct from './crud/ReadProduct';
import CreateProduct from './crud/CreateProduct';

localStorage.setItem('products', JSON.stringify(products));

class Crud extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Products Manager',
            products: JSON.parse(localStorage.getItem('products'))
        };

        this.deleteProduct = this.deleteProduct.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    componentWillMount() {
        const products = this.getProducts();
        this.setState({products});

    }

    getProducts() {
        return this.state.products;
    }

    showProducts() {
        const products = this.getProducts();
        return(
            <ul>
                {products.map((product, key) =>
                    <ReadProduct key={key} index={key} {...product} deleteProduct={this.deleteProduct}/>
                )}
            </ul>
        )
    }

    deleteProduct(index) {
        const currentProducts = this.getProducts();
        const products = currentProducts.filter((product,i) => i !== index );
        this.setState({products});
    }

    createProduct(product) {
        const products = [...this.getProducts(), product];
        this.setState({products});
    }




    render() {
        return (
            <div>

                <h1>{this.state.title}</h1>
                <hr/>

                <CreateProduct createProduct={this.createProduct}/>
                <hr/>

                {this.showProducts()}

            </div>
        );
    }
}

export default Crud;