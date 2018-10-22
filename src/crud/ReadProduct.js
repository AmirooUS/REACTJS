import React, {Component} from 'react';

class ReadProduct extends Component {

    constructor(props) {
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct() {
        const {index, deleteProduct} = this.props;
        deleteProduct(index);
    }

    render() {

        const {name, price} = this.props;

        return (
            <li>
                {name} | ${price} | <button onClick={this.deleteProduct}>DEL</button>
            </li>
        );
    }
}

export default ReadProduct;