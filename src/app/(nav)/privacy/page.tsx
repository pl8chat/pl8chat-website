import Link from 'next/link'

interface PrivacySection {
  title: string;
  content?: string;
  isHighlight?: boolean;
}

const privacyData: PrivacySection[] = [
  {
    title: '1. Overview',
    content:
      '1.1 Welcome to PL8CHAT (the "App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our App.',
  },
  {
    title: '2. Information We Collect',
    content:
      '2.1 Personal Information:\nWhen you register for an account, we collect your name, phone number, email address and license plate number.\nWhen you create a profile, you may choose to provide additional information such as your full name and vehicle details.\nWe may collect information about your interactions with other users, content you post, and messages you send.\n\n2.2 Automatically Collected Information:\nWe automatically collect certain information about your device, including device type and operating system.\nWe may use cookies and similar technologies to enhance your experience and gather information about your usage patterns.',
  },
  {
    title: '3. How We Use Your Information',
    content:
      "3.1 We use the information we collect for the following purposes:\nTo provide and personalize the App's features.\nTo communicate with you, including sending important notices, updates, and promotional materials.\nTo monitor and analyze usage patterns and improve the App's functionality.\nTo prevent fraud, enforce our terms, and comply with legal obligations.",
  },
  {
    title: '4. Information Sharing',
    content:
      "4.1 We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy.\n4.2 We may share your information with:\nService providers who assist us in operating the App and providing services.\nOther users as part of the App's features such as sharing vehicle and user profiles and messaging.",
  },
  {
    title: '5. Your Choices',
    content:
      '5.1 You can control and customize certain privacy settings within the App.\n5.2 You may opt out of receiving promotional communications from us by following the instructions in those communications or by contacting us directly.',
  },
  {
    title: '6. Security',
    content:
      '6.1 We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.',
  },
  {
    title: "7. Children's Privacy",
    content:
      '7.1 The App is not intended for individuals under the age of 16, and we do not knowingly collect personal information from children.',
  },
  {
    title: '8. Changes to This Privacy Policy',
    content:
      '8.1 We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any changes by posting the new policy on this page.',
  },
];


export default function Terms() {
  return (
    <div className="self-stretch px-4 md:pl-36 pt-6 md:pt-44 pb-7 md:pb-20 inline-flex flex-col justify-start items-start gap-4">
      <div className="self-stretch justify-start text-black text-3xl font-semibold leading-[50px] md:leading-[100px]">
        Privacy Policy
      </div>
      <div className="md:w-[897px] justify-start">
        <div className='flex flex-col pb-4'>
          <div className='text-black text-sm font-semibold leading-[25px] mb-1'>
            Last updated: December 01, 2024
          </div>
          <div className='text-black text-sm font-normal leading-[25px] whitespace-pre-line'>
            We started PL8CHAT to connect people, cars, and unite parking and driving communities through license plates. Our mission is to bring the automotive community closer than ever before, and we are committed to valuing your privacy as we do so. This Privacy Policy describes how PL8CHAT, LLC. and its affiliates (“we,” “us,” or “PL8CHAT”), process personal and vehicle information in relation to your use of the PL8CHAT Platform.
          </div>
        </div>
        {privacyData.map((section, idx) => (
          <div key={idx} className="mb-4">
            <div className="text-black text-sm font-semibold leading-[25px] mb-1">
              {section.title}
            </div>
            {section.content && (
              <div className="text-black text-sm font-normal leading-[25px] whitespace-pre-line">
                {section.content}
              </div>
            )}
          </div>
        ))}
        <div className="mt-6 text-black text-sm font-semibold leading-[25px]">
          Contact Us
        </div>
        <div className="text-black text-sm font-normal leading-[25px]">
          If you have any questions or concerns about this Privacy Policy, please contact us at:
          <br />
          +1 (310) PL8-CHAT
        </div>
        <Link
          href="mailto:info@pl8chat.com"
          className="text-[#034B48] text-sm font-semibold leading-[25px]"
        >
          info@pl8chat.com
        </Link>
      </div>
    </div>
  );
}