

//Aqui en Java Script vamos a diseñar 2 clases :1 para los datos y otra para mostrar los productos 
//a la derecha de la interfaz

//Empezando por el producto , va a crear el producto con los parametros que le damos en este caso name,price y year

class Product{
    constructor(name, price, year){
        //con lo siguiente le estoy diciendo " De este producto, su nombre va a ser asignado del nombre que yo le 
        //de al constructor this.name = name"; lo mismo con el resto de propiedades.
      this.name = name;
      this.price = price;
      this.year = year;
    }
}


// esta va a ser la clase de User Interface donde vamos a diseñar unos metodos 
class UI{
    //le damos este metodo a la interface UI va poder acceder al <html> que es el DOM para poder alterarlo y lo va agre
    //gar en el  <div id="product-list" class="col-md-8"> especificamente.

    addProduct(product){//en esta linea agarre introduje la constante Product de abajo R2
        const productList = document.getElementById("product-list"); //aqui accedo al div product-lis y lo guardo en una  //llamada prodcutList
        const element = document.createElement("div"); //aqui creo un elemento <div> HTML para despues darselo a const productlist y asi lo reproduzca en pantalla.
        element.innerHTML = `
             <div class="card text-center mb-4">
                <div class="card-body">
                
                </div>
             </div>
        ` ;                                                          

    }
    //el segundo metodo sera para poder borrar items del formulario.
    deleteProduct(){

    }
    //y otro metodo para poder mostrar mensajes
    showMessage(){


    }

}


//aqui vamos a meter los EVENTOS DEL DOM :por ejemplo cuando el usario haga click en el boton save introducira los 
//valores del formulario , cuando el usuario escribe o refresca la pagina esos son eventos.

//El primer evento que vamos a introducir es el submit que es  cuando el usuario manda la info mediante el boton "save",
//para ello primero selecciono el elemento formulario que tiene un id "product-form" y le añado el evento submit


document.getElementById("product-form")                        
        .addEventListener("submit",function(e){  //con la "e" abrevio evento que voy a anular despues
            const name = document.getElementById("name").value;    //en estas lineas, le indico que una vez el usuario
            const price = document.getElementById("price").value;  // haga submit, se muestren los valores de los inputs con  
            const year = document.getElementById("year").value;    //ID name,el ID price y el ID year que el usuario escribio


            e.preventDefault(); //con este comando anulo que el formulario haga un refresh cuando el ususario de save
                                //y los valores queden dentro del formulario "NOTA" abreviar el evento "e" arriba dentro
                                //de function()

            const product = new Product(name,price,year);//en esta linea abro una nueva constante para guardar un nuevo
                                                         //class product R2 que construi arriba del todo poniendo "new" antes.
         
         //un buen resumen seria decir que le indique a la consola que una vez el usuario haga click en save se produzcan 
         //los siguientes eventos: 1,muestre los valores elegidos por el cliente , 2evite hacer refresh para que los datos
         //permanezcan en el formulario y 3 se cree un nuevo objeto"PRODUCTO" llamado new product que muestre de nuevo los
         //valores . FALTA mostrar todo esto en la pantalla y eso lo haremos arriba en CLASS UI por ser la interface.R1

        });



