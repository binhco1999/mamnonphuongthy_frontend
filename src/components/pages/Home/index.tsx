import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.module.scss';
function Home() {
    const [users, setUserList] = useState([null]);
    useEffect(() => {
        // const url = 'http://localhost:5000/api/v1/users';
        // axios
        //     .get(url)
        //     .then((response) => {
        //         console.log('response: ', response.data);
        //     })
        //     .catch((err) => {
        //         console.log('err', err);
        //     });
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const url = 'http://localhost:5000/api/v1/users';
        const response = await axios.get(url).then((response) => {
            console.log(response.data);
            setUserList(response.data);
        });
        return response;
    };
    console.log('users: ', users);

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
    );
}

export default Home;
