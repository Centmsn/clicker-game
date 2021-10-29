import * as P from "./parts";
import { StatsProps } from "./constants";

const Stats = ({ label }: StatsProps) => {
  return <P.Stat>{label}</P.Stat>;
};

export default Stats;
