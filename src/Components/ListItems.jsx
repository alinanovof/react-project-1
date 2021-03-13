import { Component } from 'react';
import NoteItem from './NoteItem'

class ListItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }


    render() {
        return (
            <ul>
                {this.props.list.map(item => {
                    return (
                        <NoteItem id={this.props.id} list={this.props.list} item={item} onUpdate={(editedNote) => this.props.onUpdate(editedNote)} />
                    )
                })}
            </ul>
        );
    }
}

export default ListItems;