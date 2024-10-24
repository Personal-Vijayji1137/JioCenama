import Link from "next/link"
import Image from "next/image"
import Styles from "./menu.module.css"
export default async function Banner() {
    const data = {
        "link": "/",
        "title": "Non-Stop Action💥",
        "image": "https://v3img.voot.com/resizeMedium,w_1536,h_329/v3Storage/assets/live-feed-14x3-1729750253443.jpg"
    }
    return (
        <>
            <div className={Styles.Banner}>{data.title}</div>
            <Link href={data.link} className={Styles.BannerImage}>
                <Image src={data.image} width={1000} height={300} alt="" />
            </Link>
        </>
    )
}