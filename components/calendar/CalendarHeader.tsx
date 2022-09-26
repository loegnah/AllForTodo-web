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
          {`${year}년 ${month}월`}
          <Image src="/down.svg" alt="me" width="16" height="16" />
        </MonthBox>
        <IconBox>
          <Image src="/left.svg" alt="me" width="20" height="20" />
        </IconBox>
        <IconBox>
          <Image src="/right.svg" alt="me" width="20" height="20" />
        </IconBox>
      </LeftBox>
      <RightBox></RightBox>
    </CalendarHeaderLayout>
  );
}

const CalendarHeaderLayout = styled.header(tw`h-16 py-4 px-4 flex flex-row justify-between items-center`);

const LeftBox = styled.div(tw`h-full flex flex-row space-x-4 items-center`);
const MonthBox = styled.div(
  tw`flex flex-row pl-2 py-0.5 rounded-md text-lg font-semibold ease-out duration-100`,
  tw`hover:ring-2 hover:ring-slate-200 hover:bg-slate-50`
);

const IconBox = styled.div(
  tw`relative w-6 h-6 flex justify-center items-center rounded-full ring-1 ring-slate-200 ease-out duration-100`,
  tw`hover:ring-2 hover:ring-slate-300 hover:bg-slate-50`
);

const CenterBox = styled.div(tw``);

const RightBox = styled.div(tw`bg-blue-200 px-5`);

export default CalendarHeader;
