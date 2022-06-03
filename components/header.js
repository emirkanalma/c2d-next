import Link from 'next/link'
function Header() {
    return (

        <nav>
            <Link href="/">
                <a> Anasayfa</a>
            </Link>
            
            <Link href="/about">
                <a> Hakkımda</a>
            </Link>
        </nav>
    
    )
} 

export default Header