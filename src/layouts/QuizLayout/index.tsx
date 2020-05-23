import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function QuizLayout({ children }: Props) {
    return (
        <>
            <h1>Quiz Layout</h1>
            <div>{children}</div>
        </>
    );
}