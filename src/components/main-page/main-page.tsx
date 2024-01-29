"use client";
import Breadcrumb, { BreadCrumbItem } from "@/components/breadcrumb/breadcrumb";
import BreadcrumbIdentifier from "@/utils/breadcrumbIdentifier";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  const [breadCrumbData, setBreadcrumbData] = useState(initialValue);

  useEffect(() => {
    getBreadcrumbData()
  }, [])

  return (
    <div className="m-1">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-semibold text-3xl">{props.title}</span>
        </div>
        <div>
          <Breadcrumb items={breadCrumbData} />
        </div>
      </div>
      {props.children}
    </div>
  );
};
export default MainPage;
