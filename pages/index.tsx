import Link from 'next/link'
import { FormEvent, useState } from 'react'

export function Header(props) {
    return <h1>{props.title}</h1>
}

export default function HomePage() {
    const [poke, setPoke] = useState('aguardando api')
    const [type, setType] = useState('aguardando api')
    async function onSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        console.log(formData.get('name'))
        const response = await fetch('api/tempo', {
            method: 'POST',
            body: formData.get('poke')
        })

        const pokemon = await response.json()
        setPoke(pokemon.poke.name)
        setType(pokemon.poke.types[0].type.name)
    }
    
    return <div><Header title="Hello world!"></Header>
    <Link href="/sobre">
    Sobre
    </Link>
    <form onSubmit={onSubmit}>
        <label htmlFor="poke">Pokemon Search</label>
        <input type="text" id="poke" name="poke"></input>
        <button type="submit">Submit</button>
    </form>
    <div>name: {poke}</div>
    <div>type: {type}</div>
    </div>
}