import Nav from '../navBar/Nav';
import Footer from '../footer/Footer';

function Layout({ children }) {
    return (
        <div className="layout">
            <Nav />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;