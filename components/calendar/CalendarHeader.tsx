import tw, { styled } from 'twin.macro';
import Image from 'next/image';

type Props = {
  year: number;
  month: number;
};

function CalendarHeader({ year, month }: Props) {
  return (
    <CalendarHeaderLayout>
      <LeftBox>
        <MonthBox>
          {`${year}Y ${month}M`}
          <Image src="/down.svg" alt="me" width="16" height="16" />
        </MonthBox>
      </LeftBox>
      <RightBox></RightBox>
    </CalendarHeaderLayout>
  );
}

const CalendarHeaderLayout = styled.header(tw`h-16 py-4 px-4 flex flex-row justify-between items-center`);

const LeftBox = styled.div(tw`flex flex-row space-x-4`);
const MonthBox = styled.div(
  tw`flex flex-row pl-2 py-0.5 rounded-md font-semibold ease-out duration-100`,
  tw`hover:ring-2 hover:ring-slate-300 hover:bg-slate-200`
);

const CenterBox = styled.div(tw``);

const RightBox = styled.div(tw`bg-blue-200 px-5`);

export default CalendarHeader;
