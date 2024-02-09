/* eslint-disable react/no-unescaped-entities */
import Text from '@/components/ui/Text';
import React from 'react';

const page = () => {
  return (
    <div className="p-10 mt-16">
      <section>
        <Text type="h1">Cookie Policy of billbuddies.app</Text>
        <p>Welcome to billbuddies.app. </p>
        <p>
          This Cookie Policy is designed to inform you about our practices
          regarding the collection of information through cookies and other
          tracking technologies (like gifs, web beacons, etc.).{' '}
        </p>
        <p>
          The functionalities for which we use these technologies may include,
          but are not limited to, the following:
        </p>
        <ol className="list-disc ml-6 my-4">
          <li>Understanding how you navigate through our website</li>
          <li>Personalizing your experience on our site</li>
          <li>
            Providing you with customized content or offers on our site or
            within our advertising
          </li>
          <li>Optimizing your user experience on our site</li>
        </ol>
        <p>
          In the context of this policy, 'we', 'our', and 'us' refers to
          billbuddies.app and 'you' refers to you, as the user of this website.
        </p>
        <p>
          By using billbuddies.app, you accept our use of cookies in accordance
          with this Cookie Policy. If you do not accept the use of cookies,
          please disable them as instructed in this Cookie Policy, so they are
          not downloaded to your device when you use our website.
        </p>
        <p>
          We reserve the right to modify this Cookie Policy at any time. Any
          changes will be effective immediately upon posting to the website, so
          please review it frequently.
        </p>
      </section>

      <section>
        <Text type="h2" className="mt-4">
          How We Use Cookies
        </Text>
        <p>
          We use cookies for various purposes related to tracking expenses with
          groups and facilitating settlement processes on our website. Cookies
          are small files that are stored on your device when you visit our
          site. They allow us to recognize your device and enhance your user
          experience.
        </p>
      </section>

      <section>
        <Text type="h2" className="mt-4">
          Types of Cookies We Use
        </Text>
        <ol className="list-decimal ml-6 my-4">
          <li>
            Logging Cookies: These cookies help us track user activity on our
            website, such as pages visited and actions taken. They are essential
            for maintaining your session and ensuring the proper functioning of
            our site.
          </li>
          <li>
            Login Cookies: Login cookies are used to authenticate and identify
            users upon logging into their accounts. They allow you to access
            your account information securely and help us provide personalized
            features.
          </li>
        </ol>
      </section>

      <section>
        <Text type="h2" className="mt-4">
          Third-Party Cookies
        </Text>
        <p>
          We also utilize certain third-party cookies on our website. These
          cookies are placed by external service providers to enhance the
          functionality and performance of our site. The third-party cookies we
          use are:
        </p>
        <ol className="list-disc ml-6 my-4">
          <li>
            Priority Hints (Performance): This technology is employed to improve
            the performance of our website by suggesting which content should be
            loaded or prioritized first. It helps optimize the loading speed and
            overall user experience.
          </li>
        </ol>
        <p>
          Please note that these third-party cookies are subject to the privacy
          policies of their respective providers. We do not have control over
          the information collected or processed by these cookies. We recommend
          reviewing the privacy policies of these third parties for more
          information on how they handle your data.
        </p>
        <p>
          By using our website, you consent to the use of cookies as described
          above. You can manage, disable, or delete cookies through your browser
          settings. However, please note that disabling or deleting cookies may
          affect your ability to access certain features and functionalities on
          our website.
        </p>
      </section>

      <section>
        <Text type="h2" className="mt-4">
          How to Manage and Delete Cookies
        </Text>
        <p>
          Most web browsers allow you to manage your cookie preferences. You can
          set your browser to refuse cookies or delete certain cookies.
          Generally, you should also be able to manage similar technologies in
          the same way that you manage cookies – using your browsers'
          preferences.
        </p>
        <p>Here is how you can do it in different browsers:</p>
        <ol className="list-disc ml-6 my-4">
          <li>
            Google Chrome: Go to Settings {'>'} Privacy and security {'>'} Site
            Settings {'>'} Cookies and site data. Here, you can Clear cookies
            and site data as well as setting the browser to Block third-party
            cookies.
          </li>
          <li>
            Mozilla Firefox: Go to Options {'>'} Privacy & Security {'>'}{' '}
            Cookies and Site Data. You can Clear Data here, or you can set the
            browser to delete cookies every time you quit the browser.
          </li>
          <li>
            Safari: Go to Preferences {'>'} Privacy {'>'} Cookies and website
            data. You can then Block all cookies or remove specific cookies.
          </li>
          <li>
            Internet Explorer: Go to Settings {'>'} Internet options {'>'}{' '}
            General {'>'} Browsing history {'>'} Settings {'>'} Temporary
            Internet Files and Website Files. Here, you can Delete files or set
            the browser to delete browser history on exit.
          </li>
        </ol>
        <p>
          Please be aware that if you choose to block cookies, you may not be
          able to sign in or use those features, and preferences that are
          dependent on cookies may be lost. If you choose to delete cookies,
          settings and preferences controlled by those cookies will be deleted
          and may need to be recreated.
        </p>
      </section>
    </div>
  );
};

export default page;
