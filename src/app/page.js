import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Menu from "./components/menu";
import Cursior from "./components/cusor";
import Banner from "./components/banner";
import HotBanner from "./components/hotbanner";
import MainCursior from "./components/maincursior";
import { GetCursiorItem, GetMainCursiorItem } from "@/server/getmenue"
export default async function Home() {
  const data = await GetCursiorItem();
  const Maindata = await GetMainCursiorItem();
  return (
    <>
      <Navbar />
      <Menu/>
      <Cursior data={data}/>
      <Banner/>
      <HotBanner data={data}/>
      <MainCursior data={Maindata}/>
      <MainCursior data={Maindata}/>
      <MainCursior data={Maindata}/>
      <MainCursior data={Maindata}/>
      <MainCursior data={Maindata}/>
      <MainCursior data={Maindata}/>
      <MainCursior data={Maindata}/>
    </>
  );
}
