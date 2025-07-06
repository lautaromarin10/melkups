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
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <ul className="flex flex-col p-4 gap-4">
            {menuLinks.map((menu) => (
              <li className="text-white w-full duration-300 hover:text-secondary">
                <a href={menu.to}>{menu.label}</a>
              </li>
            ))}
          </ul>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="secondary" className="text-white!">
                Cerrar
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuMobile;
