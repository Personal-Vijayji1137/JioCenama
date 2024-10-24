import Link from "next/link"
import Styles from "./menu.module.css"
import { GetMenu } from "@/server/getmenue"
export default async function Menu() {
    const data = await GetMenu();
    console.log(data);
    return(
        <div className={Styles.Menu}>
            {data.map((item)=>{
                return <div><Link href={item.link}>{item.name}</Link></div>
            })}
        </div>
    )
}