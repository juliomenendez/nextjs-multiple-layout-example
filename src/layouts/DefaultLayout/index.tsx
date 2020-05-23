import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function DefaultLayout({ children }: Props) {
    return (
        <>
            <h1>Default Layout</h1>
            <div>{children}</div>
        </>
    );
}