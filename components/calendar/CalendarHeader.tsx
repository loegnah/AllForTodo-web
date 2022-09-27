import tw, { styled } from 'twin.macro';
import Image from 'next/image';

type Props = {
  year: number;
  month: number;
};

function CalendarHeader({ year, month }: Props) {
  return (
    <CalendarHeaderLayout>
      <LeftSection>
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
        <TodayBox>
          <span>오늘</span>
        </TodayBox>
        <IconBox>
          <Image src="/plus.svg" alt="me" width="22" height="22" />
        </IconBox>
      </LeftSection>
      <RightSection>
        <BaseBox>월</BaseBox>
        <BaseBox>주</BaseBox>
        <BaseBox>일</BaseBox>
      </RightSection>
    </CalendarHeaderLayout>
  );
}

const CalendarHeaderLayout = styled.header(tw`h-16 py-4 pl-4 pr-8 flex flex-row justify-between items-center`);

const LeftSection = styled.section(tw`h-full flex flex-row space-x-4 items-center`);

const hoverEffect = tw`ease-out duration-100 hover:ring-2 hover:ring-slate-400 hover:bg-sky-100`;

const MonthBox = styled.div(tw`flex flex-row pl-2 pr-1 py-0.5 rounded-md text-lg font-semibold`, hoverEffect);

const IconBox = styled.div(
  tw`relative w-7 h-7 flex justify-center items-center rounded-full ring-1 ring-slate-200`,
  hoverEffect
);

const TodayBox = styled(IconBox)(tw`w-14`);

const RightSection = styled(LeftSection)(tw`space-x-0.5`);

const BaseBox = styled.div(
  tw`bg-slate-100 w-16 text-center py-1 text-sm`,
  tw`first:rounded-l-full`,
  tw`last:rounded-r-full`,
  tw`ease-out duration-100 hover:bg-sky-100 hover:text-blue-500`
);

export default CalendarHeader;
