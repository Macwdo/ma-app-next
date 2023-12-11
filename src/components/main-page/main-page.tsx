"use client";
import Breadcrumb, { BreadCrumbItem } from "@/components/breadcrumb/breadcrumb";
import BreadcrumbIdentifier from "@/utils/breadcrumbIdentifier";
import { useEffect, useState } from "react";

interface MainPageProps {
  title: string;
  children: React.ReactNode;
}

const MainPage = (props: MainPageProps) => {

  const getBreadcrumbData = () => {
    const data = BreadcrumbIdentifier(window.location.pathname)
    setBreadcrumbData(data);
  }

  const initialValue: BreadCrumbItem[] = [] 
  const [breadCrumbData , setBreadcrumbData] = useState(initialValue);

  useEffect(() => {
    getBreadcrumbData()
  }, [])

  return (
    <div className="m-1">
      <span className="font-bold text-4xl">{props.title}</span>
      <Breadcrumb items={breadCrumbData}/>
        {props.children}
    </div>
  );
};
export default MainPage;
