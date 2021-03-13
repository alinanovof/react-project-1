import { Component } from 'react';
import MyModal from './MyModal';

class NoteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    deleteItem = (id) => {
        //copy current list of items
        const list = [...this.props.list];

        // filter out item being deleted
        const updatedList = list.filter(item => item.id !== id);

        this.setState({ list: updatedList });
    }

    render() {
        return (
            <div className="flex-parent" >
                <div className="inside-flex">
                    <h2 className="title" onClick={this.openModal}>{this.props.item.title}</h2>
                    <button className="delete-button"
                        onClick={() => {
                            if (window.confirm('Are you sure you wish to delete this note?'))
                                this.deleteItem(this.props.item.id)
                        }}>
                        x
                    </button>
                </div>
                <li key={this.props.item.id} onClick={this.openModal}>
                    {this.props.item.value}
                </li>
                <MyModal onUpdate={(editedNote) => this.props.onUpdate(editedNote)} item={this.props.item} isOpen={this.state.isOpen} hide={this.closeModal}>
                </MyModal>

                <p className="created-date" onClick={this.openModal}>{this.props.item.createdDate}</p>
                <p className="update-date" onClick={this.openModal}>{this.props.item.updateDate}</p>
            </div>
        );
    }
}

export default NoteItem;