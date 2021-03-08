import './App.css';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    })
  }
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
      createdDate: new Date()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: "",
      
    })
  }

  deleteItem(id) {
    //copy current list of items
    const list = [...this.state.list];

    // filter out item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <div className="card">
          <textarea
            placeholder="Your note..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <Button className="addButton" variant="primary" block onClick={() => this.addItem()}
          > Add </Button>
        </div>
        <ul>
          {this.state.list.map(item => {
            return (
              <div className="flex-parent">
                <button className="delete-button"
                      onClick={() => this.deleteItem(item.id)}>
                      X
                </button>
                  <li key={item.id}>
                    {item.value}
                  </li>
              <p className="created-date">{item.createdDate.toLocaleString()}</p>
              </div>
              
            )
          })}
        </ul>
      </div >
    )
  }
}


export default App;
