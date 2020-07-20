import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            {name: "Saitama", age: 27},
            {name: "genos", age: 24}
        ],
        showPersons: false
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

    _nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Saitama", age: 27},
                {name: event.target.value, age: 24}
            ]
        })
    }

    _togglePersonHandler = () => {
        const doseShow = this.state.showPersons
        this.setState({showPersons: !doseShow})
    }


    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1x solid blue',
            padding: '8px',
            cursor: 'pointer'
        }
        return (
            <div className="App">
                <h1>Hello i'm React.</h1>
                <button style={style}
                        onClick={this._togglePersonHandler}>Switch Name
                </button>
                {' '}
                <button style={style} onClick={() => this._switchNameHandler("Saitama Rank SSR OnePunchMan")}>Switch
                    Name
                </button>
                <p>This is alpha Production.</p>
                {this.state.showPersons ?
                    <div>
                        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                                click={this._switchNameHandler.bind(this, "Saitama Rank B")}
                                changed={this._nameChangedHandler}>Something.</Person>
                    </div> : null
                }
            </div>
        );

    }


}

export default App;

