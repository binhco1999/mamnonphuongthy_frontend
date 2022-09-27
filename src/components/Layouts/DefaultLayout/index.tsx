import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Sidebar from './Sidebar';
import Slider from '../components/Slider';

function DefaultLayout({ children }: { children: any }) {
    return (
        <div>
            <SubHeader />
            <Header />
            <Slider />
            <Sidebar />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
