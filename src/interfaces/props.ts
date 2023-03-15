import type { Session } from "next-auth";
import type { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from "react";

export interface ChildrenOnly {
    children: ReactNode
}

export interface SessionOnly {
    session: Session | null
}

export interface Button {
    children: ReactNode
    onClick: () => void 
}

export interface Input {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: string | number | readonly string[] | undefined
    type?: HTMLInputTypeAttribute,
    placeholder?: string
}