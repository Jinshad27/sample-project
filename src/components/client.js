import React from 'react';
import axios from 'axios';

class Client extends React.Component {

  state = {
    id: '',
    name: '',
    email: '',
    phone:'',
    data: []
  }
   
  changeId = e => {
    let id = e.target.value;
    this.setState({
      id: id
    })
  }
  
  changeName = e => {
    let name = e.target.value;
    this.setState({
      name: name
    })
  }

  changeEmail = e => {
    let email = e.target.value;
    this.setState({
      email: email
    })
  }
  changePhone = e => {
    let phone = e.target.value;
    this.setState({
      phone:phone
    })
  }

  editPost = (postIndex, name, email,phone) => {
   let x = document.createElement("INPUT");
  x.setAttribute("type", "hidden");
  document.body.appendChild(x);

  document.getElementById("demo").innerHTML = "Update";
    this.setState({
      id: postIndex + 1,
      name: name,
      email: email,
      phone:phone
    })

  }
  
  addOrUpdatePost = e => {
    e.preventDefault();
    if(this.state.name === '' || this.state.email === '' || this.state.phone === ''|| this.state.id === '') {
      alert('No field should be empty');
      return;
    } else if(this.state.id > this.state.data.length + 1) { 
      alert('Please use the next id');
    } else {
      if(this.state.data[this.state.id - 1] !== undefined) {
        axios.put(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, {
          id: this.state.id ,
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone
        }).then(res => {
          let updatedData = [...this.state.data];
          document.getElementById("demo").innerHTML = "Add";
          updatedData[this.state.id - 1] = res.data;
          this.setState({
            id: updatedData.length + 1,
            name: '',
            email: '',
            phone:'',
            data: updatedData
          })
          console.log(res)
        })
        .catch(err => console.log(err));
      } else  {
      axios.post("https://jsonplaceholder.typicode.com/users", {
        id: this.state.id + 1,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone
      })
      .then(res => {
        console.log(res);
        let newUser = res.data;
        let newData = [...this.state.data, newUser];
        this.setState({
          id: this.state.id + 1,
          name: '',
          email: '',
          phone:'',
          data: newData
        });
      })
      .catch(err => console.log(err));
      }
    }
  }

  deletePost = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      let newData = [...this.state.data];
      newData.splice(id, 1);
      this.setState({
        id: newData.length + 1,
        name: '',
        email: '',
        phone:'',
        data: newData
      })
      console.log(res)
    })
    .catch(err => console.log(err));
  }
 
  check(){
    const name=localStorage.getItem('userName')
    
    if (name!=='admin') {
      let x = document.createElement("INPUT");
       x.setAttribute("type", "hidden");
       document.getElementById("myDIV").innerHTML = "";
       document.getElementById("myDI").innerHTML = "";
       
     
    } else {
      document.getElementById("myD").innerHTML = "";
    }
 
}
    
  
  componentDidMount() {
    this.check()
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      let newData = res.data.slice(0,20);
      this.setState({
        id: newData[newData.length - 1].id + 1,
        data: newData
      }, () => console.log(this.state.id))
      console.log(newData)
    })
    .catch(err => console.log("Couldn't fetch data. Error: " + err))
  }

  render() {

    return (
        <div className='ui container'>
        <h1 style={{textAlign:'center'}}>Clients </h1>
          <form className="ui form" Id='myDIV'>
          <div className="inline fields">
            <div className="four wide field">
            <label>Name</label>
          <input onChange={this.changeName} type='text' placeholder='Name' value={this.state.name} />
          </div>
          <div className="four wide field">
          <label>Email</label>
          <input onChange={this.changeEmail} type='email' placeholder='Email' value={this.state.email} />
          </div>
          <div className="four wide field">
          <label>Phone</label>
          <input onChange={this.changePhone} type='text' placeholder='Phone' value={this.state.phone} />
          </div>
          <button className="ui blue button" onClick={this.addOrUpdatePost} type='submit' id ="demo" value='Add'>Add</button>
  
          </div>
          </form>
          <table className="ui celled table" Id='myDI'>
          <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th >Action</th>
            </tr>
          </thead>
          <tbody>
          {
          this.state.data.length === 0 ?
            <p>Loading...</p>
          :
            this.state.data.map((user, index) => (
            <tr>
                <td> {user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td >
                <button className="ui blue button"  onClick={() => this.editPost(index, user.name, user.email,user.phone)} >Edit</button>
                <button className="ui red button"  onClick={() => this.deletePost(index)} >Delete</button> </td>
                </tr>
            ))
        }

                </tbody>
            </table>
        <table className="ui celled table" Id="myD">
          <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                
            </tr>
          </thead>
          <tbody>
          {
          this.state.data.length === 0 ?
            <p>Loading...</p>
          :
            this.state.data.map((user, index) => (
            <tr>
                <td> {user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
            </tr>
            ))
        }

                </tbody>
            </table>
        </div>
    )
  }
  
}

export default Client;


