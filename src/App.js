import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {name: "Saitama", age: 27},
            {name: "genos", age: 24}
        ],
    }
    _switchNameHandler = (newName) => {
        console.log('Clicked :)');
        this.setState({
            persons: [
                {name: newName, age: 27},
                {name: "genos Rank S ", age: 24}
            ]
        })
    }


    render() {
        return (
            <div className="App">
                <h1>Hello i'm React.</h1>
                <button onClick={this._switchNameHandler.bind(this, "Saitama Rank SSR OnePunchMan")}>Switch Name</button>
                <button onClick={() => this._switchNameHandler("Saitama Rank SSR OnePunchMan")}>Switch Name</button>
                <p>This is alpha Production.</p>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this._switchNameHandler.bind(this, "Saitama Rank B")}>Something.</Person>
            </div>
        );

    }


}

export default App;

