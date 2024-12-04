"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { createClient } from "../../../utils/supabase/client";
import {
  NavigationMenuItem,
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../ui/navigation-menu";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, Search, HelpCircle, User, LogOut } from "lucide-react"; // Import Lucide icons

const NavigationBar = () => {
  const supabase = createClient();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setUser(user);
      }
    };

    fetchUser();
  }, [supabase]);

  const resources = [
    {
      title: "Journals",
      href: "/resources/journals",
      icon: <BookOpen className="mr-2" />,
    },
    {
      title: "Theses",
      href: "/resources/theses",
      icon: <BookOpen className="mr-2" />,
    },
  ];

  const helpOptions = [
    {
      title: "Request",
      href: "/help/request",
      icon: <HelpCircle className="mr-2" />,
    },
    {
      title: "About",
      href: "/help/about",
      icon: <HelpCircle className="mr-2" />,
    },
  ];

  return (
    <div className="bg-zinc-900 w-full flex items-center h-full justify-between px-12 py-4">
      <div className="flex items-center gap-4">
        <Image
          src="/arcanum-logo.svg"
          alt="Arcanum logo"
          width={40}
          height={40}
          style={{ objectFit: "contain" }}
        />
        <h1 className="text-white font-bold text-3xl">arcanum</h1>
      </div>

      <div className="flex items-center gap-8">
        {/* Navigation links */}
        <div className="flex text-white">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className="bg-transparent flex items-center">
                    <Home className="mr-2" /> {/* Icon for Home */}
                    <h1 className="text-lg">Home</h1>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Resources dropdown */}
        <div className="flex text-white">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-lg flex items-center">
                  <BookOpen className="mr-2" /> {/* Icon for Resources */}
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-64 p-4 bg-white rounded-md">
                  <ul className="flex flex-col gap-2">
                    {resources.map((resource) => (
                      <li key={resource.title}>
                        <NavigationMenuLink
                          className="text-lg flex items-center"
                          href={resource.href}
                        >
                          {resource.icon} {/* Icon */}
                          {resource.title}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search link */}
        <div className="flex text-white">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink className="bg-transparent flex items-center">
                    <Search className="mr-2" /> {/* Icon for Search */}
                    <h1 className="text-lg">Search</h1>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Help dropdown */}
        <div className="flex text-white">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-lg flex items-center">
                  <HelpCircle className="mr-2" /> {/* Icon for Help */}
                  Help
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-64 p-4 bg-white rounded-md">
                  <ul className="flex flex-col gap-2">
                    {helpOptions.map((option) => (
                      <li key={option.title}>
                        <NavigationMenuLink
                          className="text-lg flex items-center"
                          href={option.href}
                        >
                          {option.icon} {/* Icon */}
                          {option.title}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Avatar with dropdown menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              {user?.user_metadata?.avatar_url ? (
                <AvatarImage src={user.user_metadata.avatar_url} />
              ) : (
                <AvatarFallback>BS</AvatarFallback>
              )}
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 p-2 bg-white rounded-md">
            <DropdownMenuItem>
              <Link href="/profile" className=" text-black flex items-center">
                <User className="mr-2" /> {/* Icon for Profile */}
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                variant={"ghost"}
                onClick={async () => {
                  await supabase.auth.signOut();
                  // Add any additional logout handling here
                }}
                className=" w-full text-black flex justify-start  bg-transparent hover:bg-transparent"
              >
                <LogOut className="mr-2" /> {/* Icon for Logout */}
                Logout
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavigationBar;
