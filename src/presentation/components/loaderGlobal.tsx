export function LoaderGlobal() {
  return (
    <div className="fixed w-full h-screen top-0 left-0 z-50 flex flex-col items-center justify-center bg-zinc-900 gap-3">
      <img src="/loading.svg" alt="loading" className="w-16" />
      <h1 className="text-xl">Loading...</h1>
    </div>
  );
}
