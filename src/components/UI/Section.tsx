import { FC, ReactNode } from "react";
import styles from "./Section.module.css";

const Section: FC<{ children?: ReactNode }> = (props) => {
  return <section className={styles.section}>{props.children}</section>;
};

export default Section;
