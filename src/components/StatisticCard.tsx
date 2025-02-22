interface Props {
  statistic: string;
  label: string;
}
const StatisticCard = ({ statistic, label }: Props) => {
  return (
    <div className="stat-card">
      <h1 className="statistic">{statistic}</h1>
      <h1 className="stat-label">{label}</h1>
    </div>
  );
};

export default StatisticCard;
