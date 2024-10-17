"use client";

import LogoutButton from "@/components/authentication/LogoutButton";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuIndicator,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Dashboard = () => {
   return (
      <div>
         <NavigationMenu>
            <NavigationMenuList>
               <NavigationMenuItem>
                  <NavigationMenuLink href="/dashboard">
                     Dashboard
                  </NavigationMenuLink>
               </NavigationMenuItem>
            </NavigationMenuList>
         </NavigationMenu>
      </div>
   );
};

export default Dashboard;