import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
        this.AnHienAdd = this.AnHienAdd.bind(this);
    }
    AnHienAdd(){
        this.props.onClickAdd();
    }

    render() {
        var {loaiSX, kieuSX} = this.props;
        var elmButtonForm = <button onClick={this.AnHienAdd} className="btn btn-primary col-lg-12" type="button" style={{marginBottom: "2%", marginTop: "2%"}}>Add - Task</button>;
        if(this.props.onClickClose === true){
            elmButtonForm = <button onClick={this.AnHienAdd} className="btn btn-primary col-lg-12" type="button" style={{marginBottom: "2%", marginTop: "2%"}}>Close</button>
        }
        return (
            <div className="col-lg-6">
                    {/*===============*/}
                    <div className="col-lg-6">
                        <Search onClickSearchControl={this.props.onClickSearchApp}/>
                        {elmButtonForm}
                    </div>
                    {/*===============*/}
                    <div className="col-lg-6">
                        <Sort
                            onClickSort={this.props.onClickSort}
                            loaiSX={loaiSX}
                            kieuSX={kieuSX}
                        />
                    </div>
                </div>
        );
    }
}

export default Control;
