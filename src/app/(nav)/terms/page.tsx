import Link from 'next/link'

interface Terms {
  title: string;
  content?: string;
  isBold?: boolean;        // Optional, in case you want to bold certain items
  isHighlight?: boolean;   // Used to conditionally apply special styling like a link
}


const termsData: Terms[] = [
  {
    title: 'Last updated: December 01, 2024',
    isBold: false,
    content: '',
    isHighlight: false,
  },
  {
    title: '1. Acceptance of Terms',
    content: `1.1 By using PL8CHAT (“the App”) you agree to comply with and be bound by these terms and conditions (the "Terms"). If you do not agree to these Terms, please do not use the App.`,
  },
  {
    title: '2. User Registration',
    content: `2.1 To use certain features of the App, you may be required to register for an account. You agree to provide accurate and complete information during the registration process and to update such information to keep it accurate and current.\n2.2 You must be 16 years of age and or of legal driving age in the USA\n2.3 You must be the registered owner and or an authorized insured driver of the vehicle you sign up with.`,
  },
  {
    title: '3. Privacy Policy',
    content: `3.1 Your use of the App is also governed by our Privacy Policy, which can be found here at `,
    isHighlight: true,
  },
  {
    title: '4. User Content',
    content: `4.1 You retain ownership of the content you submit or post on the App ("User Content"). By submitting User Content, you grant PL8CHAT a worldwide, non-exclusive, royalty-free, sub-licensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform your User Content.`,
  },
  {
    title: '5. User eligibility and conduct',
    content: `5.1 You agree not to engage in any of the following prohibited activities:\n- Violating any applicable laws or regulations.\n- Posting or sharing content that is illegal, obscene, defamatory, or otherwise objectionable.\n- Impersonating another person or entity.\n- Using the App for any unauthorized commercial purpose.\n- Attempting to gain unauthorized access to the App or its related systems.\n- Using our app while driving\n- Sending rude, disrespectful or offensive messages to other users.\n5.2 You agree if you have been convicted of or are currently facing charges related to aggressive driving, reckless driving, harassment, stalking, or any other criminal offense involving unsafe or abusive behavior are not permitted to use PL8CHAT. By agreeing to these terms, you confirm that you have no such convictions or pending charges.`,
  },
  {
    title: '6. Intellectual Property',
    content: `6.1 PL8CHAT retains all rights to the intellectual property associated with the App. You agree not to reproduce, distribute, or create derivative works based on the App or its content without our prior written consent.`,
  },
  {
    title: '7. Termination',
    content: `7.1 PL8CHAT reserves the right to terminate or suspend your account and access to the App at any time and for any reason.`,
  },
  {
    title: '8. Disclaimer of Warranties',
    content: `8.1 The App is provided "as is" and without warranties of any kind, either express or implied. PL8CHAT disclaims all warranties, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
  },
  {
    title: '9. Limitation of Liability',
    content: `9.1 In no event shall PL8CHAT be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of the App.`,
  },
  {
    title: '10. Governing Law',
    content: `10.1 These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction].`,
  },
  {
    title: '11. Changes to Terms',
    content: `11.1 We reserve the right to modify these Terms at any time. Your continued use of the App after the effective date of any changes constitutes your acceptance of the modified Terms.`,
  },
  {
    title: '12. Username Policy',
    content: `12.1 We reserve the right to revoke usernames at any time for any reason.`,
  },
  {
    title: 'Rights you grant us',
    content: `13.1 We always love to hear from our users. By providing feedback, suggestions or ideas, we can use them without compensating you, and without any restriction or obligation to you. You agree that we will own all rights in anything we develop from your input.`,
  },
];

export default function Terms() {
  return (
    <div className="self-stretch pl-36 pt-44 pb-16 inline-flex flex-col justify-start items-start gap-4">
      <div className="self-stretch justify-start text-black text-3xl font-semibold leading-[100px]">
        Terms of Service
      </div>
      <div className="w-[897px] justify-start">
        {termsData.map((section, idx) => (
          <div key={idx} className="mb-4">
            <div className="text-black text-sm font-semibold  leading-[25px] mb-1">
              {section.title}
            </div>
            <div className="text-black text-sm font-normal  leading-[25px] whitespace-pre-line">
              {section.content}
              {section.isHighlight && (
                <span className="text-[#034B48]">pl8chat.com/privacy</span>
              )}
            </div>
          </div>
        ))}
        <div className="mt-6 text-black text-sm font-semibold  leading-[25px]">Contact Us</div>
        <div className="text-black text-sm font-normal  leading-[25px]">
          If you have any questions or concerns about our Terms of Service, please contact us at:
          <br />
          +1 (310) PL8-CHAT
        </div>
        <Link
          href={'mailto:info@pl8chat.com'}
          className="text-[#034B48] text-sm font-semibold  leading-[25px]"
        >
          info@pl8chat.com
        </Link>
      </div>
    </div>
  );
}