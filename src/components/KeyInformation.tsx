import StatisticCard from "./StatisticCard";

interface KeyInformationProps {
  title: string;
  text: string;
  stats: string[];
  stats_labels: string[];
}
const KeyInformation = ({
  title,
  text,
  stats,
  stats_labels,
}: KeyInformationProps) => {
  return (
    <>
      <div className="key-information-block">
        <h1 className="catch-phrase">{title}</h1>
        <h2 className="subtext">{text}</h2>
        <div className="divider"></div>
        <div className="statistics">
          <StatisticCard statistic={stats[0]} label={stats_labels[0]} />
          <StatisticCard statistic={stats[1]} label={stats_labels[1]} />
          <StatisticCard statistic={stats[2]} label={stats_labels[2]} />
        </div>
      </div>
    </>
  );
};

export default KeyInformation;
