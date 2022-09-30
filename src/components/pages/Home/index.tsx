import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Slider from '../../Layouts/components/Slider';
import News from '../News';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper-home bg-gradient-to-r from-pink-200 to-yellow-200')}>
            <div className="lg:px-60 lg:pb-8">
                <Slider />
            </div>
            <News />
        </div>
    );
}

export default Home;
