
import RegisterAccount from "./create-account/page";
import Hero from "./components/hero";
import Gamelist from "@/app/gamelist/page";
import gameListCard from "@/app/gamelist/gameListCard";


export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className="">
      <Hero/>
      <RegisterAccount/>
      <Gamelist/>

    </div>
  );
}