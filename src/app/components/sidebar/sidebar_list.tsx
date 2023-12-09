

interface SidebarListProps {
    contents: string[]
}

export default function SidebarList(props: SidebarListProps) {
    return (
        <ul className="flex mt-8 gap-2 flex-col m-1 justify-center items-start">
            {
                props.contents.map((content) => (
                    <li className="rounded p-2 w-full cursor-pointer text-lg hover:bg-gray-300">
                        <p>
                            {content}
                        </p>
                    </li>
                ))
            }
        </ul>
    )

}