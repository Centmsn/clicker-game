import { SubtitleProps } from "./constants";
import * as P from "./parts";

const Subtitle = ({ value }: SubtitleProps) => {
  return (
    <P.SubTitle>
      increment per second:
      {value}
      /s
    </P.SubTitle>
  );
};

export default Subtitle;
