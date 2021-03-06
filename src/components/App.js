import React from "react";

// Import Components
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes"
import Fish from "./Fish";
import base from '../base';

class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount(){
        const { params } = this.props.match;
        // refs in firebase are the reference to a piece of data in the db
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    addFish = (fish) => {
        // 1. Take a copy of the existing state
        //  ... = object spread
        const fishes = {...this.state.fishes};
        // 2. Add new fish to fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({
            fishes: fishes
        });
    }
    loadSampleFishes = () => {
       this.setState({
           fishes: sampleFishes
       })
    }
    addToOrder = (key) => {
        // 1. take a copy of state
        const order = { ...this.state.order };
        // 2. Either Add or Update the Order
        order[key] = order[key]+1 || 1
        // 3. Call setState to Update State
        this.setState({ order });
    }
    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" subtitle="The Best" />
                    <ul className="fishes">
                        { Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key} 
                                index={key}
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder} 
                            />
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />                
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }
}

export default App;