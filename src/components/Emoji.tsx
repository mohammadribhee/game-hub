import { Image, ImageProps } from "@chakra-ui/react";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullEye from "../assets/bulls-eye.webp";
interface Props {
  reating: number;
}

const Emoji = ({ reating }: Props) => {
  if (reating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullEye, alt: "excpotional", boxSize: "35px" },
  };

  return <Image {...emojiMap[reating]} marginTop={1} />;
};

export default Emoji;
