import React, {Component} from 'react'
import axios from 'axios'

class PostList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            posts:[]
        }
    }
    componentDidMount(){
        axios.get('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/1')
        .then(response =>{
            this.setState({
                posts:response.data
            })
            console.log(response.data)
        })
    }
    render() {
        const {posts} = this.state
        return (
            <div>
                <h1>List</h1>{
                    posts.map(post => <div key={post.id}>{post.title}</div>)
                }
            </div>
        )
    }
}
export default PostList