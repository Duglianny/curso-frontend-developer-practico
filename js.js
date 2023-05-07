// variables 

const menuEmail = document.querySelector('.navbar-email')

const desktopMenu = document.querySelector('.desktop-menu')

const burgerMenu = document.querySelector('.menu')

const mobileMenu = document.querySelector('.mobile-menu')

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')

const shoppingCartContainer = document.querySelector('#shoppingCartContainer')

const cardContainer = document.querySelector('.cards-container')

const productDetallesContainer = document.querySelector('#product-detalles')

const btnCerrarDetails = document.querySelector('.product-detail-close')


//eventos 

menuEmail.addEventListener('click', toggleDestokMenu)

burgerMenu.addEventListener('click', toggleMobileMenu)

menuCarritoIcon.addEventListener('click', toggleCarritoMenu)

btnCerrarDetails.addEventListener('click', closeProdcutDetail)


//funciones

function toggleDestokMenu(){
  const isCarritoClosed = shoppingCartContainer.classList.contains('inactive')

  if(!isCarritoClosed){
    shoppingCartContainer.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive')  //quita o pone la clase dependiendo de la condicion 

}


function toggleMobileMenu(){ //aqui al abrir el menu mobile el carrito se debe cerrar

  const isCarritoClosed = shoppingCartContainer.classList.contains('inactive')

  if(!isCarritoClosed){
    shoppingCartContainer.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive')

  closeProdcutDetail()
}


function toggleCarritoMenu(){  //cuando se abra el carrito se debe cerra el mobile menu 

  const isMenuMobileClosed = mobileMenu.classList.contains('inactive') //esta contante es igual a cuando este el menu cerrado al tener la clase inactive esta cerrado 

  if(!isMenuMobileClosed){ //si el menu mobile esta abierto ya que esta variable es si esta cerrado al cllocar ! es que esta abierto 

    mobileMenu.classList.add('inactive')
  }


  const productDetallesCerrado = productDetallesContainer.classList.contains('inactive')

  if(!productDetallesCerrado){
    productDetallesContainer.classList.add('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetalles(){
  shoppingCartContainer.classList.add('inactive') //se hace de esta manera ya que no es un toggle si no que se tiene un open y un close por separado ya que aqui es para abrir los detalles una vez abierto si se quiere abrirb el carrito se le da click y se ante pone a los detalles y se quitan los detalles 

  productDetallesContainer.classList.remove('inactive')
}

function closeProdcutDetail(){

  productDetallesContainer.classList.add('inactive')
}


//list products

const productList = [] //array donde se aguardara e imprimira cada uno de los elementos de la lista 

productList.push({ //agg a array los objetos con sus propiedades 

  name: 'Bike',
  price: 120,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})

productList.push({

  name: 'Pantalla',
  price: 220,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})

productList.push({

  name: 'Computadora',
  price: 620,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 ' 
})

function recorrerArray(array){

  for (product of productList){ //para crear en el html se requiere recorrer el array con los elementos que se le aggaron por ende este codigo se va a ejecutar a cada producto del array original prodcutList

    const productCard =  document.createElement('div')
    productCard.classList.add('product-card')
  
    const img = document.createElement('img')
    img.setAttribute('src', product.image)  // para aggar el atributo a la imagen se hace de esta manera diciendole que se va a dar un src y va a ser el que sea que se coloque a product.image 
    img.addEventListener('click', openProductDetalles)
    const productInfo =  document.createElement('div')
    productInfo.classList.add('product-info')
  
    const productInfoDiv =  document.createElement('div')
  
    const productName =  document.createElement('p')
    productName.innerText = product.name
  
    const productPrice =  document.createElement('p')
    productPrice.innerText = '$' + product.price
  
    const productInfoFigure = document.createElement('figure')
  
    const productInfoCard =  document.createElement('img')
    productInfoCard.setAttribute('src', './icons/bt_add_to_cart.svg')
  
    productInfoFigure.appendChild(productInfoCard)
  
    productInfoDiv.appendChild(productName)
    productInfoDiv.appendChild(productPrice)
  
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
  
    productCard.appendChild(img)
    productCard.appendChild(productInfo)
  
    cardContainer.appendChild(productCard)
  }
}

recorrerArray(productList)