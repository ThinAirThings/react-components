/// <reference types="react" />
declare module "Stacks/HStack" {
    import { CSSProperties, ReactNode } from "react";
    export const HStack: ({ hAlign, vAlign, children, className, style }: {
        hAlign?: "left" | "center" | "right" | "distribute" | undefined;
        vAlign?: "center" | "distribute" | "top" | "bottom" | undefined;
        children: ReactNode;
        className?: string | undefined;
        style?: CSSProperties | undefined;
    }) => JSX.Element;
}
declare module "LoadingSpinner/LoadingSpinner" {
    import { CSSProperties } from 'react';
    export const LoadingSpinner: ({ className, style }: {
        className?: string | undefined;
        style?: CSSProperties | undefined;
    }) => JSX.Element;
}
declare module "Button/Button" {
    import { Icon } from 'react-feather';
    import { CSSProperties } from 'react';
    export const Button: ({ Icon, onClick, isLoading, secondary, children, className, style }: {
        Icon?: Icon | undefined;
        onClick?: (() => void) | undefined;
        isLoading?: boolean | undefined;
        secondary?: boolean | undefined;
        children: string;
        className?: string | undefined;
        style?: CSSProperties | undefined;
    }) => JSX.Element;
}
declare module "Stacks/VStack" {
    import { CSSProperties, ReactNode } from "react";
    export const VStack: ({ hAlign, vAlign, children, className, style }: {
        hAlign: 'left' | 'center' | 'right' | 'distribute';
        vAlign: 'top' | 'center' | 'bottom' | 'distribute';
        children: ReactNode;
        className?: string | undefined;
        style?: CSSProperties | undefined;
    }) => JSX.Element;
}
declare module "index" {
    export * from "Button/Button";
    export * from "LoadingSpinner/LoadingSpinner";
    export * from "Stacks/HStack";
    export * from "Stacks/VStack";
}
declare module "TextInput/TextInput" {
    import { CSSProperties } from 'react';
    export const TextInput: ({ label, placeholder, onChange, value, className, style }: {
        label: string;
        value?: string | undefined;
        placeholder?: string | undefined;
        onChange?: ((value: string) => void) | undefined;
        className?: string | undefined;
        style?: CSSProperties | undefined;
    }) => JSX.Element;
}
