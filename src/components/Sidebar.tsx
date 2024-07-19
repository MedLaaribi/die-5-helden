import Link from 'next/link';

const Sidebar = () => {
    return (
        <nav className="bg-secondary w-60 bottom-0 left-44 z-10 p-4 space-y-4 rounded-lg">
            <ul>
                <li><Link href="/">Willkommen</Link></li>
                <li><Link href="/uebersicht">Übersicht</Link></li>
                <li><Link href="/oeffnungszeiten">Öffnungszeiten</Link></li>
                <li><Link href="/kontakt">Kontakt</Link></li>
                <li><Link href="/impressum">Impressum</Link></li>
            </ul>
        </nav>
    );
};

export default Sidebar;
