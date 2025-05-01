import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";

interface NavbarItems {
  name: string;
  href: string;
}

interface Props {
  items: NavbarItems[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="p-0 transistion-none">
        <SheetHeader className="p-4 border-b">
          <div>
            <SheetTitle>
              Menu
            </SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link key={item.name} href={item.href} className="hover:bg-black h-10 w-full p-4 text-right hover:text-white flex items-center text-base font-medium">{item.name}</Link>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default NavbarSidebar
