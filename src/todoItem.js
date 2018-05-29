import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, FormGroup, FormControl, ControlLabel, Checkbox } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './dashboard.css';
//  <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id) }>remove</button>{this.props.todo.text}
/* <Button style={content} >
                            <span class="glyphicon glyphicon-plus adder_icon" style={{ marginRight: '10px' }}></span>
                            Add Item
                    </Button>*/
class TodoItem extends Component {
  /*selecting checkbox on selection*/
  checkStateChanged(index, e) {

    console.log("CHECKBOX CHANGED : ", this.props.noteObj[0].list[index].isChecked);
    var objToChange = this.props.noteObj;
    objToChange[0].list[index].isChecked = !this.props.noteObj[0].list[index].isChecked
    this.props.checkStateChange(objToChange);
  }
  /*contents display*/
  selectedcontents() {
    console.log(this.props.noteObj)
    if (this.props.noteObj) {
      return (
        this.props.noteObj[0].list.map((noteEntry, idx) => {
          return (
            <ListGroupItem bsStyle="warning">
              <div className="description">
                <Checkbox onChange={this.checkStateChanged.bind(this, idx)}
                  checked={noteEntry.isChecked}>{noteEntry.content}</Checkbox>
              </div>
              <div className="action">
                <Button >
                  <i className="glyphicon glyphicon-pencil"></i>
                </Button>
                <Button >
                  <i className="glyphicon glyphicon-trash"></i>
                </Button>
              </div>
            </ListGroupItem>
          );
        })
      )
    }
  }
  /*addContent(){
    console.log(this.props.noteObj)
    /*if (this.props.noteObj) {
      return (
        this.props.noteObj.map((curr, index) => {
            return (
                     <ListGroupItem>
                          <div className="description">
                                  <Checkbox onChange = { this.checkStateChanged.bind(this, idx) }  
                               checked={noteEntry.isChecked}>{noteEntry.content}</Checkbox>
                             </div>
                             <div className="action">
                               <Button style={edit}>
                                     <i className="glyphicon glyphicon-pencil"></i>
                                 </Button>
                                 <Button style={delet}>
                                     <i className="glyphicon glyphicon-trash"></i>
                                 </Button>
                             </div>
                         </ListGroupItem>
            );
        })
      )
    }
  
  }*/
  render() {
    var edit = {
      marginRight: '15px',
      marginTop: '3px'
    }
    var delet = {
      marginTop: '3px'
    }
    var content = {
      marginBottom: '10px'
    }
    var content = {
      marginBottom: '10px'
    }
    return (
      <div className="content_container">
        <div style={{ marginLeft: '6px', paddingTop: '3px', marginTop: '30px' }}>

          <h3>
            {this.props.noteObj[0].title}
          </h3>

        </div>
        <div className="addcontent">
          <div className="col-md-9 addlist">
            <input type="text" className="form-control  add-todo" placeholder="Add items" onChange={(e) => { this.props.handleChange(e) }} />
          </div><div className="col-md-3"> <Button onClick={() => { this.props.addContent() }} style={{ marginBottom: '20px' }}>Add Item</Button>
          </div>

        </div>
        <div className="contentlist" style={{ marginTop: '105px' }}>
          <ListGroup componentClass="ul">
            {this.selectedcontents()}
            {/*this.addContent()*/}
          </ListGroup>
        </div>
      </div>
    );
  }
}
export default TodoItem;
     //<ListGroup componentClass="ul">
        //  {this.test()}
       //   {
              //this.state.item.map((curr, index) => {
              //     return (
              //         <ListGroupItem>
              //             <div className="description">
              //                 <Checkbox>{curr.content}</Checkbox>
              //             </div>
              //             <div className="action">
              //                 <Button style={edit}>
              //                     <i className="glyphicon glyphicon-pencil"></i>
              //                 </Button>
              //                 <Button style={delet}>
              //                     <i className="glyphicon glyphicon-trash"></i>
              //                 </Button>
              //             </div>
              //         </ListGroupItem>
              //     );
              // })
         // }
     // </ListGroup>}


