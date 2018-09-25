import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            cv_id: "",
            cv_name: "",
            cv_lavel: 0
        }

        this.AnHienAdd = this.AnHienAdd.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount(){
        var item = this.props.onClickSelected;
        if (item !== null){
            this.setState({
                cv_id: item.id,
                cv_name: item.name,
                cv_lavel: item.lavel
            })
        }
    }

    componentWillReceiveProps(nextProps){
        var item = nextProps.onClickSelected;
        if (item !== null){
            this.setState({
                cv_id: item.id,
                cv_name: item.name,
                cv_lavel: item.lavel
            })
        }
    }

    AnHienAdd() {
        this.props.onClickAdd();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        let item ={
            id: this.state.cv_id,
            name: this.state.cv_name,
            lavel: this.state.cv_lavel
        };
        this.props.onClickSubmit(item);
        event.preventDefault();
    }
    render() {
        return (
            <div className="col-lg-6">
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.cv_name} onChange={this.handleInputChange} name="cv_name" style={{width: '50%', float: 'left'}} type="text" className="form-control" placeholder="Search..." />

                        <select value={this.state.cv_lavel} onChange={this.handleInputChange} name="cv_lavel" className="form-control" style={{width: "20%", float: "left"}}>
                            <option value={1} className="dropdown-item" >Small</option>
                            <option value={2} className="dropdown-item" >Medium</option>
                            <option value={3} className="dropdown-item" >Hight</option>
                        </select>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button onClick={this.AnHienAdd} type="button" className="btn btn-danger">Cancel</button>
                </form>
            </div>
        );
    }
}

export default Form;
