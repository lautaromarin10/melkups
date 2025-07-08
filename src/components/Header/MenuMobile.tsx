import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { menuLinks } from "@/utils/menuLinks";
import { MdMenu } from "react-icons/md";

const MenuMobile = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"}>
            <MdMenu />
          </Button>
        </SheetTrigger>
        <SheetContent className="border-0!">
          <SheetHeader>
            <SheetTitle>
              <span>Menu</span>
            </SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col p-4 gap-2">
            {menuLinks.map((menu) => (
              <li
                className="text-white w-full duration-300 hover:text-secondary"
                key={menu.to}
              >
                <SheetClose asChild>
                  <a href={menu.to}>{menu.label}</a>
                </SheetClose>
              </li>
            ))}
          </ul>
          <SheetFooter>
            <span className="font-semibold!">MELKUPS</span>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuMobile;
