import type { NextPage } from 'next';
import Head from 'next/head';

const Datenschutzerklaerung: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Datenschutzerklärung - Die 5 Helden</title>
                <meta name="description" content="Datenschutzinformationen für Die 5 Helden." />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <div className="px-1 md:px-8 lg:px-10 pt-28 md:pt-28 lg:pt-10">
                <h1 className="font-normal md:font-medium text-3xl text-[#f26b1d] lg:font-bold">Datenschutzerklärung</h1>
                <div className="h-0.5 my-4 bg-gradient-to-r from-[#F26B1D] via-[#F2CF1D] to-[#F26B1D]"></div>
                <div className="text-lg leading-7 text-gray-800">
                    <section>
                        <h2 className="font-semibold text-[#f26b1d]">1. Allgemeine Hinweise</h2>
                        <p>Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Diese Datenschutzerklärung erläutert, welche Informationen wir erheben, wie wir sie verwenden und welche Rechte Sie in Bezug auf Ihre Daten haben.</p>
                    </section>
                    <section className="mt-6">
                        <h2 className="font-semibold text-[#f26b1d]">2. Verantwortliche Stelle</h2>
                        <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                        <p>Die 5 Helden<br />
                            Schillstr.9 <br />
                            47119 Duisburg</p>
                        <p>E-Mail: diefunfhelden@web.de<br />
                            Handy: 0178 7303452</p>
                    </section>
                    <section className="mt-6">
                        <h2 className="font-semibold text-[#f26b1d]">3. Erhebung und Speicherung personenbezogener Daten</h2>
                        <p>Wir erheben und speichern personenbezogene Daten nur dann, wenn Sie uns diese im Rahmen einer Anfrage, Registrierung oder eines Vertragsabschlusses freiwillig mitteilen. Zu den personenbezogenen Daten können gehören:</p>
                        <ul className="list-disc list-inside">
                            <li>Name</li>
                            <li>Adresse</li>
                            <li>E-Mail-Adresse</li>
                            <li>Telefonnummer</li>
                            <li>Weitere relevante Informationen, die Sie uns im Rahmen Ihrer Anfrage zur Verfügung stellen</li>
                        </ul>
                    </section>
                    <section className="mt-6">
                        <h2 className="font-semibold text-[#f26b1d]">4. Verwendung der erhobenen Daten</h2>
                        <p>Die von Ihnen erhobenen personenbezogenen Daten werden ausschließlich zu folgenden Zwecken verwendet:</p>
                        <ul className="list-disc list-inside">
                            <li>Bearbeitung Ihrer Anfragen und Aufträge</li>
                            <li>Bereitstellung unserer Dienstleistungen</li>
                            <li>Abwicklung von Verträgen</li>
                            <li>Verbesserung unseres Serviceangebots</li>
                        </ul>
                    </section>
                    <section className="mt-6">
                        <h2 className="font-semibold text-[#f26b1d]">5. Weitergabe von Daten</h2>
                        <p>Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, wenn dies zur Vertragserfüllung notwendig ist, wir gesetzlich dazu verpflichtet sind, oder Sie ausdrücklich eingewilligt haben.</p>
                    </section>
                    <section className="mt-6">
                        <h2 className="font-semibold text-[#f26b1d]">6. Speicherung und Löschung von Daten</h2>
                        <p>Ihre Daten werden nur so lange gespeichert, wie es für die Erfüllung der genannten Zwecke erforderlich ist oder wie es gesetzliche Aufbewahrungsfristen vorschreiben. Nach Ablauf der Fristen werden die Daten gelöscht.</p>
                    </section>
                    <section className="mt-6">
                        <h2 className="font-semibold text-[#f26b1d]">7. Ihre Rechte</h2>
                        <p>Sie haben das Recht:</p>
                        <ul className="list-disc list-inside">
                            <li>Auskunft über die von uns verarbeiteten personenbezogenen Daten zu erhalten.</li>
                            <li>Die Berichtigung unrichtiger oder unvollständiger Daten zu verlangen.</li>
                            <li>Die Löschung Ihrer Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</li>
                            <li>Die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</li>
                            <li>Der Verarbeitung Ihrer Daten zu widersprechen.</li>
                            <li>Ihre Einwilligung zur Datenverarbeitung jederzeit zu widerrufen.</li>
                        </ul>
                    </section>
                    <section className="mt-6">
                        <h2 className="font-semibold text-[#f26b1d]">8. Cookies</h2>
                        <p>Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie können die Verwendung von Cookies in den Einstellungen Ihres Browsers deaktivieren.</p>
                    </section>
                    <section className="mt-6">
                        <h2 className="font-semibold text-[#f26b1d]">9. Datensicherheit</h2>
                        <p>Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen.</p>
                    </section>
                    <section className="mt-6">
                        <h2 className="font-semibold text-[#f26b1d]">10. Änderungen der Datenschutzerklärung</h2>
                        <p>Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, um aktuellen rechtlichen Anforderungen zu entsprechen oder Änderungen unserer Dienstleistungen umzusetzen. Die jeweils aktuelle Version gilt für Ihren Besuch auf unserer Website.</p>
                    </section>
                    <section className="mt-6">
                        <h2 className="font-semibold text-[#f26b1d]">11. Google Maps</h2>
                        <p>Wir verwenden die Google Maps API, um geographische Informationen visuell darzustellen. Bei der Nutzung von Google Maps werden von Google auch Daten über die Nutzung der Maps-Funktionen durch Besucher der Webseiten erhoben, verarbeitet und genutzt. Nähere Informationen über die Datenverarbeitung durch Google können Sie den Datenschutzhinweisen von Google entnehmen. Dort können Sie im Datenschutzcenter auch ihre Einstellungen verändern, so dass Sie ihre Daten verwalten und schützen können.</p>
                    </section>
                    <section className="mt-6">
                        <h2 className="font-semibold text-[#f26b1d]">12. Kontakt</h2>
                        <p>Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigungen, Sperrung oder Löschung von Daten sowie Widerruf erteilter Einwilligungen wenden Sie sich bitte an:</p>
                        <p>Mahinur Gönülalan<br />
                            Schillstr.9 <br />
                            47119 Duisburg</p>
                        <p>E-Mail: diefunfhelden@web.de<br />
                            Handy: 0178 7303452</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Datenschutzerklaerung;
