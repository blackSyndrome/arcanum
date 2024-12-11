"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { createClient } from "../../utils/supabase/client";
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
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { User, LogOut } from "lucide-react"; 

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
