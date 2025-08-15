'use client'
import Link from 'next/link'

type CancelPurchaseProps = {
  nextStep?: () => void;
}

export default function cancelPurchase({ nextStep }: CancelPurchaseProps) {
  return (
    <div className="w-[373px] h-[179px] bg-white rounded-lg shadow flex-col justify-start items-start inline-flex">
      <div className="self-stretch h-[52px] p-4 flex-col justify-center items-center flex">
        <div className="text-gray-900 text-sm font-semibold leading-tight">Cancel transaction</div>
      </div>
      <div className="self-stretch h-px bg-gray-200"></div>
      <div className="self-stretch h-[126px] p-4 flex-col justify-start items-center gap-4 flex">
        <div className="self-stretch h-10 flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch h-10 flex-col justify-center items-center gap-3 flex">
            <div className="self-stretch h-10 flex-col justify-start items-center gap-2 flex">
              <div className="self-stretch text-gray-900 text-sm font-normal leading-tight">Don’t need premium right now? Downgrade to our free plan instead.</div>
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-3 inline-flex">
          <div className="grow shrink basis-0 h-[38px] px-[17px] py-[9px] bg-white rounded-md shadow border border-gray-300 justify-center items-center flex">
            <Link href={`/`}> 
              <div className="text-gray-700 text-sm font-medium leading-tight">Cancel</div>
            </Link>
          </div>
          <div className="grow shrink basis-0 h-[38px] px-[17px] py-[9px] bg-[#034b48] rounded-md shadow justify-center items-center flex">
            <div className="text-white text-sm font-medium leading-tight" onClick={nextStep}>Downgrade</div>
          </div>
        </div>
      </div>
    </div>
  );
}