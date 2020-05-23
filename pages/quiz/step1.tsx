import Link from "next/link";

import QuizLayout from "../../src/layouts/QuizLayout";

function QuizStep1() {
    return <p>Quiz index <Link href="/quiz"><a>Index</a></Link></p>;
}

QuizStep1.Layout = QuizLayout;

export default QuizStep1;