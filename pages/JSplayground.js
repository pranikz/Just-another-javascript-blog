export default function Home() {
  return (
    <div className="h-full ">
      <h1 className="text-2xl md:text-7xl flex justify-center ">Welcome to JavaScript playground</h1>
      <div className="hidden md:inline-block  border-2 border-black shadow-offset-black-big my-10 aspect-w-16 aspect-h-9 w-full">
        <iframe
          src="https://stackblitz.com/edit/js-ydpuax?ctl=1&embed=1&file=index.js&theme=dark"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
      </div>
      <div className="md:hidden mt-10 flex justify-center">Open this in your desktop browser</div>
    </div>
  );
}
