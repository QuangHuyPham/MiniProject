import React, {Component} from 'react';

import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import CongViec from './components/CongViec';
import uuidv4 from'uuid/v4';

import _ from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Items       : CongViec,
            showForm    : false,
            strSearch   : "",
            loaiSX      : "",
            kieuSX      : "",
            itemSelected: null
        };

        this.AnHienForm = this.AnHienForm.bind(this);
        this.handleSearchApp = this.handleSearchApp.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    AnHienForm() {
        this.setState({
            showForm: !this.state.showForm,
            itemSelected: null
        })
    }

    handleSearchApp(value) {
        this.setState({
            strSearch: value
        })
    }

    handleSort(loaiSX, kieuSX){
        this.setState({
            loaiSX: loaiSX,
            kieuSX: kieuSX
        })
    }

    handleDelete(id){
        _.remove(this.state.Items, (item)=> {
            return item.id === id;
        });
        this.setState({
            Items: this.state.Items
        })
    }

    handleSubmit(item){
        let {Items} = this.state;
        if (item.id !== ''){
            Items.forEach((elm, key)=>{
                if (elm.id === item.id){
                    Items[key].name = item.name;
                    Items[key].lavel = +item.lavel;
                }
            });
        } else {
            Items.push({
                id: uuidv4(),
                name: item.name,
                lavel: +item.lavel
            });
        }

        this.setState({
            Items: Items,
            showForm: false
        });
    }

    handleEdit(item){
        this.setState({
            itemSelected: item,
            showForm: true
        })
    }

    render() {
        var itemOrigin = [...this.state.Items];
        var itemApp = [];
        var showForm = this.state.showForm;
        var {loaiSX,kieuSX,itemSelected} = this.state;
        var elmForm = "";
        if (showForm) {
            elmForm = <Form onClickSelected={itemSelected} onClickSubmit={this.handleSubmit} onClickAdd={this.AnHienForm}/>
        }

        //SORT
        itemOrigin = _.orderBy(itemOrigin, [this.state.loaiSX], [this.state.kieuSX]);

        // SEARCH
        if (this.state.strSearch.length > 0){
            itemApp = _.filter(itemOrigin, (item) => {
                return _.includes(item.name.toLowerCase(), this.state.strSearch.toLowerCase());
            });
        } else {
            itemApp = itemOrigin;
        };

        // if (this.state.strSearch.length > 0) {
        //   itemOrigin.forEach((item) => {
        //     if (item.name.toLowerCase().indexOf(this.state.strSearch) !== -1) {
        //       itemApp.push(item);
        //     }
        //   })
        // } else {
        //   itemApp = itemOrigin;
        // }

        return (
            <div className="App">
                <div className="container">
                    {/*====TITLE====*/}
                    <Title/>
                    {/*=============*/}

                    {/*====CONTROL & FORM====*/}
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Control
                            onClickSort={this.handleSort}
                            loaiSX={loaiSX}
                            kieuSX={kieuSX}
                            onClickSearchApp={this.handleSearchApp}
                            onClickAdd={this.AnHienForm}
                            onClickClose={showForm}
                        />
                        {elmForm}
                    </div>
                    {/*======LIST======*/}
                    <List
                        onClickEdit={this.handleEdit}
                        congViec={itemApp}
                        onClickDelete={this.handleDelete}
                    />
                </div>
            </div>
        );
    }
}

export default App;
