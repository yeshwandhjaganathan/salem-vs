import StatCounter from '../StatCounter';

export default function StatCounterExample() {
  return (
    <div className="p-8 flex gap-8 justify-center">
      <StatCounter end={20} label="Years of Tradition" suffix="+" />
      <StatCounter end={50000} label="Happy Customers" suffix="+" />
      <StatCounter end={15} label="Branches" />
    </div>
  );
}
