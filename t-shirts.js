const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'grey-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]

function TShirt (props) {
  const shirt = props.shirt
  const [stock, setStock] = React.useState(shirt.stock)
  const [quantity, setQuantity] = React.useState(shirt.quantity)

  const options = []
  for (let number = 1; number <= stock; number++) {
    options.push(<option key={number} value={number}>{number}</option>)
  }

  function quantityHandler (event) {
    setQuantity(parseInt(event.target.value))
  }

  function buyHandler () {
    if (quantity > 0 && quantity <= stock) {
      setStock(stock - quantity)
      setQuantity(1)
    }
  }

  return (
    <section>
      <h2>{shirt.title}</h2>
      <img src={'images/' + shirt.image} alt={shirt.title} width="200" />
      <p>Price: ${shirt.price}</p>
      <p>Remaining stock: {stock}</p>
      {stock > 0 ? (
        <div>
          <label>
            Quantity for {shirt.title}:{' '}
            <select value={quantity} onChange={quantityHandler}>
              {options}
            </select>
          </label>{' '}
          <button type="button" onClick={buyHandler}>Buy</button>
        </div>
      ) : (
        <p>Out of Stock</p>
      )}
    </section>
  )
}

function App () {
  return (
    <main>
      <h1>T-Shirts</h1>
      {tshirts.map(shirt => <TShirt key={shirt.title} shirt={shirt} />)}
    </main>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
