import type { Session } from "next-auth";
import type { ReactNode } from "react";

export interface ChildrenOnly {
    children: ReactNode
}

export interface SessionOnly {
    session: Session | null
}