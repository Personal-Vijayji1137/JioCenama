import Link from "next/link"
import Image from "next/image"
import Styles from "./cursor.module.css"
export default async function Cursior({data}) {
    return (
        <div className={Styles.Menu}>
            {data.map((item) => {
                return <div><Link href={`/${item.id}`}>
                    <Image src={item.image} alt="" width={500} height={100} />
                    <div>
                        <div>{item.language} . {item.category} . {item.UA}</div>
                    </div>
                </Link></div>
            })}
        </div>
    )
}