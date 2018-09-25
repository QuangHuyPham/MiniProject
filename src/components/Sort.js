import React, { Component } from 'react';

class Sort extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
        this.handleSort = this.handleSort.bind(this);
    }
    handleSort(loaiSX, kieuSX){
        this.props.onClickSort(loaiSX,kieuSX);
    }

    render() {
        var {loaiSX, kieuSX} = this.props;
        return (
            <div className="row">
                <div className="btn-group" style={{float: 'left'}}>
                    <div className="btn-group">
                        <button data-toggle="dropdown" className="btn btn-default dropdown-toggle" aria-expanded="false">SORT BY <i className="fa fa-caret-down" aria-hidden="true"></i></button>
                        <ul className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', top: 33, left: 0, willChange: 'top, left'}}>
                            <li><a className="dropdown-item" onClick={()=>this.handleSort("id", "desc")} role="button">Sắp xếp theo thứ tự: Tăng dần</a></li>
                            <li><a className="dropdown-item" onClick={()=>this.handleSort("id", "esc")} role="button">Sắp xếp theo thứ tự: Giảm dần</a></li>
                            <li><a className="dropdown-item" onClick={()=>this.handleSort("lavel", "desc")} role="button">Sắp xếp theo trạng thái: Tăng dần</a></li>
                            <li><a className="dropdown-item" onClick={()=>this.handleSort("lavel", "esc")} role="button">Sắp xếp theo trạng thái: Giảm dần</a></li>
                        </ul>
                    </div>
                </div>
                <button className="btn btn-primary" type="button">{loaiSX + "-" + kieuSX}</button>
            </div>
        );
    }
}

export default Sort;
