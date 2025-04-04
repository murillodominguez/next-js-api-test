import Link from 'next/link'
import { FormEvent, useState, useRef } from 'react'

export function Header(props) {
    return <h1>{props.title}</h1>
}

export default function HomePage() {
    const [poke, setPoke] = useState('aguardando api')
    const [type, setType] = useState('aguardando api')
    const [inputValue, setInputValue] = useState('')

    const handleInputValueChange = e =>{setInputValue(e.target.value)}

    async function onSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const formData = inputValue;
        const response = await fetch('api/poke', {
            method: 'POST',
            body: formData
        })

        const pokemon = await response.json()
        if(pokemon.poke != 'Not Found'){
            setPoke(pokemon.poke.name)
            setType(pokemon.poke.types[0].type.name)
        }
        else{
            setPoke(pokemon.poke)
            setType(pokemon.poke)
        }
    }
    
    return <div><Header title="Hello world!"></Header>
    <Link href="/sobre">
    Sobre
    </Link>
    <form onSubmit={onSubmit}>
        <label htmlFor="poke">Pokemon Search</label>
        <input type="text" id="poke" name="poke" value={inputValue} onChange={handleInputValueChange}></input>
        <button type="submit">Submit</button>
    </form>
    <div>name: {poke}</div>
    <div>type: {type}</div>
    </div>
}