import type { NextApiRequest, NextApiResponse } from 'next'

async function tempo(request: NextApiRequest, response: NextApiResponse) {
    const uri = 'https://pokeapi.co/api/v2/pokemon/'+request.body
    let poke = await fetch(uri)
    .then(response => response.json()).catch(exception => 'Not Found')
    response.json({
        poke
    })

    // console.log(poke)
    // response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
}

export default tempo;