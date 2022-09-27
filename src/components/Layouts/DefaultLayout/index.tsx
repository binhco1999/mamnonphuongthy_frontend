import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Sidebar from './Sidebar';
import Slider from '../components/Slider';

function DefaultLayout({ children }: { children: any }) {
    return (
        <div>
            <SubHeader />
            <Header />
            <div className="container">
                <Slider />
                <Sidebar />
            </div>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
