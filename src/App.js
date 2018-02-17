import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Alert, Input } from 'reactstrap';

class App extends Component {

    constructor() {
        super();
        this.state = {
            header: 'React JS',
            alert: {
                type: 'success',
                text: 'No Event is Bumped.'
            }
        };

        // Bindings
        this.update = this.update.bind(this);
        this.returnEvent = this.returnEvent.bind(this);
    }

    update(event) {

        let updateVal = event.target.value;
        (updateVal.length) ?
            this.setState({
                header: updateVal
            }) :
            this.setState({
                header: 'React JS'
            });
    }

    returnEvent(event) {
        this.setState({
            alert: {
                text: event.type,
                type: "warning"
            }
        });
    }

    render() {
        return (
            <div>
                <hr />

                <h1>{this.state.header}</h1>
                <FromInput
                    //update={this.update.bind(this)}
                    update={this.update}
                    placeholder={this.state.header}
                />

                <hr />

                <Alert color={this.state.alert.type}>
                    {this.state.alert.text}
                </Alert>
                <textarea
                    className="form-control"
                    type="textarea"
                    rows="5"
                    placeholder="Events are watching ..."
                    onKeyPress={this.returnEvent}
                    onCopy={this.returnEvent}
                    onCut={this.returnEvent}
                    onPaste={this.returnEvent}
                    onFocus={this.returnEvent}
                    onBlur={this.returnEvent}
                    onDoubleClick={this.returnEvent}
                    onTouchStart={this.returnEvent}
                    onTouchMove={this.returnEvent}
                    onTouchEnd={this.returnEvent}
                />

                <hr />
            </div>
        );
    }

}




const FromInput = props =>
    <Input
        onChange={ props.update }
        placeholder={ props.placeholder }
    />;


//App.propTypes = {
//
//};
//
//App.defaultProps = {
//
//};

export default App;
