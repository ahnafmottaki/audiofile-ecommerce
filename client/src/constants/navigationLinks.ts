import headphoneImage from "/shared/desktop/image-category-thumbnail-headphones.png";
import speakerImage from "/shared/desktop/image-category-thumbnail-speakers.png";
import earphoneImage from "/shared/desktop/image-category-thumbnail-earphones.png";

const CATEGORIES = [
  { name: "headphones", url: headphoneImage },
  { name: "speakers", url: speakerImage },
  { name: "earphones", url: earphoneImage },
] as const;
export { CATEGORIES };
