import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onDoubleClick: PropTypes.func
};

const defaultProps = {
    name: "Anonymous",
    id: 1
};

class SandBoxChild extends Component {

    render() {

        const {name, id, onDoubleClick} = this.props;

        return(
            <div>
                <h4 onDoubleClick={onDoubleClick}>I'm {name}, a Sand Box Child Component</h4>
                <p>ID: {id}</p>
            </div>
        )
    }

}

SandBoxChild.propTypes = propTypes;
SandBoxChild.defaultProps = defaultProps;

export default SandBoxChild;