import tw, { styled } from 'twin.macro';

function CalendarHeader() {
  return <CalendarHeaderLayout className="h-40"></CalendarHeaderLayout>;
}

const CalendarHeaderLayout = styled.header([tw`h-16`]);

export default CalendarHeader;
