import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
import { BackToTop } from '../components/BackToTop';
function DefaultLayout({ children }: { children: any }) {
    return (
        <div>
            <SubHeader />
            <Header />
            <div className="container">
                {/* <Sidebar /> */}
                <div className="content">{children}</div>
            </div>
            <Footer />
            <BackToTop />
        </div>
    );
}

export default DefaultLayout;
