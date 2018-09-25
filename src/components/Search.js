import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);

        this.state = {
            isSearchValue: ""
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSearch(){
        this.props.onClickSearchControl(this.state.isSearchValue);
    }
    handleClear(){
        this.setState({
            isSearchValue: "",
        });
        this.props.onClickSearchControl(this.state.isSearchValue);
    }
    handleChange(event) {
        this.setState({
            isSearchValue: event.target.value
        });
    }
    render() {
        return (
            <div className="input-group">
                <input type="text" value={this.state.isSearchValue} onChange={this.handleChange} className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                    <button onClick={this.handleClear} type="button" className="btn btn-default">Clear</button>
                    <button onClick={this.handleSearch} type="button" className="btn btn-primary">Go!</button>
                </span>
            </div>
        );
    }
}

export default Search;
