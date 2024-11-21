
import RegisterAccount from "./create-account/page";
import Hero from "./components/hero";
import Gamelist from "@/app/gamelist/page";


export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <RegisterAccount/>
      <Gamelist/>
    </div>
  );
}