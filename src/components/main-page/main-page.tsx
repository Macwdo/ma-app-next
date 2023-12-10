"use client";
import Link from "next/link";
import Breadcrumb from "../breadcrumb/breadcrumb";

interface MainPageProps {
  title: string;
  children: React.ReactNode;
  path: string[];
}



const MainPage = (props: MainPageProps) => {
  return (
    <div className="">
      <span className="font-bold text-4xl">{props.title}</span>
      <Breadcrumb/>
      <div className="mt-3 border border-zinc-500 w-full h-64 rounded-lg">
        {window.location.pathname}
      </div>
    </div>
  );
};
export default MainPage;
