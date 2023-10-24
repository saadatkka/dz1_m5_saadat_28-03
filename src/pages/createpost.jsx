import React, {useState} from 'react';

const Createpost = () => {
    const [inputData, setInputData ] = useState('')


    return (
        <div>
            <input type="text" value={inputData} onChange={e => setInputData(e.target.value)}/>
            <button>Создать пост</button>
        </div>
    );
};

export default Createpost;