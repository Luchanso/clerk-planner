import { Moment } from "moment";
import styled from "styled-components";

export type Props = {
  date: Moment;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

const Header = styled.div``;

export function renderHeader({ date, onPrevMonth, onNextMonth }: Props) {
  return (
    <Header>
      <button onClick={onPrevMonth}>Сюда</button>
      {date.format("MMMM YYYY")}
      <button onClick={onNextMonth}>Туда</button>
    </Header>
  );
}
