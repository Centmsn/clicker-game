import { StatsProps } from "./constants";
import * as P from "./parts";

const Stats = ({ label }: StatsProps) => {
  return <P.Stat>{label}</P.Stat>;
};

export default Stats;
