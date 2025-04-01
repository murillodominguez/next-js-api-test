function Header(props) {
    return <h1>{props.title}</h1>
}

function HomePage() {
    return <Header title="Hello world!"></Header>
}

export default HomePage;