import React from 'react';


const PrivacyPolicy = () => {
    return (
        <>
            <div className="flex-grow container mx-auto px-4 py-8 mt-20 max-w-4xl">
                <h1 className="text-3xl font-bold mb-6 text-primary-500">Privacy Policy</h1>
                <p className="text-gray-400 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">1. Introduction</h2>
                    <p className="text-gray-300 mb-4">
                        Welcome to Roavai. We are committed to protecting your privacy and ensuring you understand how your information is collected and used. This Privacy Policy explains our practices regarding the collection, use, and disclosure of your information when you visit our website.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">2. Information We Collect</h2>
                    <p className="text-gray-300 mb-4">
                        We collect information that you voluntarily provide to us when you express interest in our products or services. This includes:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 ml-4">
                        <li><strong>Personal Identification Information:</strong> Name, Email Address.</li>
                        <li><strong>Communication Data:</strong> Any message or content you provide in the contact form.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
                    <p className="text-gray-300 mb-4">
                        We use the information we collect for the following specific purposes:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 ml-4">
                        <li> To respond to your inquiries regarding investment opportunities or product interest.</li>
                        <li> To communicate with you about our prototype updates and production timelines.</li>
                        <li> To maintain a systematic record of potential investors and customers.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">4. Third-Party Services</h2>
                    <p className="text-gray-300 mb-4">
                        We use <strong>Google Sheets</strong> to store and manage the data collected through our website's form. By submitting your information, you acknowledge that your data will be transferred to and stored on Google's servers. We recommend reviewing <a href="https://policies.google.com/privacy" className="text-primary-400 hover:underline" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a> to understand how they handle data.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">5. Data Security</h2>
                    <p className="text-gray-300 mb-4">
                        We implement reasonable security measures to maintain the safety of your personal information. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal data, we cannot guarantee its absolute security.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">6. Your Rights</h2>
                    <p className="text-gray-300 mb-4">
                        Depending on your location, you may have the right to access, correct, or delete the personal information we hold about you. If you wish to exercise these rights, please contact us directly.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">7. Updates to This Policy</h2>
                    <p className="text-gray-300 mb-4">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">8. Contact Us</h2>
                    <p className="text-gray-300">
                        If you have any questions about this Privacy Policy, please contact us via our official social media channels or email.
                    </p>
                </section>
            </div>
        </>
    );
};

export default PrivacyPolicy;
