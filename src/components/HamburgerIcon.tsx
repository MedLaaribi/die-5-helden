import { FaBars, FaTimes } from 'react-icons/fa';

interface HamburgerIconProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <div className="lg:hidden p-4">
            {isOpen ? (
                <FaTimes onClick={toggleSidebar} className="text-white w-6 h-6 cursor-pointer" />
            ) : (
                <FaBars onClick={toggleSidebar} className="text-white w-6 h-6 cursor-pointer" />
            )}
        </div>
    );
};

export default HamburgerIcon;
