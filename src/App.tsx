import styled from "styled-components";
import { Calendar } from "./components/Calendar/Calendar";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 120px;
`;

function App() {
  return (
    <Container>
      <Calendar />
    </Container>
  );
}

export default App;
