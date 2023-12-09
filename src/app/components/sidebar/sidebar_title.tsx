import logo from "@/assets/logo.jpg";
import Image from "next/image";


export default function SidebarTitle() {
    return (
        <div className="mb-3 flex items-center flex-col justify-center mt-5">
            <div className="rounded-full bg-slate-200 w-28 h-28 mb-5">
                <Image className="rounded-full" src={logo} alt={logo.src} />
            </div>
            <a className="text-lg text-center" href="#">
                Olá <b>Dr</b> Advogado
            </a>
        </div>
    )
}