import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

export type SidebarGenericProps<T = unknown > = {
    children: React.ReactNode
    className?: string
} & T




export function SideBar({ className, children}: SidebarGenericProps){
    return(
        <aside className={cn(['', className])}>
            {children}
        </aside>
    )
}


export function SideBarHeader({ className, children}: SidebarGenericProps){
    return(
        <header className={cn(['', className])}>
            {children}
        </header>
    )
}

export function SideBarHeaderTitle({ className, children}: SidebarGenericProps){
    return(
        <h2 className={cn(['', className])}>
            {children}
        </h2>
    )
}


export function SideBarMain({ className, children}: SidebarGenericProps){
    return(
        <main className={cn(['', className])}>
            {children}
        </main>
    )
}

export function SideBarNav({ className, children}: SidebarGenericProps){
    return(
        <nav className={cn(['', className])}>
            {children}
        </nav>
    )
}

export function SideBarNavHeader({ className, children}: SidebarGenericProps){
    return(
        <header className={cn(['', className])}>
            {children}
        </header>
    )
}

export function SideBarNavHeaderTitle({ className, children}: SidebarGenericProps){
    return(
        <h4 className={cn(['', className])}>
            {children}
        </h4>
    )
}

export function SideBarNavMain({ className, children}: SidebarGenericProps){
    return(
        <main className={cn(['', className])}>
            {children}
        </main>
    )
}


// tipagem do navlink
type SideBarNavLinkProps = {
    href: string
}


export function SideBarNavLink({ className, children, href}: SidebarGenericProps<SideBarNavLinkProps>){
    return(
        <Link href={href} className={cn(['', className])}>
            {children}
        </Link>
    )
}


export function SideBarFooter({ className, children}: SidebarGenericProps){
    return(
        <footer className={cn(['', className])}>
            {children}
        </footer>
    )
}