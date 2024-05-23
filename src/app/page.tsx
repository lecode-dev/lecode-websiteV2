import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/navbar/navbar";
import { Teste } from "@/components/teste/test";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Teste />
    </main>
  );
}
