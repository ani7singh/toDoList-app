import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, FormGroup, FormControl, ControlLabel, Checkbox } from "react-bootstrap";
//import { Link,Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TodoItem from './todoItem';
import './dashboard.css';
import axios from 'axios';
class TodoTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            value: ''
        };
        this.addTitle = this.addTitle.bind(this);
    }
    
/*-----get all the titles for that specific user--*/
    componentWillMount(){
    axios.get('http://localhost:3001/gettitles',
    {
       headers: {
         "Authorization": localStorage.getItem('authtoken')
       }
     })
    .then(response => {
        console.log("CONSOLE DATA : ", response.data)
       this.setState({ list : response.data })
    })
    .catch((err) => {
        // if (err.response.status == 401) {
            console.log("error : ", err)
        // }
    })
}

/*on add click will add the title*/ 
    addTitle(e) {
        var updatedList;
        if (this.state.value.length > 0) {
         updatedList = [...this.state.list, { title: this.state.value, list: [] }]
            this.setState({
                list: updatedList,
                value: ''
            });
        }
        var obj = {
            title : this.state.value,
            list: []
        };
        console.log("OBJECT : ", { title : this.state.value, list : [] })
        axios.post('http://localhost:3001/addnotetitle', obj,{
            headers: {
              "Authorization": localStorage.getItem('authtoken')
            }
        })
        .then((response) => {
            console.log("axios", response.data);
        })
        .catch(err => {
                console.error(err);
            });
    }
  /*title inputbox value changes */
  update(e) {
    // alert(e.target.value)
    this.setState({
        value: e.target.value
    })
   // console.log("VALUE : ", this.state.value)
}
title(key, e) {
    var temp =e.target.value;
    console.log(temp)
      console.log("IN TITLE : ", key)
     
}
    render() {
        return (
                <div className="todo-in-progress">

                    <h2> Working tasks</h2>

                    <div className="left_menu">
                        <div className="cont">
                            <h3 style={{ marginLeft: '6px', paddingTop: '3px' }}>
                                TO DO
                            </h3>
                            <div className="addlist">
                                <input type="text" onChange={(e) => { this.update(e) }} className="form-control add-todo" placeholder="Add todo" value={this.state.value} />
                            </div>
                            <Button onClick={this.addTitle}>
                                <span>Add Project</span>
                            </Button>
                        </div>
                        <ListGroup>
                            {
                                this.state.list.map((curr, index) => {
                                    return (
                                        <ListGroupItem key = { curr._id } bsStyle="success" value={curr.title}>{curr.title}</ListGroupItem>
                                    );
                                })
                            }
                        </ListGroup>
                    </div>
                    
                </div>
           
        );
    }
}

export default  TodoTitle;