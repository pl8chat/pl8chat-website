'use client'
import Link from 'next/link'

interface NavigationItem {
  name: string;
  href: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

interface Navigation {
  products: NavigationItem[];
  company: NavigationItem[];
  legal: NavigationItem[];
  social: NavigationItem[];
}

const navigation: Navigation = {
  products: [
    { name: 'For individuals', href: '/individuals' },
    { name: 'PL8CHAT for business', href: '#' },
  ],
  company: [
    { name: 'FAQ', href: '#' },
    { name: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { name: 'Terms of Services', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'User Safety', href: '/safety' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
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
      href: '#',
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
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2.60156C6.48 2.60156 2 7.08156 2 12.6016C2 18.1216 6.48 22.6016 12 22.6016C17.51 22.6016 22 18.1216 22 12.6016C22 7.08156 17.51 2.60156 12 2.60156ZM18.605 7.21156C19.8357 8.71087 20.5167 10.5859 20.535 12.5256C20.254 12.4716 17.434 11.8966 14.592 12.2546C14.527 12.1136 14.472 11.9616 14.408 11.8096C14.231 11.3926 14.043 10.9805 13.844 10.5736C16.989 9.29356 18.421 7.44956 18.605 7.21156ZM12 4.07656C14.17 4.07656 16.154 4.88956 17.662 6.22456C17.51 6.44056 16.219 8.16556 13.182 9.30456C11.783 6.73456 10.232 4.62956 9.993 4.30456C10.6509 4.15078 11.3244 4.07426 12 4.07656ZM8.367 4.87956C9.51144 6.46587 10.5687 8.11331 11.534 9.81456C7.542 10.8776 4.017 10.8546 3.638 10.8546C3.91283 9.56169 4.48261 8.34978 5.3029 7.31335C6.12319 6.27693 7.17182 5.44401 8.367 4.87956ZM3.453 12.6116V12.3516C3.823 12.3616 7.965 12.4166 12.228 11.1366C12.478 11.6136 12.705 12.1016 12.922 12.5896C12.813 12.6226 12.694 12.6546 12.586 12.6876C8.182 14.1076 5.839 17.9906 5.644 18.3166C4.23384 16.751 3.45264 14.7186 3.453 12.6116ZM12 21.1486C10.1014 21.1518 8.25667 20.518 6.761 19.3486C6.913 19.0336 8.649 15.6926 13.464 14.0116C13.486 14.0016 13.497 14.0016 13.518 13.9896C14.3303 16.085 14.9407 18.2531 15.341 20.4646C14.2858 20.9186 13.1487 21.1514 12 21.1486ZM16.761 19.6836C16.675 19.1636 16.219 16.6686 15.102 13.5996C17.781 13.1766 20.124 13.8706 20.416 13.9686C20.2336 15.1217 19.8148 16.2246 19.1858 17.2081C18.5568 18.1916 17.7313 19.0344 16.761 19.6836Z" fill="#6B7280" />
        </svg>
      ),
    },
  ],
}

const FooterLogo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M40.1494 19.8C40.1494 30.7352 31.1617 39.6 20.0747 39.6L13.9408 39.6L13.9408 28.6L20.0747 28.6C25.0022 28.6 28.9968 24.6601 28.9968 19.8C28.9968 14.9399 25.0022 11 20.0747 11C15.1472 11 11.1526 14.9399 11.1526 19.8V39.6L0 39.6V19.8C0 8.86476 8.98775 0 20.0747 0C31.1617 0 40.1494 8.86476 40.1494 19.8Z" fill="#1F2937" />
    </svg>
  )
}

export default function FooterFinal() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-[#F7F7F7]">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto px-8 pb-8 pt-16 sm:pt-24 lg:pt-[82px]">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className='flex flex-col gap-8'>
            <div className='relative'>
              <FooterLogo />
            </div>
            <div className="font-normal text-lg text-[#1F2937]">
              <div>Every</div>
              <div>Car</div>
              <div>Connected®</div>
            </div>
            <div className="flex space-x-6 md:order-2">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} className="text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  {item.icon && item.icon({ className: "h-6 w-6", "aria-hidden": "true" })}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:col-span-2 xl:mt-0 md:pb-10 md:-translate-x-[6.5rem]">
            <div>
              <h3 className="text-base font-semibold leading-6 text-[#1F2937] -mt-1.5">Products</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.products.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-black">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h3 className="text-base font-semibold leading-6 text-[#1F2937] -mt-1.5">Company</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-black">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold leading-6 text-[#1F2937] -mt-1.5">Legal</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-black">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 pb-10">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold leading-6 text-[#1F2937] -mt-1.5">Products</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-black hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-semibold leading-6 text-[#1F2937] -mt-1.5">Products</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-black hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold leading-6 text-[#1F2937] -mt-1.5">Products</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-black hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div> */}
        </div>
        <div className="md:mt-8 border-t border-white/10 md:pt-8 md:flex md:items-center md:justify-between">
          <div className="self-stretch inline-flex flex-col justify-start items-start gap-6 w-full">
            <div className="self-stretch flex flex-col justify-end items-start">
              <div className="self-stretch h-px opacity-30 bg-gray-800" />
              <div className="self-stretch h-14 pt-8 inline-flex justify-between items-start">
                <div className="flex-1 justify-start text-gray-800 text-xs md:text-base font-normal leading-normal">© 2025 PL8CHAT, LLC. All rights reserved<br /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
