import { SIDENAV_ITEMS } from "@/constants";
import Link from "next/link";

const Breadcrumb = () => {
    SIDENAV_ITEMS.map((item) => {
        if (item.path === window.location.pathname.split("/")[-1]) {
            console.log(item.title);
        }
    });

    console.log(window.location.pathname)
  return (
    <div className="flex items-center w-full h-12 rounded-lg">
      <div className="flex space-x-4 items-center ml-6 justify-start">
        <span className="hover:font-bold hover:text-zinc-800 hover:transition-all transition ease-in-out hover:text-lg cursor-pointer">
          <Link href="/projects"></Link>
        </span>
        <div>/</div>
        <span className="hover:font-bold hover:text-zinc-800 hover:transition-all transition ease-in-out hover:text-lg cursor-pointer">
          <Link href="/projects">asdas</Link>
        </span>
        <div>/</div>
        <span className="font-bold">
          <Link href="/projects">Adas</Link>
        </span>
      </div>
    </div>
  );
};
export default Breadcrumb;
