import { Container, Row, Col } from "react-bootstrap";

import AccountDisplay from "./components/AccountDisplay";

function App() {
  const githubURL = "https://github.com/ghuong/mutex.js";
  const githubMessage = (
    <>
      {`
        See my Mutex implementation at 
      `}
      <a href={githubURL}>github.com/ghuong/mutex.js</a>
    </>
  );

  const mutexExplanation = (
    <>
      <p>
        Mutex (mutual exclusion) locks prevent race conditions among concurrent
        (asynchronous) tasks racing to read/write to the same shared resource,
        e.g. a bank balance.
      </p>
      <p>
        Here, the four concurrent tasks are forced to wait in line for the
        mutex, and run sequentially, resulting in the correct ending balance of $400.
      </p>
      {githubMessage}
    </>
  );
  const noMutexExplanation = `
    The four concurrent (asynchronous) tasks racing to read/write to the same shared resource,
    i.e. the bank balance, are reading stale values, and overwriting one another's updates,
    resulting in a possible bank balance below the expected $400.
  `;

  const mutexAccountName = (
    <>
      {"🔐 "}
      <a href={githubURL}>Mutex</a>
      {" Secured Account"}
    </>
  );

  return (
    <Container fluid>
      <Row xs={1} sm={2}>
        <Col>
          <AccountDisplay
            accountName={mutexAccountName}
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
