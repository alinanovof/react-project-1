import './App.css';
import { Component } from 'react';
import InputForm from './Components/InputForm'
import ListItems from './Components/ListItems'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }

  storeList = (list) => this.setState({ list });
  updateList = (editedNote) => this.setState(prevState => {
    return { list: prevState.list.map(item => editedNote.id === item.id ? editedNote : item) }
  });

  // deleteItem(id) {
  //   //copy current list of items
  //   const list = [...this.state.list];

  //   // filter out item being deleted
  //   const updatedList = list.filter(item => item.id !== id);

  //   this.setState({ list: updatedList });
  // }

  render() {
    return (
      <div className="App">
        <InputForm listFunction={this.storeList} />
        <ListItems onUpdate={(editedNote) => this.updateList(editedNote)} list={this.state.list} />
      </div >
    )
  }
}

export default App;
