import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props: any) => {
    return (
        <div className="relative p-2 flex">
            <div className="w-1/3">
                <img className="w-24 h-24 lg:w-36 lg:h-36" src={props.urlimg} alt={props.subtitle} />
            </div>
            <div className="w-2/3">
                <Link to={props.id} preventScrollReset={true}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900 underline underline-offset-2">
                        {props.title}
                    </h3>
                </Link>
                <p className="text-justify mt-2 text-base leading-6 text-gray-500">{props.subtitle}</p>
            </div>
        </div>
    );
};

export default Item;
