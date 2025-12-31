import React from 'react';


const Terms = () => {
    return (
        <>
            <div className="flex-grow container mx-auto px-4 py-8 mt-20 max-w-4xl">
                <h1 className="text-3xl font-bold mb-6 text-primary-500">Terms & Conditions</h1>
                <p className="text-gray-400 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
                    <p className="text-gray-300 mb-4">
                        These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Roavai ("we," "us," or "our"), concerning your access to and use of our website. By accessing the site, you confirm that you have read, understood, and agreed to be bound by all of these Terms and Conditions.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">2. Prototype Disclaimer</h2>
                    <p className="text-gray-300 mb-4">
                        Please be aware that the products and technologies showcased on this website are currently in the <strong>prototype stage</strong>. They are under active development and are not yet final commercial products.
                        Specs, designs, and features are subject to change without notice as we move towards production.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">3. Intellectual Property Rights</h2>
                    <p className="text-gray-300 mb-4">
                        Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">4. User Representations</h2>
                    <p className="text-gray-300 mb-4">
                        By using the website, you represent and warrant that: (1) all registration information you submit via our forms will be true, accurate, current, and complete; (2) you have the legal capacity and you agree to comply with these Terms and Conditions; and (3) you will not use the website for any illegal or unauthorized purpose.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">5. Limitation of Liability</h2>
                    <p className="text-gray-300 mb-4">
                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website, even if we have been advised of the possibility of such damages.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">6. Contact Us</h2>
                    <p className="text-gray-300">
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us.
                    </p>
                </section>
            </div>
        </>
    );
};

export default Terms;
