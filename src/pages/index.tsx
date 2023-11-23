import Card from "@/components/Card";
import CardOG from "@/components/CardOG";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`grid place-content-center min-h-screen p-24 ${poppins.className}`}
    >
      {/* <CardOG /> */}
      <Card />
    </main>
  );
}
