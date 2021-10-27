import * as P from "./parts";
import { StatsProps } from "./constants";

const Stats = ({ stat }: StatsProps) => {
  return <P.Stat>{stat}</P.Stat>;
};

export default Stats;
