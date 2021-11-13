import { CardSkeletonProps } from "./constants";
import * as P from "./parts";

export const CardSkeleton = ({ unlockCondition }: CardSkeletonProps): JSX.Element => {
  return <P.StyledCardSkeleton>Requires {unlockCondition} gold per second to unlock</P.StyledCardSkeleton>;
};
