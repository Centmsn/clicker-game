import { PictureProps } from "./constants";
import * as P from "./parts";

const Picture = ({ alt, src }: PictureProps) => {
  return <P.Image src={src} alt={alt} />;
};

export default Picture;
