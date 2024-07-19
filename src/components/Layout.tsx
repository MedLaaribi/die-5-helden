import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="w-full mx-auto">
            <div className="bg-primary max-w-7xl h-36 flex items-center justify-between mx-44 rounded-lg">
            <Header />
            </div>
            <div className="flex flex-1 ml-44">
                <Sidebar />
                <main className="ml-8 mr-44 mt-10 mb-32 flex-1">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
