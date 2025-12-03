import styles from "./MobileNav.module.css";
const MobileNav = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <ul
      className={`${styles["mobile-nav"]} ${
        isOpen ? "flex" : `${styles["no-height"]} none `
      }`}
    >
      <li>Home</li>
      <li>Headphones</li>
      <li>speakers</li>
      <li>earphones</li>
    </ul>
  );
};

export default MobileNav;
