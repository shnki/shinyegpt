// pages/privacy-policy.js

import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <Head>
        <title>Privacy Policy - Your Company Name</title>
      </Head>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              Privacy Policy for ShinyEgypt Last updated: 28/01/20248.
            </p>
            <br />
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              1. Introduction Welcome to ShinyEgypt. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website,
              <a
                className="text-blue-500 underline"
                href="http://shinyegpt.vercel.app"
              >
                shinyegpt.vercel.app
              </a>
              , including any other media form, media channel, mobile website,
              or mobile application related or connected thereto . Please read
              this Privacy Policy carefully.
            </p>
            <br />
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              2. Information We Collect We may collect personal information that
              you provide directly to us, such as your name, address, email
              address, phone number, and payment information when you make a
              purchase on our Site.
            </p>
            <br />
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              3. How We Use Your Information We use the information we collect
              for various purposes, including to process your orders, provide
              customer service, improve our services, and communicate with you
              about promotions and updates.
            </p>
            <br />
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              4. Disclosure of Your Information We may share your personal
              information with third parties who perform services on our behalf
              and require access to that information to do that work.
            </p>
            <br />
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              5. Your Choices You have the right to opt-out of certain
              communications and control your personal information. You can
              update your preferences or ask us to delete your information by
              contacting us.
            </p>
            <br />
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              6. Security We take reasonable measures to help protect your
              personal information from loss, theft, misuse, and unauthorized
              access.
            </p>
            <br />
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              7. Changes to this Privacy Policy We may update our Privacy Policy
              from time to time. The updated version will be indicated by an
              updated (28/01/2023) date, and we encourage you to review this
              Privacy Policy periodically.
            </p>
            <br />
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-8">
              Contact Us If you have any questions or concerns about this
              Privacy Policy, please contact us at mohamed.yasser2727@gmail.com.
              By using our Site, you agree to the terms of this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
