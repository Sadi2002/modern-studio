import { redirect } from "next/navigation";

export default function Home() {
  // Zawsze przekierowujemy na /en
  redirect("/");
}
