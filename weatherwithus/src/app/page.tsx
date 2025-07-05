"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();
  
  return (
    <>
    <title>Weathering With Us</title>
      <div className={styles.Title}>Weathering with us</div>
      <div className={styles.Subtitle}>
        <h4>Track Fast, Track Now</h4>
      </div>
      <div className={styles.ButtonContainer}>
        <Button className={styles.Button} variant="secondary" onClick={() => router.push('/tracking')}>
          Track Now
        </Button>
      </div>
      <div className={styles.ButtonContainer2}>
        <Button className={styles.Button2} variant="secondary">
          Learn More
        </Button>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.Text}>90%</h2>
      </div>
      <div className={styles.textContainer2}>
        <h2 className={styles.Text2}>Accuracy</h2>
      </div>
      <div className={styles.textContainer3}>
        <h2 className={styles.Text3}>
          24/7
        </h2>
      </div>
      <div className={styles.textContainer4}>
        <h2 className={styles.Text4}>
          Updates
        </h2>
      </div>
      <div className={styles.textContainer5}>
        <h2 className={styles.Text5}>
          Global
        </h2>
      </div>
      <div className={styles.textContainer6}>
        <h2 className={styles.Text6}>
          Coverage
        </h2>
      </div>
    </>
  );
}
