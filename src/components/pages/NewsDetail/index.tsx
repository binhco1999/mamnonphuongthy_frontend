import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import env from 'react-dotenv';
function NewsDetail() {
    const { id } = useParams();
    const url = `${env.API_URL}/api/v1/posts/${id}`;

    let [post, setPost] = useState({
        title: null,
        subtitle: null,
        urlimg: null,
        text: null,
        date: null,
    });
    useEffect(() => {
        const fetchApi = async () => {
            await axios.get(url).then((response) => {
                setPost((post = response.data));
            });
        };
        fetchApi();
    }, []);

    return <div>Detail</div>;
}

export default NewsDetail;
