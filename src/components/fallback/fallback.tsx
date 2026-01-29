export default function Fallback() {
  return (
    <div className="w-full flex items-center justify-center p-8 h-40 md:h-80 xl:h-100">
      <div className="loading loading-spinner loading-xl text-primary" />
    </div>
  );
}
