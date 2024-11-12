import FreePlanForm from "@/components/freePlanForm"

export const metadata = {
  hideFooter: true,
};

export default function FreePlan() {
  return (
    <div className='fixed z-40 h-screen w-full bg-white'>
      <FreePlanForm />
    </div>
  )
}