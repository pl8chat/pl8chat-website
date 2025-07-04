import Link from 'next/link'

interface DeleteSection {
  title: string;
  content?: string;
  isBold?: boolean;
}

const deleteAccountData: DeleteSection[] = [
  {
    title: 'How to delete your account on PL8CHAT',
    content: 'You can delete your account directly within the app.',
  },
  {
    title: 'Steps to delete your account',
    content:
      '1-Open the PL8CHAT app\n2-Go to Settings\n3-At the very bottom select DELETE ACCOUNT\n\nOnce you confirm deletion, your account and all associated data will be permanently removed.',
  },
  {
    title: 'Need help?',
    content:
      'If you need any assistance or wish to delete your account directly through us, you can contact us anytime at',
  },
];

export default function DeleteAccount() {
  return (
    <div className="self-stretch px-4 md:pl-36 pt-6 md:pt-44 pb-7 md:pb-20 inline-flex flex-col justify-start items-start gap-4">
      <div className="self-stretch justify-start text-black text-xl md:text-3xl font-semibold leading-[50px] md:leading-[100px]">
        Delete Your Account
      </div>
      <div className="flex flex-col gap-3.5 justify-start md:w-[897px]">
        {deleteAccountData.map((section, idx) => (
          <div key={idx} className="mb-4">
            <div
              className={`text-black text-sm ${section.isBold ? 'font-bold' : 'font-semibold'
                } leading-[25px] mb-1`}
            >
              {section.title}
            </div>
            {section.content && (
              <div className="text-black text-sm font-normal leading-[25px] whitespace-pre-line">
                {section.content}
              </div>
            )}
          </div>
        ))}
        <Link
          href="mailto:help@pl8chat.com"
          className="text-emerald-950 text-sm font-semibold leading-[25px]"
        >
          help@pl8chat.com
        </Link>
      </div>
    </div>
  );
}