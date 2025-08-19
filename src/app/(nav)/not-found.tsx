export default function NotFound() {
  return (
    <div className="pl-36 pt-44 inline-flex flex-col gap-4">
      <div className="text-black text-4xl font-semibold leading-[60px]">Oops!</div>
      <div className="w-[897px] md:h-[350px] 2xl:h-[681px]">
        <span className="text-black text-lg">We can’t find the page you’re looking for.<br /></span>
        <span className="text-black text-lg font-semibold">Error code: 404<br /></span>
      </div>
    </div>
  );
}