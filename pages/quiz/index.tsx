import Link from 'next/link';

import QuizLayout from "../../src/layouts/QuizLayout";

function QuizIndex() {
    return <p>Quiz index <Link href="/quiz/step1"><a>Step 1</a></Link></p>;
}

QuizIndex.Layout = QuizLayout;

export default QuizIndex;