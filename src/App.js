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
    _deletePersonHandler = (personIndex) => {
        const persons = this.state.persons
        persons.splice(personIndex, 1)
        this.setState({persons: persons})

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
        let persons = null
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person click={() => this._deletePersonHandler(index)} name={person.name}
                                       age={person.age}/>
                    })}
                </div>
            )
        }
        return (
            <div className="App">
                <h1>Hello i'm React.</h1>
                <button style={style}
                        onClick={this._togglePersonHandler}>Toggle Person
                </button>
                {' '}
                <button style={style} onClick={() => this._switchNameHandler("Saitama Rank SSR OnePunchMan")}>Switch
                    Name
                </button>
                <p>This is alpha Production.</p>
                {persons}
            </div>
        );
    }


}

export default App;

