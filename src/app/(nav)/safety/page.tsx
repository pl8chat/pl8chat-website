interface SafetySection {
  title: string;
  content?: string;
  isBold?: boolean;
}

const safetyData: SafetySection[] = [
  {
    title: 'Our Commitment to Safety',
    content:
      'We’re a license plate connectivity platform that connects people and vehicles to reduce parking and driving frustrations, enhance accountability, and improve safety both on and off the road. Since our mission is to promote safety within the automotive community, it’s essential that we uphold that same value in how we design, monitor, and maintain safety within our own product',
  },
  {
    title: 'Age Requirement',
    content:
      'Our app is not intended for children. Users must be 17 or older to create an account. To add a license plate, users must be licensed drivers and registered vehicle owners. Because our platform facilitates real-world vehicle interactions, it is not suitable for individuals under 17.',
  },
  {
    title: 'Protecting Minors and Children',
    content:
      'We take safety and privacy seriously. Underage users are strictly prohibited. If an account is found to belong to a minor, it will be removed.',
  },
  {
    title: 'Zero Tolerance for Misconduct',
    content:
      'We enforce a zero-tolerance policy for inappropriate behavior or misconduct. Users can block others discreetly, and we provide direct access to PL8CHAT support within the app and on our website for reporting concerns or unsafe interactions.',
    isBold: true,
  },
];

export default function Safety() {
  return (
    <div className="self-stretch px-4 md:pl-36 pt-6 md:pt-44 pb-7 md:pb-20 inline-flex flex-col justify-start items-start gap-4">
      <div className="self-stretch justify-start text-black text-xl md:text-3xl font-semibold leading-[50px] md:leading-[100px]">
        User Safety
      </div>
      <div className="md:w-[897px] justify-start">
        {safetyData.map((section, idx) => (
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
        <div className="mt-20 text-black text-sm font-semibold leading-[25px]">
          Contact Us
        </div>
        <div className="text-black text-sm font-normal leading-[25px]">
          If you have any questions or concerns about user safety please contact us at:
          <br />
          +1 (310) PL8-CHAT
        </div>
        <a
          href="mailto:info@pl8chat.com"
          className="text-emerald-950 text-sm font-semibold leading-[25px]"
        >
          info@pl8chat.com
        </a>
      </div>
    </div>
  );
}