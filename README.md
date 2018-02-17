
# WebPack: _Package Bundler_

### **Set-up [WebPack Config File](https://github.com/amir-mirshekari/reactjs/blob/master/webpack.config.sample.js)**

### **Usefull [Webpack Plugins](https://webpack.js.org/plugins/)**:
_Check [migration](https://webpack.js.org/guides/migrating/) solutions for Webpack 2_

- **[path](https://nodejs.org/docs/latest/api/path.html)**
Contains several helper functions to help make path manipulation easier.
- **[process.env](https://nodejs.org/api/process.html#process_process_env)**
Returns an object containing the user environment.
- **[HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)**:
Simplifies creation of HTML files to serve webpack bundles.
- **[autoprefixer](https://github.com/postcss/autoprefixer)**:
Parse CSS and add vendor prefixes to rules by Can I Use.
- **[CaseSensitivePathsPlugin](https://github.com/Urthen/case-sensitive-paths-webpack-plugin)**
Enforces case sensitive paths in Webpack requires.
- **[InterpolateHtmlPlugin](https://github.com/egoist/interpolate-html-plugin)**
Webpack plugin for interpolating custom variables into index.html <br/>
_(This plugin is supposed to work with [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin))_
- **[WatchMissingNodeModulesPlugin](https://www.npmjs.com/package/react-dev-utils)**
Ensures `npm install <library>` forces a project rebuild

- **[css-loader](https://webpack.js.org/loaders/css-loader)**
CSS loader module for Webpack.
- **[style-loader](https://webpack.js.org/loaders/style-loader/)**
Adds CSS to the DOM by injecting a <style> tag.
- **[sass-loader](https://www.npmjs.com/package/sass-loader)**
Compiles Sass to CSS.
- **[less-loader](https://www.npmjs.com/package/less-loader)**
Compiles Less to CSS.
- **[extract-text-webpack-plugin](https://webpack.js.org/plugins/extract-text-webpack-plugin/)**
Extract text from bundle into a file.

- **[webpack-dev-server](https://webpack.js.org/guides/development/#webpack-dev-server)**
Provides a server and live reloading. (Serves from memory)
- **[hot-module-replacement](https://webpack.js.org/concepts/hot-module-replacement/)**
Exchanges, adds, or removes modules while an application is running without a page reload.


- **[webpack-merge](https://webpack.js.org/concepts/configuration/#multiple-targets)**
Merge multiple configs and concatenate them.
- **[ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/)**
Automatically loads modules.
    ```javascript
    new webpack.ProvidePlugin({
      $: 'jquery', /* $('#selector'); */
      jQuery: 'jquery', /* jQuery('#selector'); */
      _map: ['lodash', 'map'], /* Use map from Lodash */
      'React': 'react',
      'ReactDOM': 'react-dom'
    })
    ```

- **[rimraf](https://www.npmjs.com/package/rimraf)**
A `rm -rf` util for nodejs

<br>

## WebPack Nice Practices:

**Define Resolves Paths**:

    const srcDir = path.resolve(__dirname, 'src');
    const distDir = path.resolve(__dirname, 'dist');

**Separate Dev and Prod ENV Configs Files**:

_[Here](https://github.com/sapientglobalmarkets/react-redux-seed/tree/master/config) and [Here](https://webpack.js.org/guides/production-build/#node-environment-variable)_

`webpack-common.config.js` : Common Configs

`webpack-common.dev.js` : Dev Env Configs (_ie. HotModuleReplacementPlugin_)

`webpack-common.prod.js` : Prod Env Configs (_ie. ExtractTextPlugin_)

`webpack.config.js`:
```javascript
'use strict';

module.exports = env => {
    return env === 'dev'
        ? require('./config/webpack-dev.config')
        : require('./config/webpack-prod.config');
};
```


---


# React JS: _JavaScript Framework_

## Installation:
1. Through [create-react-app](https://github.com/facebookincubator/create-react-app)
2. Manual by [Node Packages](https://facebook.github.io/react/docs/installation.html)
- 'npm i -D react react-dom'
- 'npm i -D babel babel-preset-react babel-preset-es2015'
- Create `.babelrc` file [Options](https://babeljs.io/docs/usage/api/)
```javascript
{
  "presets": ["es2015", "react"]
}
```

3. Set-up [Babel](https://babeljs.io/docs/setup/#installation)
`npm install --save-dev babel-loader babel-core`



## React Usage:


### Container (Smart) vs Presentational (Dummy) Components

**Container Components**
_Describe how things work_
- Almost always the parents of Presentational Components.
- Source the data and deal with state.
- State is then passed to Presentational Components as props and is then rendered into views.


**Presentational Components**
_Describe how things look_
- Managing its own props.
- They have no idea how the props they received came to be.
- They have no idea about state.
- Never change the prop data itself.

<br/>

### Stateful vs Stateless Components

**Stateful**
```javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Component extends Component {
    render() {
        return (

        );
    }
}

Component.propTypes = {};
Component.defaultProps = {};

export default Component;
```

**Stateless**
- Faster in performance
- No Class Needed
- No this Keyword
- Focus on the UI rather than behavior
- Don’t support state or lifecycle methods
- State should be managed by higher-level "container" components
- Easier to test
```javascript
import React from 'react';

const Component = (props) => {
    return (
        {props.attribute}
    );
};

export default Component;
```

<br/>

### Props vs State

- Both Model data for components.
- Both props and state of a parent component will become just props to their child component.


**Props:**
- Data flows from parent to child. _Defined in child component (this.props.name) and get value in parent component._
- Props are immutable.
- Component can have default props so that props are set even if a parent component doesn’t pass props down to the child.


**State:**
- Data flows from child to parent.
    - Like when user input some new data to the child component.
- State is mutable and private.
- State is used so that a component can keep track of information in between any renders that it does.
    - _setState it updates the state object and then re-renders_
    -  _how a component's data looks at a given point in time_


<br/>

### Component [Lifecycle](https://facebook.github.io/react/docs/react-component.html)

**Mounting**

`constructor()`
- The constructor is the right place to initialize state. If you don't initialize state and you don't bind methods, you don't need to implement a constructor for your React component.
- Call `super(props)` in constructor method before any other statement. Otherwise, this.props will be undefined in the constructor.
- `super()` give the keyword `this` the context within the component rather than its parent.

`componentWillMount()`

`render()`

`componentDidMount()`


**Updating**

`componentWillReceiveProps()`

`shouldComponentUpdate()`

`componentWillUpdate()`

`render()`

`componentDidUpdate()`


**Unmounting**

`componentWillUnmount()`


**Other APIs**

`setState()`

`forceUpdate()`


**Class Properties#**

`defaultProps`

`displayName`


**Instance Properties**

`props`

`state`


<br/>

### Access Nested Data (Components and Values) with Reacts

`props.children`
- Some components don't know their children ahead of time, use the special children prop to pass children elements directly into their output.
- In order to access nested values or components in a component, we can use props.children.


<br/>

### Custom propType Validation
```javascript
text(props, propName, component){
    if(!(propName in props)){
        return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 7){
        return new Error(`${propName} was too short`)
    }
}
```


<br/>

### Handling Events

`bind()`
- Creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
- Bind in Constructor `this.eventHandler = this.eventHandler.bind(this);`


<br/>

### React [Synthetic Event System](https://facebook.github.io/react/docs/events.html#supported-events)

- Clipboard Events
`onCopy` `onCut` `onPaste`

- Keyboard Events
`onKeyDown` `onKeyPress` `onKeyUp`

- Focus Events
`onFocus` `onBlur`

- Form Events
`onChange` `onInput` `onSubmit`

- Mouse Events
`onClick` `onContextMenu` `onDoubleClick` `onDrag` `onDragEnd`
`onDragEnter` `onDragExit` `onDragLeave` `onDragOver` `onDragStart`
`onDrop` `onMouseDown` `onMouseEnter` `onMouseLeave` `onMouseMove`
`onMouseOut` `onMouseOver` `onMouseUp`

- Touch Events
`onTouchCancel` `onTouchEnd` `onTouchMove` `onTouchStart`

- UI Events
`onScroll`

- Wheel Events
`onWheel`


<br/>

### Refs and the DOM

###### In the typical React dataflow, props are the only way that parent components interact with their children.
###### To modify a child, you re-render it with new props.
###### However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow.
###### The child to be modified could be an instance of a React component, or it could be a DOM element.
###### For both of these cases, React provides an escape hatch.

- The ref attribute takes a callback function, and the callback will be executed immediately after the component is mounted or unmounted.

- For Component:
`a: this.a.value` in update method.

in Parent Component:
```javascript
ref={node => this.a = node}
```

- For Component's Child:
`a: this.a.refs.a.value` in update method.

in Parent Component:
```javascript
ref={component => this.a = component}
```

`ref='a'` in Child Component


<br/>

### Multiple Component, Data Driven

```javascript

/* Data (Data) */
const DATA_1 = {
    attr_1: "value_1",
    attr_2: "value_2"
};
const DATA_2 = {
    attr_1: "value_1",
    attr_2: "value_2"
};

/* Children (Template) */
class Child extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.data.attr_1}</h3>
                <h5>{this.props.data.attr_1}</h5>
            </div>
        );
    }
}

/* Parent (Display) */
class Parent extends Component {
    render() {
        return (
            <div>
                <Child data={DATA_1} />
                <Child data={DATA_2} />
            </div>
        );
    }
}

```














