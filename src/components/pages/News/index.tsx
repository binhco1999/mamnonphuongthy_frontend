import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import env from 'react-dotenv';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function News() {
    let [posts, setPosts] = useState([]);
    let [page, setPage] = useState(1);
    let [total, setTotal] = useState(1);
    let ref = useRef('');
    useEffect(() => {
        ref.current = `${env.API_URL}/api/v1/posts/paging/${page}`;
        const fetchApi = async () => {
            await axios.get(ref.current).then((response) => {
                setTotal(response.data.total);
                setPosts(response.data.items);
            });
        };
        fetchApi();
    }, [page, total]);

    const times = (number: any) => {
        let pageNum = Math.ceil(number / 10);
        return pageNum;
    };

    const handlePaging = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let target = e.currentTarget.textContent;
        if (target === 'Trang sau') {
            if (page < times(total)) {
                setPage(page + 1);
            }
        } else if (target === 'Trang trước') {
            if (page > 1) {
                setPage(page - 1);
            }
        } else {
            let convertNum = Number(target);
            if (convertNum === page) {
                return;
            } else if (convertNum > page || convertNum < page) {
                setPage(convertNum);
            }
        }
    };

    const renderPages = (total: any) => {
        let content = [];

        for (let i = 0; i < times(total); i++) {
            content.push(
                <button
                    onClick={handlePaging}
                    key={i + 1}
                    aria-current="page"
                    className="relative z-10 text-white transition inline-flex items-center px-4 py-2 text-sm font-medium bg-pink-500 hover:bg-pink-600 active:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
                >
                    {i + 1}
                </button>,
            );
        }
        return content;
    };
    return (
        <div>
            <div className="p-0 pb-6">
                <div className="max-w-7xl ">
                    <div className="lg:text-center bg-mnpt-back p-20 bg-right md:p-32 md:bg-right lg:bg-center ">
                        <div className="rounded-md backdrop-brightness-125  bg-white/60 hover:bg-white/90 transition p-2 md:p-5 ">
                            <h2 className="text-3xl sm:text-4xl leading-8 text-pink-700 font-bold ">
                                Sự kiện mới nhất
                            </h2>
                            <p className="lg:overline  mt-4 max-w-2xl text-xl text-pink-700 font-semibold lg:mx-auto">
                                Tổng hợp những sự kiện mới nhất của trường mầm non Phương Thy
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 p-2 sm:px-4">
                        <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:space-y-0">
                            {posts
                                .slice(0)
                                .reverse()
                                .map((val: any, idx) => {
                                    return (
                                        <div className="relative flex" key={idx}>
                                            <div className="w-1/3">
                                                <img
                                                    className="w-24 h-24 lg:w-36 lg:h-36"
                                                    src={val.urlimg}
                                                    alt={val.subtitle}
                                                />
                                            </div>
                                            <div className="w-2/3">
                                                <Link to={val._id} preventScrollReset={true}>
                                                    <h3 className="text-lg font-semibold leading-6 text-gray-900 underline underline-offset-2">
                                                        {val.title}
                                                    </h3>
                                                </Link>
                                                <p className="text-justify mt-2 text-base leading-6 text-gray-500">
                                                    {val.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                        </dl>
                    </div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidden">
                        <button
                            onClick={handlePaging}
                            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Trang trước
                        </button>
                        <button
                            onClick={handlePaging}
                            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        >
                            Trang sau
                        </button>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                Hiển thị <span className="font-medium">1</span> đến{' '}
                                <span className="font-medium">10</span> trong số{' '}
                                <span className="font-medium">{total}</span> Bài viết
                            </p>
                        </div>
                        <div>
                            <nav
                                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                aria-label="Pagination"
                            >
                                <button
                                    onClick={handlePaging}
                                    className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                >
                                    <span className="sr-only">Trang trước</span>
                                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                                {renderPages(total)}
                                <button
                                    onClick={handlePaging}
                                    className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                                >
                                    <span className="sr-only">Trang sau</span>
                                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
