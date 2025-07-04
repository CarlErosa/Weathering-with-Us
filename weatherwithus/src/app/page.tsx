"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();
  
  return (
    <main>
      <div className={styles.Title}>Weathering with us</div>
      <div className={styles.Subtitle}>
        <h4>Track Fast, Track Now</h4>
      </div>
      <div className={styles.ButtonContainer}>
        <Button className={styles.Button} variant="secondary"onClick={() => router.push('/tracking')}>
          Track Now
        </Button>
      </div>
        <div className={styles.ButtonContainer2}>
        <Button className={styles.Button2} variant="secondary">
          Learn More
        </Button>
      </div>
    </main>
  );
}
