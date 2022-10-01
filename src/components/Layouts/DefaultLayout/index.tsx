import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import Footer from '../components/Footer';
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
        </div>
    );
}

export default DefaultLayout;
