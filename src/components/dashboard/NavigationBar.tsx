import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "../ui/navigation-menu";

const NavigationBar = () => {
   return (
      <div>
         <NavigationMenu>
            <NavigationMenuList>
               <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
               </NavigationMenuItem>
            </NavigationMenuList>
         </NavigationMenu>
      </div>
   );
};

export default NavigationBar;
