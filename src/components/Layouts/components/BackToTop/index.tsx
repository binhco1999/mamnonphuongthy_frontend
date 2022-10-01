import { useState, useEffect } from 'react';
import { ArrowLongUpIcon } from '@heroicons/react/24/outline';

export const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);

        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="fixed bottom-24 right-2 sm:right-8 p-4 ">
            <button
                type="button"
                className="rounded bg-pink-300/50 rounded-full text-pink-700 p-2 lg:p-4"
                onClick={scrollToTop}
                style={{ display: visible ? 'flex' : 'none' }}
            >
                <ArrowLongUpIcon className="h-8 w-8 font-bold" aria-hidden="true" />
            </button>
        </div>
    );
};
