import React, { Component } from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom';
import Post from '../../../components/Post/Post'
import './Posts.css'
import FullPost from '../FullPost/FullPost';

export default class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Tobias"
                    }
                })
                this.setState({ posts: updatedPosts })
            })
            .catch(error => {
                //this.setState({ error: true })
                console.log(error)
            })
    }

    postSelected = (id) => {
        this.setState({ selectedPostId: id })
    }

    render() {
        let posts = <p style={{ textAlign: 'center', color: 'red' }}>Something went wrong! Couldn't load posts!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (<Link to={'/' + post.id} key={post.id}>
                    <Post
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelected(post.id)} />
                </Link>)
            })
        }
        return (
            <div>
                <div className="Posts">
                    {posts}
                </div>
                <Route path="/:id" exact Component={FullPost}/>
            </div>
        )
    }
}
