import Image from "next/image"
import Link from "next/link"
import Styles from "./navbar.module.css"
export default async function Navbar() {
    return (
        <nav className={Styles.Navbar}>
            <Link href="/" className={Styles.Logo}>
                <Image src="https://www.jiocinema.com/images/jc_logo_v2.svg" width={100} height={100} alt="Logo" />
            </Link>
            <div className={Styles.NavMenu}>
                <Link href="/">Home</Link>
                <Link href="/">Sports</Link>
                <Link href="/">Movies</Link>
                <Link href="/">TV Shows</Link>
            </div>
            <div className={Styles.SearchBar}>
                <div className={Styles.FirstSearchBarDiv}>
                    <Image src="https://www.jiocinema.com/images/search/ic_search.svg" width={100} height={100} alt="Logo" />
                    <input placeholder="Type to Search ..." />
                    <Image src="https://www.jiocinema.com/images/search/voice-search.svg" width={100} height={100} alt="Logo" />
                </div>
                <div className={Styles.LastSearchBarDiv}>
                    <Link href="/"><Image src="https://www.jiocinema.com/images/profile/avatar_guest.svg" width={100} height={100} alt="Logo" /></Link>
                </div>
            </div>
        </nav>
    )
}