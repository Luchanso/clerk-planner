import moment, { Moment } from "moment";
import styled from "styled-components";
import {
  MonthType,
  MONTH_TYPE,
} from "../../create-date-objects/create-date-objects";

export type Props = {
  day: Moment;
  type: MonthType;
  onPickDate: (day: Moment) => void;
};

type DayProps = {
  monthType: MonthType;
  isNow: boolean;
};

const Day = styled.div<DayProps>`
  width: calc(100% / 7);
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ monthType }) =>
    monthType !== MONTH_TYPE.currentMonth ? "silver" : ""};

  border: ${({ isNow }) => (isNow ? `1px solid orange` : "")};
  box-sizing: border-box;

  &:hover {
    cursor: ${({ monthType }) =>
      monthType === MONTH_TYPE.currentMonth ? "pointer" : ""};
    background-color: ${({ monthType }) =>
      monthType === MONTH_TYPE.currentMonth ? "aliceblue" : ""};
  }
`;

export function renderDay({ day, type, onPickDate }: Props) {
  function handleClick() {
    onPickDate(day);
  }
  return (
    <Day
      monthType={type}
      isNow={moment().isSame(day, "day")}
      onClick={handleClick}
    >
      {day.format("D")}
    </Day>
  );
}
