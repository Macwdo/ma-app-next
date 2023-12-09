import SidebarList from "@/app/components/sidebar/sidebar_list";
import SidebarTitle from "@/app/components/sidebar/sidebar_title";



export default function Sidebar() {
    return (
        <div className="w-52 top-0 bottom-0 fixed bg-gray-200 rounded-lg">
            <SidebarTitle/>
            <SidebarList contents={["Projetos", "Registros"]}/>
        </div>
    )
}