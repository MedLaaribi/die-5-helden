import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="w-full">
            <div className="lg:mx-44">
                <Header />
            </div>
            <div className="flex flex-1 mx-4 sm:mx-8 lg:mx-16 xl:mx-44">
                <Sidebar />
                <main className="ml-8 mr-4 sm:mr-8 lg:mr-16 xl:mr-44 mt-10 mb-32 flex-1">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
