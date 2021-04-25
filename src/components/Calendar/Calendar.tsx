import { Moment } from "moment";
import styled from "styled-components";
import {
  createDateObjects,
  MonthType,
} from "../../create-date-objects/create-date-objects";
import { useCalendar } from "../../hooks/useCalendar";
import { renderDay as renderDefaultDay } from "./renderDay";
import { renderHeader as renderDefaultHeader } from "./renderHeader";


type RenderHeaderProps = {
  date: Moment;
  onPrevMonth: () => void;
  onNextMonth: () => void;
};

type RenderDayProps = {
  day: Moment;
  type: MonthType;
  onPickDate: () => void;
};

type Props = {
  renderHeader?: (settings: RenderHeaderProps) => JSX.Element;
  renderDay?: (settings: RenderDayProps) => JSX.Element;
  weekOffset?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

const Container = styled.div`
  width: 800px;
  height: 400px;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export function Calendar({
  renderHeader = renderDefaultHeader,
  renderDay = renderDefaultDay,
  weekOffset = 1,
}: Props) {
  const { nextMonth, prevMonth, date } = useCalendar();

  return (
    <Container>
      {renderHeader({
        date,
        onNextMonth: nextMonth,
        onPrevMonth: prevMonth,
      })}
      <Grid>
        {createDateObjects(date, weekOffset).map((day) =>
          renderDay({ ...day, onPickDate: () => {} })
        )}
      </Grid>
    </Container>
  );
}
