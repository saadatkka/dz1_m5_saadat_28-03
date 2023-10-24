import React, {useEffect, useState} from 'react';
import axios from "axios";

const Postpage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
            .then(response => {
                setPosts(response.data.posts)
                console.log(response.data.posts)
            })
            .catch(err => {
                console.error(err, "Ошибка")
            })

    }, [])

    return (
        <div>
            <h1>Посты</h1>

            <ul>
                {
                    posts.map(post => (
                        <>
                            <h2>{post.title}</h2>
                            <li>{post.body}</li>
                        </>
                    ))
                }
            </ul>
        </div>
    );
};

export default Postpage;