"use client";

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
    { title: "Journals", href: "/resources/journals" },
    { title: "Theses", href: "/resources/theses" },
  ];

  const helpOptions = [
    { title: "Request", href: "/help/request" },
    { title: "About", href: "/help/about" },
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
        <div className="flex text-white">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className="bg-transparent">
                    <h1 className="text-lg">Home</h1>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex text-white">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-lg">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-64 p-4 bg-white rounded-md">
                  <ul className="flex flex-col gap-2">
                    {resources.map((resource) => (
                      <li key={resource.title}>
                        <NavigationMenuLink
                          className="text-lg"
                          href={resource.href}
                        >
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

        <div className="flex text-white">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink className="bg-transparent">
                    <h1 className="text-lg">Search</h1>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex text-white">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-lg">
                  Help
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-64 p-4 bg-white rounded-md">
                  <ul className="flex flex-col gap-2">
                    {helpOptions.map((option) => (
                      <li key={option.title}>
                        <NavigationMenuLink
                          className="text-lg"
                          href={option.href}
                        >
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

        <Avatar>
          {user?.user_metadata?.avatar_url ? (
            <AvatarImage src={user.user_metadata.avatar_url} />
          ) : (
            <AvatarFallback>BS</AvatarFallback>
          )}
        </Avatar>
      </div>
    </div>
  );
};

export default NavigationBar;
