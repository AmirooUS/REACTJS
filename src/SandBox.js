import React, {Component} from 'react';
import SandBoxChild from './SandBoxChild';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


const Home = () => <h1>HOME PAGE</h1>;
const Page1 = () => <h1>FIRST PAGE</h1>;

class SandBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
          name: 'React JS',
          shouldRenderChild: true
        };

        this.onClick = this.onClick.bind(this);
        this.onDoubleClick = this.onDoubleClick.bind(this);
    }

	onClick() {
        const name = this.input.value;

        this.setState({name});
		console.log(`Application Name: ${this.input.value}`);
	}

    onDoubleClick() {
        this.setState({
            name: "Sand Box Child",
            id: 0
        });
    }

    onChange(event) {
	    document.querySelector("#name").textContent = event.target.value;
    }


    componentWillMount() { console.log('componentWillMount'); }
    componentDidMount() { console.log('componentDidMount'); }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate >>>');
        console.log(this.props, nextProps);
        console.log(this.state, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate >>>');
        console.log(prevProps, this.props);
        console.log(prevState, this.state);
    }

    renderChild() {
        return this.state.shouldRenderChild
            ? <SandBoxChild name="Gigo" id={this.state.id} onDoubleClick={this.onDoubleClick} />
            : null;
    }

	render() {

	    const project = {
	        title: "San Box",
            desc: "A place to practice."
        };

		return (
			<Router>
                <div>
                    <Link to="/">Home</Link> - <Link to="/page1">First Page</Link>
                    <Route exact path="/" component={Home}/>
                    <Route path="/page1" component={Page1}/>

                    <hr/>

                    <h1>{this.state.name}</h1>

                    <hr/>

                    { project && project.title && <h3>{project.title}</h3> }
                    { project && project.desc && <p>{project.desc}</p> }

                    <input type="text" onChange={this.onChange} ref={input => this.input = input} />
                    <button type="submit" onClick={this.onClick}>Submit</button>
                    <p id="name"></p>

                    <hr/>

                    {this.renderChild()}
                </div>
            </Router>
		)
	}

}

export default SandBox;