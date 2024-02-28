import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h2>This is the main page</h2>
      </main>
    </div>
  );
}
