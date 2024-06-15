import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";
import { SidebarLink as DropdownLink } from "./sidebar-link";
import { LogoutForm } from "../auth/logout-form";

export const NavbarDropdown = () => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="w-5 h-5" />
                <span className="sr-only">Toggle user menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownLink href="/my-account" activeClassName="font-bold">
                <DropdownMenuItem>My Account</DropdownMenuItem>
            </DropdownLink>
            <DropdownMenuSeparator />
            <LogoutForm />
        </DropdownMenuContent>
    </DropdownMenu>
);
