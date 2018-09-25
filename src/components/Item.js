import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleDelete(id){
        this.props.onClickDelete(id);
    }

    handleEdit(item){
        this.props.onClickEdit(item)
    }
    render() {
        var {value, index} = this.props;


        return (
            <tr className="footable-even" style={{}}>
                <td className="footable-visible footable-first-column"><span className="footable-toggle" />
                    {index + 1}
                </td>
                <td className="footable-visible">
                    {value.name}
                </td>
                <td className="footable-visible">
                    {this.setElmLevel(value.lavel)}
                </td>
                <td className="text-right footable-visible footable-last-column">
                    <div className="btn-group">
                        <button onClick={()=>this.handleEdit(value)} className="btn btn-primary">Edit</button>
                        <button onClick={()=>this.handleDelete(value.id)} className="btn btn-warning">Delete</button>
                    </div>
                </td>
            </tr>
        );
    }
    setElmLevel(lavel){
        var elmLevel = <span className="label label-primary">Small</span>;
        if (lavel === 1){
            elmLevel = <span className="label label-primary">Small</span>
        } else if (lavel === 2){
            elmLevel = <span className="label label-warning">Medium</span>
        } else if (lavel === 3){
            elmLevel = <span className="label label-danger">Hight</span>
        }
        return elmLevel;
    }
}

export default Item;
