// You always need to import react, this doesn't result
// in multiple versions in the final packaged file


// 1. Import dependencies
// ------------------------------

import React from 'react';
import { render } from 'react-dom';
import {getFunName} from '../helpers';

// 2. Create the contnet
// ------------------------------

// Make a clss for each componenet yous create
// Capitzlize classes
// All clases atleast one method (render)
// Store componnts in separate files and import them into other files
// React.fragment allows us to return sibling elements that are not wrapped in a parent


class StorePicker extends React.Component {

    // constructor(){
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    myInput = React.createRef();

    // declare a property which is bound to the instance
    goToStore = (event) => {
        // 1. Stop form from submitting
        event.preventDefault();
        // 2. Get Text from Input
        const storeName = this.myInput.value.value;        
        // 3. Change page to /store/input-value
        this.props.history.push(`/store/${storeName}`);

    }
    render() {
        return (
            <React.Fragment>
            <h1>Amy's Store</h1>
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store </h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name"
                    defaultValue={getFunName()}/>
                <button type="submit">Visit Store</button>
            </form>
            </React.Fragment>
        )
    }
}


//3.  Export it for use in other files (index.js)
// --------------------------------------------
export default StorePicker;