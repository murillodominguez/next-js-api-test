import type { NextApiRequest, NextApiResponse } from 'next'

async function pokemon(request: NextApiRequest, response: NextApiResponse) {
    const uri = 'https://pokeapi.co/api/v2/pokemon/'+request.body
    let poke = await fetch(uri)

    .then(response => response.json()).catch(exception => 'Not Found')
    console.log(uri)
    // console.log(poke)
    response.json({
        poke
    })

    // console.log(poke)
    // response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
}

export default pokemon;