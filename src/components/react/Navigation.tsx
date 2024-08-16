import { Button } from "../ui/button";
import {
  NavigationMenuItem,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export const Navigation = () => {
  return (
    <nav className="ml-auto flex items-center">
      <Button variant="link">Work</Button>
      <Button variant="link">Projects</Button>
      <Button variant="link">Blog</Button>
    </nav>
  );
};
