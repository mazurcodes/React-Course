const Header = () => {
  return (
    <>
      <h1>Pierwszy komponent</h1>   
    </>
  )
}

class App2 extends React.Component {
  state = {
    number: 0,
  }
  render() { 
    return (
      <section>
        <h2>Artykuł</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sunt ipsam facere est placeat veritatis quod omnis unde hic repudiandae velit doloribus recusandae nulla, autem laborum laboriosam odit maiores laudantium!</p>
      </section>
     );
  }
}

const App = () => {
  return (
    <>
    <Header />
    <App2 />
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));