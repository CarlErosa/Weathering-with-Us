"use client";

import Image from "next/image";
import styles from "./tracking.module.css";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"
 
 
 const tracking = () =>{
    const router = useRouter();
    return (
    <div className={styles.TitleContainer}>
        <h1>Weather Dashboard</h1>
    </div>

        
    );
}

export default tracking;