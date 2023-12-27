const App = () => {
  
  return (
    <div>

    <div className="logo">
    <img src="logo.png" alt="" />
    </div>

  <nav>
    <a href="#">Home</a>
    <a href="#">Product</a>
    <a href="#">Company</a>
    <a href="#">Contact</a>
  </nav>

  <header>
    <h1>Header image</h1>
  </header>

  <main>
    <div className="main-top">
      <div className="box">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magni quaerat odit incidunt! Earum odio quos recusandae assumenda maiores suscipit.</p>
      </div>
      <div className="box">
        <h2>Company</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum id neque deserunt voluptatum laborum unde tenetur sunt inventore eum fuga?</p>
      </div>
      <div className="box">
        <h2>Services</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam recusandae et cupiditate facere omnis consectetur nulla itaque ea. Facere.</p>
      </div>
    </div>

    <div className="main-bottom">
      <div className="left">
        <h2>Content</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum qui deserunt ab ratione accusamus harum voluptatibus perferendis suscipit corporis. Magnam!</p>
        <h3>Sub header</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam alias beatae quaerat odio modi minus, reiciendis inventore? Laboriosam sint, inventore accusantium atque accusamus cum expedita? Soluta et totam ea laudantium commodi neque perferendis itaque quae, voluptatibus deleniti debitis iure autem.</p>
      </div>
      <div className="right">
        <h3>Navigation</h3>
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">Company</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("app")).render(<App/>)
