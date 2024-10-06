
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className='w-[14%] md:w-[8%] lg:w-[16%] p-4 overflow-y-auto '>
        <Link href='/' className="flex gap-2 items-center justify-center lg:justify-start">
          <Image src='/logo.png' alt="logo" width={32} height={32} />
          <span className='hidden lg:block font-bold'>School</span>
        </Link>
        <Menu />
      </div>
      <div className='w-[86%] md:w-[92%] lg:w-[84%] bg-[#f7f8fa] overflow-y-scroll flex flex-col'>
        <Navbar/>
        {children}

      </div>

    </div>

  );
}