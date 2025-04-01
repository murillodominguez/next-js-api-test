async function tempo(request, response) {
    const apiSecret = process.env.API_SECRET_KEY;
    const dynamicDate = new Date();

    await fetch('https:')

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString()
    })
}

export default tempo;