import Link from "next/link"
import Image from "next/image"
import Style from "./menu.module.css"
import Styles from "./cursor.module.css"
export default async function MainCursior({data}) {
    const title = "Hot Right Now 🔥"
    return (
        <>
            <div className={Style.Banner}>{title}</div>
            <div className={Styles.Menu}>
                {data.map((item) => {
                    return <div><Link href={`/${item.id}`}>
                        <Image style={{width: "200px"}} src={item.recimage} alt="" width={500} height={500} />
                    </Link></div>
                })}
            </div>
        </>
    )
}