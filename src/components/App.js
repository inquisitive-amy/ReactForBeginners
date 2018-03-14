import React from "react";

// Import Components
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes"
import Fish from "./Fish";

class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    };
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
    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" subtitle="The Best" />
                    <ul className="fishes">
                        { Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)   }
                    </ul>
                </div>
                <Order />                
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
            </div>
        )
    }
}

export default App;