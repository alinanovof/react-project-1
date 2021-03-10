import './App.css';
import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      title: "",
      list: [],
      isOpen: false,
    }
  }

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  updateInput(key, value) {
    this.setState({
      [key]: value
    })
  }
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
      createdDate: new Date(),
      title: this.state.title,
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: "",
      title: "",
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
          <input type="text" placeholder="Title" value={this.state.title}
            onChange={e => this.updateInput("title", e.target.value)}></input>
          <textarea
            placeholder="Your note..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <Button className="addButton" block onClick={() => this.addItem()}
          > Add </Button>
        </div>
        <ul>
          {this.state.list.map(item => {
            return (
              <div className="flex-parent">
                <div className="inside-flex">
                  <h2 className="title">{item.title}</h2>
                  <button className="delete-button"
                    onClick={() => {
                      if (window.confirm('Are you sure you wish to delete this note?'))
                        this.deleteItem(item.id)
                    }}>
                    x
                    </button>
                </div>
                <li key={item.id} onClick={this.openModal}>
                  {item.value}
                </li>
                <Modal key={item.id} show={this.state.isOpen} onHide={this.closeModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>{item.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{item.value}</Modal.Body>
                </Modal>
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
