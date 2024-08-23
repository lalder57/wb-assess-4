// Purpose of this file is to house all of my handler functions (callback functions of an endpoint)

// Set up global variable to mock a database:
let testLinks = [
  { id: 0, title: 'Cleaning Rags', price: 15, image: 'https://m.media-amazon.com/images/I/81yCMeC0nWL._AC_UF1000,1000_QL80_.jpg' },
  { id: 1, title: 'Drawer Organizers', price: 50, image: 'https://m.media-amazon.com/images/I/91RJUFqvSbL.jpg' },
  { id: 2, title: 'Kitchen Helper Stool', price: 30, image: 'https://m.media-amazon.com/images/I/61uMxO1+MKL._AC_UF894,1000_QL80_.jpg' },
  { id: 3, title: 'Cordless Vacuum', price: 50, image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6549/6549771_sd.jpg' },
]

let globalId = 4;

const handlerFunctions = {
  getLinks: (req, res) => {
    res.send({
      message: 'Here are the links.',
      links: testLinks,
    })

  },

  addLink: (req, res) => {
    // Get values from req.body
    const { title, price, image } = req.body;
    // Create a new object with those values
    const newLink = { 
      id: globalId,
      title,
      price,
      image
    }
    //Increment globalId for the next link
    globalId++
    // Add the newLink object to testLinks
    testLinks.push(newLink)
    // Send response
    res.send({
      message: 'Link added successfully!',
      newLink: newLink
    })

  }, 

  deleteLink: (req, res) => {
    const { id } = req.params;
    testLinks = testLinks.filter((link) => link.id !== +id)
    res.send({
      message: 'Bye-bye link',
      links: testLinks
    })

  }, 

  editLink: (req, res) => {
    const { id, title, price, image } = req.body;
    const idx = testLinks.findIndex((link) => link.id === +id);
    // Grab that invoice [idx]
    const link = testLinks[idx];

    // update values
    link.title = title;
    link.price = +price;
    link.image = image;

    res.send({
      message: 'Link updated successfully!',
      updatedLink: link
    })

  }
}

export default handlerFunctions