import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { LocaleType } from "@/lib/i18n";
import { useLocale } from "@/provider/LocaleProvider";

const LocaleToggle = () => {
    const { locale, setLocale, dict } = useLocale();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost">{dict.menu.language}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{dict.menu.languageLabel}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                    onValueChange={value => {
                        setLocale(value as LocaleType);
                    }}
                    value={locale}
                >
                    <DropdownMenuRadioItem value="en">{dict.menu.english}</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="kr">{dict.menu.korean}</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="ja">{dict.menu.japanese}</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LocaleToggle;
