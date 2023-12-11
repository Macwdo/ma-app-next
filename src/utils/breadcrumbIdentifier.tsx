import { SIDENAV_ITEMS } from "@/constants";

const BreadcrumbIdentifier = (locationPath: string): BreadcrumbItem[] => {

    const splitedPath = locationPath.split("/")
    const breadCrumbItems = []
    const slashSplitedPath = splitedPath.map((item) => "/" + item);

    const pathItem = SIDENAV_ITEMS.find(item => item.path === "/" + splitedPath.at(-1))

    if (pathItem) {
        if (splitedPath.at(1) === "") {
            breadCrumbItems.push(pathItem)
        } else {
            for (var item of SIDENAV_ITEMS) {
                for (var path of slashSplitedPath) {
                    if (item.path === path) {
                        breadCrumbItems.push(item)
                    }
                }
            }

        }
    }
    // Warning: work for 2 depth only
    else {
        let pathItemIndex = -2;
        const pathItemNested = SIDENAV_ITEMS.find(item => item.path == "/" + splitedPath.at(pathItemIndex))
        if (pathItemNested) {
            const pathNestedItem = pathItemNested.subMenuItems!.find(item => item.path === `/${splitedPath.at(-2)}/${splitedPath.at(-1)}`)
            if (pathNestedItem) {
                for (var item of SIDENAV_ITEMS) {
                    for (var path of slashSplitedPath) {
                        if (item.path === path) {
                            breadCrumbItems.push(item)
                        }
                    }
                }
            }
            breadCrumbItems.push(pathNestedItem)
        }
    }
    return breadCrumbItems.map((item) => {
        return { path: item!.path, title: item!.title }
    })
}

interface BreadcrumbItem {
    path: string;
    title: string;
}

export default BreadcrumbIdentifier;