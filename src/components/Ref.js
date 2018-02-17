import React, { Component } from 'react';
import PropTypes from 'prop-types';


const HERO_1 = {
    type: "hero",
    header: "I'm First Hero",
    subHeader: "Also have sub header",
    bgImage: "http://placehold.it/350x150"
};

const HERO_2 = {
    type: "hero",
    header: "I'm Second Hero",
    subHeader: "Also have sub header",
    bgImage: "http://placehold.it/450x100"
};

class Comp extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.comp.header}</h3>
                <h5>{this.props.comp.subHeader}</h5>
                <p>{this.props.comp.type}</p>
                <img src={this.props.comp.bgImage} alt={this.props.comp.header}/>
            </div>
        );
    }
}

class Ref extends Component {
    render() {
        return (
            <div>
                <Comp comp={HERO_1} />
                <Comp comp={HERO_2} />
            </div>
        );
    }
}

Ref.propTypes = {};
Ref.defaultProps = {};

export default Ref;


//class Ref extends Component {
//
//    constructor() {
//        super();
//        this.state = {
//            //a: "",
//            //b: ""
//        };
//        this.update = this.update.bind(this);
//    }
//
//    update(e) {
//        this.setState({
//            a: this.a.value,
//            b: this.b.value,
//            c: this.c.refs.c.value
//        });
//    }
//
//    render() {
//        return (
//            <div>
//                <form className="form-inline">
//                    <input
//                        type="text"
//                        className="form-control"
//                        onChange={this.update}
//                        ref={node => this.a = node}
//                    /> {this.state.a}
//                </form>
//
//                <br/>
//
//                <form className="form-inline">
//                    <input
//                        type="text"
//                        className="form-control"
//                        onChange={this.update}
//                        ref={node => this.b = node}
//                    /> {this.state.b}
//                </form>
//
//                <br/>
//
//                <Input
//                    ref={component => this.c = component}
//                    update={this.update}
//                /> {this.state.c}
//
//            </div>
//        );
//    }
//}
//
//class Input extends Component {
//    render() {
//        return(
//            <form className="form-inline">
//                <input
//                    type="text"
//                    className="form-control"
//                    onChange={this.props.update}
//                    ref="c"
//                />
//            </form>
//        )
//    }
//}


//Ref.propTypes = {};
//Ref.defaultProps = {};
//
//export default Ref;
