import React, {Component} from 'react';
import axios from 'axios';
import './PostForm.css';

class PostForm extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         first_name:'',
         last_name:'',
         emailId:''
      }
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile', this.state)
        .then(response =>{
            console.log(response)
        })
    }
    render(){
        const{first_name, last_name, createdAt, emailId,age, mobilenumber, pan_no, adhaar_no, id} = this.state
        return(
            <div class="container">
                <form onSubmit={this.handleSubmit}>
                <div class="form-box">
                        <label>CreatedAt:</label>
                        <input
                         type='date'
                         name='createdAt'
                         value={createdAt}
                         onChange={this.handleChange}
                         ></input>
                    </div>

                    <div class="form-box">
                        <label>First Name:</label>
                        <input
                         type='text'
                         name='first_name'
                         value={first_name}
                         onChange={this.handleChange}
                         ></input>
                    </div>
                    
                    <div class="form-box">
                        <label>Last Name:</label>
                        <input
                         type='text'
                         name='last_name'
                         value={last_name}
                         onChange={this.handleChange}
                         ></input>
                    </div>
                    <div class="form-box">
                        <label>Email-Id:</label>
                        <input
                         type='email'
                         name='emailId'
                         value={emailId}
                         onChange={this.handleChange}
                         ></input>
                    </div>

                    <div class="form-box">
                        <label>Age:</label>
                        <input
                         type='number'
                         name='age'
                         value={age}
                         onChange={this.handleChange}
                         ></input>
                    </div>

                    <div class="form-box">
                        <label>Gender:</label>
                        <input
                         type='radio'
                         name='gender'
                         value='Male'
                         onChange={this.handleChange}
                         ></input><label>Male</label>
                         <input
                         type='radio'
                         name='gender'
                         value='Female'
                         onChange={this.handleChange}
                         ></input><label>Female</label>
                    </div>
                    <div class="form-box">
                        <label>Mobile Number:</label>
                        <input
                         type='number'
                         name='mobilenumber'
                         value={mobilenumber}
                         onChange={this.handleChange}
                         ></input>
                    </div>

                    <div class="form-box">
                        <label>Pan Number:</label>
                        <input
                         type='text'
                         name='pan_no'
                         value={pan_no}
                         onChange={this.handleChange}
                         ></input>
                    </div>

                    <div class="form-box">
                        <label>Adhaar Number:</label>
                        <input
                         type='number'
                         name='adhaar_no'
                         value={adhaar_no}
                         onChange={this.handleChange}
                         ></input>
                    </div>

                    <div class="form-box">
                        <label>Id:</label>
                        <input
                         type='text'
                         name='id'
                         value={id}
                         onChange={this.handleChange}
                         ></input>
                    </div>

                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>

            </div>

        )
    }
}
export default PostForm