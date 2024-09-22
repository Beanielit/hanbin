"use client";

import Link from "next/link";

import LocaleToggle from "@/components/customUi/LocaleToggle";
import ModeToggle from "@/components/customUi/ModeToggle";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { useLocale } from "@/provider/LocaleProvider";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = props => {
    const {} = props;
    const { dict } = useLocale();
    return (
        <header className="sticky-header top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <div className="w-full flex justify-between">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="#" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {dict.menu.profile}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="#" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {dict.menu.photo}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="#" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {dict.menu.contact}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex justify-between">
                        <ModeToggle />
                        <LocaleToggle />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
