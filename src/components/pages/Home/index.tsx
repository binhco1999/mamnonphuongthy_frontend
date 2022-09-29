import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Slider from '../../Layouts/components/Slider';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper-home')}>
            <Slider />
        </div>
    );
}

export default Home;
