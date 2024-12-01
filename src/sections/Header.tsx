"use client";

import LogoIcon from "@/assets/logo.svg";
import React from "react";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/Button";
import Rect from "@/assets/Rectangle.svg";
import CircleP from "@/assets/circle-plus.svg";


export const Header = () => {
  return (
    <header className="h-auto z-20 sticky inset-0 backdrop-blur-md py-3 bg-white bg-opacity-90 ">
      <div className="container mx-auto px-2 py-2 flex items-center justify-between">
        
        <div className="flex items-center gap-4 md:gap-8">
          <button className="md:hidden" aria-label="Open menu">
            <MenuIcon className="h-6 w-6" alt="Menu Icon" />
          </button>
          <div className="absolute inset-0 backdrop-blur-md -z-10 hidden md:block rounded-xl"></div>
        
          <a href="#" className="flex items-center" aria-label="Home">
            <LogoIcon className="h-8 w-auto" alt="Logo" />
          </a>

          
          <Button
            bgColor="#000000"
            textColor="#FFFFFF"
          >
            Post a Task
          </Button>

         
          <nav className="hidden md:flex gap-10 text-sm">
            <a href="#" className="text-black-900 font-medium">
              Categories
            </a>
            <a href="#" className="text-black-900 font-medium">
              Browse Tasks
            </a>
            <a href="#" className="text-black-900 font-medium">
              How it Works
            </a>
          </nav>
        </div>

       
        <div className="flex items-center gap-10">
          <a
            href="#"
            className="text-gray-700 hover:text-black transition font-medium"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black transition font-medium"
          >
            Log In
          </a>
          <Button
            bgColor="#FFFFFF"
            textColor="#000000"
            onClick={() => alert("Become a Tasker")}
          >
            Become a Tasker
          </Button>
        </div>

        <div className="relative hidden md:hidden h-16 w-16 sm:flex items-center justify-center">
          <Rect className="absolute h-full w-full" alt="Rectangle Icon" />
          <CircleP className="absolute h-8 w-8" alt="Circle Plus Icon" />
        </div>
      </div>
    </header>
  );
};
