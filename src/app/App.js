import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as bookAction from './actions/bookAction';
import Popup from "reactjs-popup";
//import { url } from 'inspector';
import logo from './images/book-306178_960_720.png';

class App extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     
    this.state = {
      name: ''
    }
  }

  handleChange(e){
    switch (e.target.id)
    {
      case 'name': 
      this.setState({
        name: e.target.value
      })
      break;
      case 'description': 
      this.setState({
        description: e.target.value
      })
      break;
      case 'author': 
      this.setState({
        author: e.target.value
      })
      break;
      case 'count': 
      this.setState({
        count: e.target.value
      })
      break;
      default:
          this.setState({
            noVal: e.target.value
          })
    }

  }

  handleSubmit(e){
    e.preventDefault();
    let bookInfo = {
      name: this.state.name,
      description: this.state.description,
      author: this.state.author,
      count: this.state.count,
    }
   
    this.props.AddBookInfo(bookInfo);
    this.setState({
      name: ""
    });
    this.setState({
      description: ""
    });
    this.setState({
      count: ""
    });
    this.setState({
      author: ""
    });
  }

  listView(data, index){
    return (
   
      <div className="col-lg-4">
      <div className = "row">
        <div className="col-lg-11" style ={ { backgroundImage: "url("+logo+")",backgroundRepeat: "no-repeat", backgroundSize: 'cover', height: "70vh"}}>
            <div style={{verticalAlign: "middle", height: "25vh"}}></div> 
           <h1><center><span className="text-wrap" style = {{overflowWrap: "break-word"}}> {data.name}</span> </center></h1>
        </div>
        <div className="col-lg-1">
        </div>
        </div>
        <div class = "row">
        <div className="col-lg-12">
        
    <center><span>Description: {data.description}</span></center>
        </div>
        </div>
        <div className = "row">
        <div className="col-lg-12">
        
    <center><span>Number Of Copies Available: {data.count}</span></center>
        </div>
        </div>
        <div className = "row">
        <div className="col-lg-12">
        
        <center><button onClick={(e) => this.deleteBookInfo(e, index)} className="btn btn-small btn-danger">
            X
          </button></center>
        </div>
        </div>
        <hr />
        </div>
    )
  }

  deleteBookInfo(e, index){
    e.preventDefault();
    this.props.deleteBookInfo(index);
  }

  render() {

    return(
      <div className="container">
       <center> <h1>Books Library</h1></center>
        <hr />
        <div className="row">
        <div className = "col-lg-12">
        <Popup modal trigger={<button className="btn btn-info">Add Book</button>} >
        <div className="row">
        <div className = "col-lg-12">
        <center><h3>Insert Book Information</h3></center>
        </div>
        </div>
        <div className="row">
        <div className = "col-lg-12">
       <hr></hr>
        </div>
        </div>
        <div className="row">
        <div className = "col-lg-12">
          <form onSubmit={this.handleSubmit}>    
            <div className="row">
              <div className = "col-lg-12">
              <div className="form-group">
            <input type="text" id = "name" onChange={this.handleChange} className="form-control" value={this.state.name} placeholder = "Book Name" maxLength = "70" required/>
            </div>
            <div className="form-group">
            <textarea  id = "description"  onChange={this.handleChange} className="form-control" value={this.state.description} placeholder = "Book Description" maxLength="300" required/>
            </div>
            <div className="form-group">
            <input type="text" id = "author" onChange={this.handleChange} className="form-control" value={this.state.author} placeholder = "Author Name" maxLength = "70" required/>
            </div>
            <div className="form-group">
            <input type="number" id = "count" onChange={this.handleChange} className="form-control" value={this.state.count} placeholder = "Number Of Copies" maxLength="2" required/>
            </div>
            </div>
            </div>
            <div className="row">

        <div className = "col-lg-12">
        </div>
        </div>
        <div className="row">
        <div className = "col-lg-12">
        <input type="submit" className="btn btn-success float-right" value="Save Book Details" />
          </div>
          </div>
          </form>
          </div>
          </div>
    </Popup>

    </div>

    </div>
    <hr />
    <div>{ <div className="row">
          {this.props.books.map((book, i) => this.listView(book, i))}
        </div> }</div>
      
       
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    AddBookInfo: book => dispatch(bookAction.AddBookInfo(book)),
    deleteBookInfo: index =>dispatch(bookAction.deleteBookInfo(index))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);