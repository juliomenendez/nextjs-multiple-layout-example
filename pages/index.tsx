import styled from 'styled-components';
import Link from 'next/link';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

function Home() {
  return (
    <>
      <Title>My page</Title>
      <p><Link href="/quiz"><a>Quiz</a></Link></p>
    </>
  );
}

export default Home;