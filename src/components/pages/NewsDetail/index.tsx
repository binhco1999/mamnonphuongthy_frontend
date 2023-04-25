import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import env from 'react-dotenv';

function NewsDetail() {
    let [post, setPost] = useState({
        title: '',
        subtitle: '',
        urlimg: '',
        text: '',
        name: '',
        date: '',
        avatar: '',
    });
    let ref = useRef('');
    const { id } = useParams();

    let sId = useRef(id);
    useEffect(() => {
        ref.current = `${env.API_URL}/api/v1/posts/${sId.current}`;
        const fetchApi = async () => {
            await axios.get(ref.current).then((response) => {
                setPost(response.data);
            });
        };
        fetchApi();
    }, []);
    const convertDate = new Date(post.date).toLocaleString();
    return (
        <div className="bg-gradient-to-r from-yellow-200 to-pink-200">
            <div className="mx-auto">
                {/*post*/}
                <div className="max-w-6xl mx-auto ">
                    <div className="block transition duration-200 ease-out transform lg:hover:scale-105">
                        <img
                            className=" p-10 object-cover w-full shadow-sm h-full"
                            src={post.urlimg || ' '}
                            alt={post.title || ' '}
                        />
                    </div>
                    {/*post categories*/}

                    <div className="mt-2">
                        {/*post heading*/}
                        <h2 className="sm:text-xl md:text-2xl lg:text-3xl font-bold text-pink-600 p-4">
                            {post.title || 'Đang tải nội dung bài viết...'}
                        </h2>
                        {/*post views*/}
                        <div className="p-4 flex justify-start items-center mt-2">
                            <p className="text-sm text-yellow-500 font-bold bg-gray-100 rounded-md py-2 px-2">
                                Ngày đăng:
                            </p>
                            <p className="text-sm text-gray-400 font-bold ml-5">{convertDate || ' '}</p>
                        </div>
                        {/*author avator*/}
                        <div className="font-light text-gray-600">
                            <div className="ml-4 flex items-center ">
                                <p className="text-sm text-gray-500 font-bold rounded-md py-2 ">Người đăng:</p>
                                <img
                                    src={post.avatar ? post.avatar : ''}
                                    alt="avatar"
                                    className=" object-cover w-12 h-12 mx-2 rounded-full "
                                />
                                <span className="text-base font-semibold text-gray-700">{post.name || ' '}</span>
                            </div>
                        </div>
                    </div>
                    {/*end post header*/}
                    {/*post content*/}
                    <div className=" p-4  text-xl ">
                        {/*content body*/}
                        <div className="p-4 lg:p-0 text-gray-700 mt-4 rounded bg-gray-100 ">
                            <p className="mt-2 p-2 ">{post.text || ' '}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsDetail;
