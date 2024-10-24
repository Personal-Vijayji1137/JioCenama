import Link from "next/link"
import Image from "next/image"
import Style from "./menu.module.css"
import Styles from "./cursor.module.css"
export default async function HotBanner({data}) {
    const title = "Hot Right Now 🔥"
    return (
        <>
            <div className={Style.Banner}>{title}</div>
            <div className={Styles.Menu}>
                {data.map((item) => {
                    return <div><Link href={`/${item.id}`}>
                        <Image style={{width: "300px"}} src={item.image} alt="" width={500} height={500} />
                        <div>
                            <div>{item.language} . {item.catagory} . {item.UA}</div>
                        </div>
                    </Link></div>
                })}
            </div>
        </>
    )
}