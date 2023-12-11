import Link from "next/link";

export interface BreadCrumbItem {
  path: string;
  title: string
}

export interface BreadcrumbProps {
  items: BreadCrumbItem[];
}

const Breadcrumb = (props: BreadcrumbProps) => {

  const currentPathCss = "font-bold"
  const nestedPathsCss = "hover:font-bold hover:text-zinc-800 hover:transition-all transition ease-in-out hover:text-lg cursor-pointer"

  return (
    <div className="flex items-center w-full h-12 rounded-lg">
      <div className="flex space-x-4 items-center ml-6 justify-start">
        {
          props.items.map((item) => (
            <span className={item === props.items.at(-1) ? currentPathCss : nestedPathsCss}>
              <Link href={`${item.path}`}>
                {item.title}
              </Link>
              <span className="m-2 mr-0">
                {item !== props.items.at(-1) ? "/" : ""}
              </span>
            </span>

          )
          )
        }
      </div>
    </div>
  );
};
export default Breadcrumb;
