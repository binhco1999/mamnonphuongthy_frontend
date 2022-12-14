import { PhoneIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/24/outline';

import classNames from 'classnames/bind';
import styles from './SubHeader.module.scss';
const cx = classNames.bind(styles);
function SubHeader() {
    return (
        <header className={cx('wrapper-subheader', 'bg-yellow-500')}>
            <div className={cx('outer-subheader')}>
                <div className={cx('container')}>
                    <div className={cx('inner-subheader', 'row')}>
                        <div
                            className={cx(
                                'direct-contact',
                                'col-xs-9',
                                'col-sm-9',
                                'col-md-10',
                                'col-lg-10',
                                'col-xl-10',
                            )}
                        >
                            <div className={cx('icon-responsive-desktop')}>
                                <a
                                    className="hover:text-pink-700"
                                    href={
                                        'https://www.google.com/maps/place/M%E1%BA%A7m+Non+T%C6%B0+Th%E1%BB%A5c+Ph%C6%B0%C6%A1ng+Thy/@10.1190909,106.629646,17z/data=!4m5!3m4!1s0x319ffdfcd72b994d:0xf5477626fd9abaf!8m2!3d10.1190909!4d106.6318347'
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <MapIcon className="block h-4 w-4 mr-1  icon" />
                                    Vị trí trên bản đồ
                                </a>
                                <a className="hover:text-pink-700" href={'mailto:mamnonphuongthy@gmail.com'}>
                                    <EnvelopeIcon className="block h-4 w-4 mr-1  icon " />
                                    mamnonphuongthy@gmail.com
                                </a>
                                <a className="hover:text-pink-700" href={'tel:+84963940669'}>
                                    <PhoneIcon className="block h-4 w-4 mr-1  icon " />
                                    SĐT: 0963-940-669
                                </a>
                            </div>
                            <div className={cx('icon-responsive-mobile')}>
                                <a
                                    href={
                                        'https://www.google.com/maps/place/M%E1%BA%A7m+Non+T%C6%B0+Th%E1%BB%A5c+Ph%C6%B0%C6%A1ng+Thy/@10.1190909,106.629646,17z/data=!4m5!3m4!1s0x319ffdfcd72b994d:0xf5477626fd9abaf!8m2!3d10.1190909!4d106.6318347'
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:text-pink-700"
                                >
                                    <MapIcon className="block h-6 w-6  icon  " />
                                </a>
                                <a href={'mailto:mamnonphuongthy@gmail.com'} className="hover:text-pink-700">
                                    <EnvelopeIcon className="block h-6 w-6  icon " />
                                </a>
                                <a href={'tel:+84963940669'} className="hover:text-pink-700">
                                    <PhoneIcon className="block h-6 w-6  icon " />
                                </a>
                            </div>
                        </div>
                        <div
                            className={cx('social-contact', 'col-xs-3', 'col-sm-3', 'col-md-2', 'col-lg-2', 'col-xl-2')}
                        >
                            <a href={'https://www.facebook.com/mamnonphuongthy'} target={'_blank'} rel="noreferrer">
                                <div className={cx('icon', 'icon-fb', 'font-bold')}>Facebook</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default SubHeader;
