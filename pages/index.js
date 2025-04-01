import Link from 'next/link'

export function Header(props) {
    return <h1>{props.title}</h1>
}

export default function HomePage() {
    return <div><Header title="Hello world!"></Header>
    <Link href="/sobre">
    Sobre
    </Link></div>
}