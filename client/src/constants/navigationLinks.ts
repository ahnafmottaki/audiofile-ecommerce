import headphoneImage from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImage from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphoneImage from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

const CATEGORIES = [
  { name: "headphones", url: headphoneImage },
  { name: "speakers", url: speakerImage },
  { name: "earphones", url: earphoneImage },
] as const;
export { CATEGORIES };
