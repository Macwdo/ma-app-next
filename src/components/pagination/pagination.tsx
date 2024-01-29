'use client';
import { useState } from "react";


interface PaginationProps {
    pages: number;
}

const Pagination = (props: PaginationProps) => {

    const [pageNumber, setPageNumber] = useState(1)

    const handlePageNumber = (isNextPageNumberAction: boolean): void => {
        if (isNextPageNumberAction) {
            if (pageNumber < props.pages) {
                setPageNumber(pageNumber + 1)
            }
        } else {
            if (pageNumber > 1) {
                setPageNumber(pageNumber - 1)
            }
        }
    }

    return (
        <div className="flex items-center justify-center space-x-12">
            <div className="">
                Paginas {props.pages}
            </div>

            <div className="flex items-center justify-center space-x-2">
                <div onClick={() => handlePageNumber(false)} className="hover:bg-gray-200 active:bg-gray-300 active:transition-all w-9 h-9 flex cursor-pointer items-center bg-secondary justify-center rounded-full ">
                    {"<"}
                </div>
                <div className="hover:bg-gray-200 active:bg-gray-300 active:transition-all w-9 h-9 flex cursor-pointer items-center bg-secondary justify-center rounded-full ">
                    {pageNumber}
                </div>
                <div onClick={() => handlePageNumber(true)} className="hover:bg-gray-200 active:bg-gray-300 active:transition-all w-9 h-9 flex cursor-pointer items-center bg-secondary justify-center rounded-full ">
                    {">"}
                </div>

            </div>
        </div>
    )
}

export default Pagination;
