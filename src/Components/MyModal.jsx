import { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'

class MyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: this.props.item.value,
            title: this.props.item.title,
        }
    }
    updateInput(key, value) {
        this.setState({
            [key]: value
        })
    }

    updateNote = () => {
        const editedNote = this.props.item;
        editedNote.updateDate = 'Update Date: ' + new Date().toLocaleString()
        editedNote.value = this.state.newItem;
        editedNote.title = this.state.title;
        this.props.onUpdate(editedNote)
        this.setState({
            newItem: "",
            title: ""
        })
    }

    render() {
        return (
            <Modal key={this.props.item.id} show={this.props.isOpen} onHide={() => this.props.hide()}>
                <Modal.Header closeButton>
                    <Modal.Title ><input
                        id={this.state.id}
                        type="text"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={e => this.updateInput("title", e.target.value)}></input>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body> <textarea
                    id={this.state.id}
                    value={this.state.newItem}
                    onChange={e => this.updateInput("newItem", e.target.value)}
                /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { this.updateNote(); this.props.hide() }}>Save</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default MyModal;