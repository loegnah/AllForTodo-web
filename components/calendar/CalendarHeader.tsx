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
          <Image src="/left.svg" alt="me" width="22" height="22" />
        </IconBox>
        <IconBox>
          <Image src="/right.svg" alt="me" width="22" height="22" />
        </IconBox>
        <TodayBox>오늘</TodayBox>
        <IconBox>
          <Image src="/plus.svg" alt="me" width="22" height="22" />
        </IconBox>
      </LeftBox>
      <RightBox></RightBox>
    </CalendarHeaderLayout>
  );
}

const CalendarHeaderLayout = styled.header(tw`h-16 py-4 px-4 flex flex-row justify-between items-center`);

const LeftBox = styled.div(tw`h-full flex flex-row space-x-4 items-center`);

const MonthBox = styled.div(
  tw`flex flex-row pl-2 pr-1 py-0.5 rounded-md text-lg font-semibold ease-out duration-100`,
  tw`hover:ring-2 hover:ring-slate-400 hover:bg-sky-100`
);

const IconBox = styled.div(
  tw`relative w-7 h-7 flex justify-center items-center rounded-full ring-1 ring-slate-200 ease-out duration-100`,
  tw`hover:ring-2 hover:ring-slate-400 hover:bg-sky-100`
);

const TodayBox = styled(IconBox)(tw`w-14`);

const CenterBox = styled.div(tw``);

const RightBox = styled.div(tw`bg-blue-200 px-5`);

export default CalendarHeader;
