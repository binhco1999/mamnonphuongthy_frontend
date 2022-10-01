import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="p-2 bg-pink-700 shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between container">
                <Link to="/" className="flex items-center mb-4 sm:mb-0">
                    <img
                        src="https://i.ibb.co/dbNsGCk/mnpt.jpg"
                        className="mr-3 rounded-full w-8 h-8"
                        alt="MNPT Logo"
                    />
                    <h2 className="self-center text-white text-lg lg:text-xl font-semibold whitespace-nowrap">
                        MẦM NON PHƯƠNG THY
                    </h2>
                </Link>
                <ul className="transition flex flex-wrap items-center text-sm text-white sm:mb-0">
                    <li>
                        <div className="mr-4 md:mr-6 ">Thông tin nhà phát triển :</div>
                    </li>
                    <li>
                        <a href="tel:0963940669" className="mr-4 hover:underline md:mr-6  ">
                            Số điện thoại
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/tranbinhco99/"
                            target={'_blank'}
                            className="mr-4 hover:underline md:mr-6"
                        >
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a href="mailto:tranbinhco.work@gmail.com" className="hover:underline">
                            Email
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="my-6  border-gray-200 sm:mx-auto lg:my-8" />
            <span className="p-4 pl-0 sm:p-0 block text-sm text-white sm:text-center">
                Copyright © Trường Mầm non Phương Thy
                <br /> Thiết kế và phát triển bởi Trần Bình Cơ
            </span>
        </footer>
    );
}

export default Footer;
