import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Createpost = () => {
    const [inputData, setInputData ] = useState('')
    const navigate = useNavigate()
    const [postResponse, setPostResponse] = useState({})

    const postCreateFunc = () => {
        axios.post('https://dummyjson.com/posts/add',{
            title: inputData,
            userId: '1'
        })
            .then((response) => {
                setPostResponse(response.data)
                navigate('/')
            }).catch(err => {console.error(err)})

    }

    return (
        <div>
            <input type="text" value={inputData} onChange={e => setInputData(e.target.value)}/>
            <button onClick={postCreateFunc}>Создать пост</button>
        </div>
    );
};

export default Createpost;