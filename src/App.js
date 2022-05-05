import { Container, Row, Col } from "react-bootstrap";

import AccountDisplay from "./components/AccountDisplay";

function App() {
  const mutexExplanation = (
    <>
      {`
        Mutex (mutual exclusion) locks prevent race conditions among concurrent (asynchronous) tasks
        racing to read/write to the same shared resource, e.g. a bank balance.
      `}
      <br />
      {`
        See my Mutex implementation at 
      `}
      <a href="https://github.com/ghuong/mutex.js">github.com/ghuong/mutex.js</a>
    </>
  );
  const noMutexExplanation = `
    The four concurrent (asynchronous) tasks racing to read/write to the same shared resource,
    i.e. the bank balance, are reading stale values, and overwriting eachother's updates.
  `;

  return (
    <Container fluid>
      <Row>
        <Col>
          <AccountDisplay
            accountName="🔐 Mutex-Secured Account"
            startingBalance={0}
            explanationMessage={mutexExplanation}
            useMutex={true}
          />
        </Col>
        <Col>
          <AccountDisplay
            accountName="👎 No Mutex Account"
            startingBalance={0}
            explanationMessage={noMutexExplanation}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
