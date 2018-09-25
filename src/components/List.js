import React, { Component } from 'react';

import Item from "./Item";

class List extends Component {
    constructor(props){
        super(props);

        this.state = {

        }

    }
    render() {
        var itemList = this.props.congViec;
        var arrItems = itemList.map((value, key)=>{
            return <Item onClickEdit={this.props.onClickEdit} onClickDelete={this.props.onClickDelete} key={key} value={value} index={key}/>
        });
        return (
            <div className="ibox-content" style={{marginTop: '10%'}}>
                <table className="footable table table-stripped toggle-arrow-tiny default breakpoint footable-loaded" data-page-size={15}>
                    <thead>
                    <tr>
                        <th data-toggle="true" className="footable-visible footable-first-column footable-sortable">Thứ Tự<span className="footable-sort-indicator" /></th>
                        <th data-hide="phone" className="footable-visible footable-sortable">Công Việc<span className="footable-sort-indicator" /></th>
                        <th data-hide="phone" className="footable-visible footable-sortable">Trạng Thái<span className="footable-sort-indicator" /></th>
                        <th className="text-right footable-visible footable-last-column" data-sort-ignore="true">Tùy Chọn</th>
                    </tr>
                    </thead>
                    <tbody style={{textAlign: 'left'}}>
                    {/*====ITEM=====*/}
                    {arrItems}
                    {/*=============*/}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default List;
