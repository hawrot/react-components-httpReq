import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(p =>{
            const posts = p.data.slice(0, 10);
            const updatePosts = posts.map(post =>{
                return {...post,
                author: "Matt"}
            })
            this.setState({posts: updatePosts})
        });
    }

    render () {
        const posts = this.state.posts.map(post =>{
            return <Post author={post.author} title={post.title}/>
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
