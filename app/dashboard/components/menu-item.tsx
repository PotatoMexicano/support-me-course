"use client";

import { DrawerContext } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

type Pros = {
    children: React.ReactNode,
    href: string,
}

export default function MenuItem({ children, href }: Pros) {
    const { onClose } = useContext(DrawerContext);
    const pathname = usePathname();
    const isActive = pathname === href;

    return <Link 
    className={cn("p-2 block hover:bg-white dark:hover:bg-zinc-700 rounded-md text-muted-foreground hover:text-foreground", 
        isActive && "bg-primary hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground text-primary-foreground"
    )}
    href={href}
    onClick={onClose}
    >
        {children}
    </Link>
}