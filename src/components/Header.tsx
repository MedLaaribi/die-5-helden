const Header = () => {
    return (
        // Header Container mit Hintergrundfarbe, maximaler Breite und Zentrierung
        <header >
            <div className="flex items-center">
                {/* Logo mit festen Abmessungen und Abständen */}
                <img src="/images/logo.jpg" alt="Logo" className="w-28 h-32 m-2 rounded-lg"  />
                {/* Titel mit linker Margin und Textstilen */}
                <h1 className="text-white text-4xl font-bold ml-4">Die 5 Helden</h1>
            </div>
        </header>
    );
};

export default Header;
