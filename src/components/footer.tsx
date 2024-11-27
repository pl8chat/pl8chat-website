interface NavigationItem {
  name: string;
  href: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

interface Navigation {
  company: NavigationItem[];
  social: NavigationItem[];
}

const navigation: Navigation = {
  company: [
    { name: 'About us', href: '/about' },
    { name: 'Contact', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/pl8chat',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/pl8chat',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: 'x.com/pl8chat',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: 'tiktok.com/@pl8chat',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 550 550" {...props}>
          <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
        </svg>
      ),
    },
    {
      name: 'Snapchat',
      href: 'https://www.snapchat.com/add/pl8chat?invite_id=c8bhInyB&locale=en_US&share_id=UrcXbm4OTT-_rMC3rfW3Xw&xp_id=1&sid=b35754d3188e4ae0a42d69480b2cd1b9',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M 12 2 C 6 2 6 8 6 8 L 6 9 C 6 9 5.9775 8.9980469 5.9375 8.9980469 C 5.5975 8.9980469 4 9.0685313 4 10.394531 C 4 11.939531 5.6968438 12 5.9648438 12 L 6 12 C 6 13 4.3476719 14.170406 3.2636719 14.441406 C 2.2536719 14.833406 2.013 15.502766 2 16.009766 C 1.992 16.312766 2.0654687 16.557344 2.1054688 16.652344 C 2.4824687 17.537344 3.6022188 17.994141 4.6992188 17.994141 C 4.7372188 19.433141 5.7757031 20 6.4707031 20 C 7.2647031 20 8.1054688 19.611328 8.1054688 19.611328 C 8.1464688 19.645328 9.425 21 12 21 C 14.575 21 15.854484 19.645328 15.896484 19.611328 C 15.896484 19.611328 16.734297 20 17.529297 20 C 18.224297 20 19.262781 19.433141 19.300781 17.994141 C 20.397781 17.994141 21.517531 17.537344 21.894531 16.652344 C 21.934531 16.557344 22.008 16.312766 22 16.009766 C 21.987 15.502766 21.746328 14.833406 20.736328 14.441406 C 19.652328 14.170406 18 13 18 12 L 18.035156 12 C 18.303156 12 20 11.939531 20 10.394531 C 20 9.0685312 18.4025 8.9980469 18.0625 8.9980469 C 18.0225 8.9980469 18 9 18 9 L 18 8 C 18 8 18 2 12 2 z M 12 4 C 15.653 4 15.985 7.073 16 8 L 16 12 C 16 13.864 17.746984 15.297141 19.208984 15.994141 L 17.351562 15.994141 L 17.300781 17.943359 C 17.300781 17.953359 17.298828 17.962656 17.298828 17.972656 C 17.096828 17.931656 16.864375 17.854875 16.734375 17.796875 L 15.605469 17.275391 L 14.636719 18.058594 L 14.556641 18.125 L 14.494141 18.183594 C 14.408141 18.266594 13.599 19 12 19 C 10.401 19 9.5909063 18.267594 9.5039062 18.183594 L 9.4277344 18.109375 L 9.3613281 18.056641 L 8.3964844 17.292969 L 7.2773438 17.791016 C 7.1393438 17.853016 6.9041719 17.931656 6.7011719 17.972656 C 6.7001719 17.963656 6.6992187 17.953359 6.6992188 17.943359 L 6.6484375 15.996094 L 4.7910156 15.996094 C 6.2530156 15.298094 8 13.864 8 12 L 8 8 C 8 7.332 8.193 4 12 4 z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'youtube.com/pl8chat',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const LogoSVG = () => {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.1494 19.8C40.1494 30.7352 31.1617 39.6 20.0747 39.6L13.9408 39.6V28.6L20.0747 28.6C25.0022 28.6 28.9968 24.6601 28.9968 19.8C28.9968 14.9399 25.0022 11 20.0747 11C15.1472 11 11.1526 14.9399 11.1526 19.8V39.6L0 39.6V19.8C0 8.86476 8.98775 0 20.0747 0C31.1617 0 40.1494 8.86476 40.1494 19.8Z"
        fill="white"
      />
    </svg>
  );
};

export default function Footer() {
  return (
    <footer className="h-[447px] px-8 pt-[82px] flex-col justify-start items-start gap-16 inline-flex bg-gray-900 w-full">
      <div className="h-[220px] relative w-full flex justify-between">
        <div className="w-[524px] h-[220px] left-0 top-0 flex-col justify-start items-start gap-8 inline-flex">
          <div className="w-[40.15px] h-[39.60px] relative">
            <LogoSVG />
          </div>
          <div className="flex flex-col gap-6">
            <div className="font-semibold text-lg text-white">
              <div className="flex justify-between w-screen pr-20">
                <div className="flex flex-col">
                  <div>Every</div>
                  <div>Car</div>
                  <div>Connected</div>
                </div>
                <div className="w-[206px] self-stretch flex-col justify-start items-end gap-4 inline-flex pt-1.5">
                  <div className="self-stretch flex justify-start text-white text-[14px] font-semibold leading-tight tracking-wide">Company</div>
                  <div className="self-stretch h-16 flex-col justify-start items-start gap-4 flex">
                    <ul role="list" className="flex flex-col gap-4">
                      {navigation.company.map((item) => (
                        <li key={item.name}>
                          <a href={item.href} className="text-[14px] leading-6 text-gray-300 hover:text-white">
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                  <span className="sr-only">{item.name}</span>
                  {item.icon && <item.icon aria-hidden="true" className="h-6 w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="w-[206px] self-stretch flex-col justify-start items-end gap-4 inline-flex pt-[]">
          <div className="self-stretch flex justify-start text-white text-[14px] font-semibold leading-tight tracking-wide">Company</div>
          <div className="self-stretch h-16 flex-col justify-start items-start gap-4 flex">
            <ul role="list" className="flex flex-col gap-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-[14px] leading-6 text-gray-300 hover:text-white">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
      <div className="self-stretch h-[81px] flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch h-[81px] flex-col justify-start items-start flex">
          <div className="self-stretch h-px bg-[#29303d]"></div>
          <div className="self-stretch pt-8 justify-between items-start inline-flex">
            <div className="w-[1632px] text-gray-500 text-base font-normal leading-normal">© 2024 PL8CHAT, LLC. All rights reserved<br /></div>
          </div>
        </div>
      </div>
    </footer>
    // <footer aria-labelledby="footer-heading" className="bg-gray-900">
    //   <h2 id="footer-heading" className="sr-only">
    //     Footer
    //   </h2>
    //   <div className="mx-auto px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    //     <div className="flex justify-between xl:gap-8">
    //       <div className="space-y-8">
    //         <img
    //           alt="Company name"
    //           src="/assets/images/PL8CHAT.png"
    //           className="h-12"
    //         />
    //         <div>
    //           <p>Every car</p>
    //           <p>connected</p>
    //         </div>
    //         <div className="flex space-x-6">
    //           {navigation.social.map((item) => (
    //             <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
    //               <span className="sr-only">{item.name}</span>
    //               {item.icon && <item.icon aria-hidden="true" className="h-6 w-6" />}
    //             </a>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="mt-0 lg:pr-10">
    //           <div>
    //             <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
    //             <ul role="list" className="mt-6 space-y-4">
    //               {navigation.company.map((item) => (
    //                 <li key={item.name}>
    //                   <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
    //                     {item.name}
    //                   </a>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //       </div>
    //     </div>
    //     <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
    //       <p className="text-xs leading-5 text-gray-300">&copy; 2024 PL8CHAT, LLC. All rights reserved</p>
    //     </div>
    //   </div>
    // </footer>
  );
}
