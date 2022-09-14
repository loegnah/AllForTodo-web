type Props = {
  dayName: string;
};

function DayHead({ dayName }: Props) {
  return <div>{dayName}</div>;
}

export default DayHead;
