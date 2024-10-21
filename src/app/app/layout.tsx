import { SideBar, SideBarFooter, SideBarHeader, SideBarHeaderTitle, SideBarMain, SideBarNav, SideBarNavHeader, SideBarNavHeaderTitle, SideBarNavLink, SideBarNavMain } from "@/components/dashboard/sidebar";
import { PropsWithChildren } from "react";

export default function Layout({children}: PropsWithChildren){
    return(
        <div className="grid grid-cols-[16rem_1fr] gap-4">
            <SideBar>
                <SideBarHeader>
                    <SideBarHeaderTitle>
                        Title
                    </SideBarHeaderTitle>

                    <SideBarMain>
                        <SideBarNav>
                                <SideBarNavMain>
                                    <SideBarNavLink href="/app">Tarefas</SideBarNavLink>
                                    <SideBarNavLink href="/app/settings">Configurações</SideBarNavLink>
                                </SideBarNavMain>
                        </SideBarNav>

                        <SideBarNav>
                            <SideBarHeaderTitle>Links extras</SideBarHeaderTitle>
                                <SideBarNavMain>
                                    <SideBarNavLink href="/">Precisa de ajuda?</SideBarNavLink>
                                    <SideBarNavLink href="/">Site</SideBarNavLink>
                                </SideBarNavMain>
                        </SideBarNav>

                    </SideBarMain>

                    <SideBarFooter>
                        <h1>User</h1>
                    </SideBarFooter>
                </SideBarHeader>
            </SideBar>

            <main>
                {children}
            </main>
            
        </div>
    )
}