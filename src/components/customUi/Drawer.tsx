import Link from "next/link";
import { FaInstagram, FaGoogle } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { DrawerContent } from "@/components/ui/drawer";
import { useLocale } from "@/provider/LocaleProvider";

import {
    Drawer,
    DrawerClose,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "../ui/drawer";

const CustomDrawer = () => {
    const { dict } = useLocale();
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="ghost">{dict.menu.contact}</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="flex flex-col mx-auto w-full max-w-sm gap-8">
                    <DrawerHeader>
                        <DrawerTitle>{dict.menu.contact}</DrawerTitle>
                        <DrawerDescription>{dict.description.contact}</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center gap-3">
                                <Link href="https://www.instagram.com/beanie_lit/" target="_blank">
                                    <FaInstagram className="h-[2.5rem] w-[2.5rem] rotate-0 scale-100 transition-all" />
                                </Link>
                                <Link href="mailto:hanbinj430@gmail.com">
                                    <FaGoogle className="h-[2.1rem] w-[2.1rem] rotate-0 scale-100 transition-all" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default CustomDrawer;
