import { Component } from 'react';
import Button from 'react-bootstrap/Button';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
            title: "",
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
            createdDate: 'Created Date: ' + new Date().toLocaleString(),
            title: this.state.title,
        };

        const list = [...this.state.list, newItem];

        this.props.listFunction(list)

        this.setState({
            list,
            newItem: "",
            title: "",
        })
    }

    render() {
        return (
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
        );
    }
}

export default InputForm;