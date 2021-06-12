import express from "express";
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

const data = [
  {
    id: 1,
    name: "Rice",
  },
  {
    id: 2,
    name: "Cookies",
  },
  {
    id: 3,
    name: "Pasta",
  },
];

// GET
// No es bueno que en la ruta principal se traga toda la informacion ya que este se utiliza mas que todo para mirar los estados
app.get("/", (req, res) => {
  res.send("Hola la ruta esta funcionando!");
});
// Data es muy general, colocar el nombre de la ruta siendo mas explicito de la informacion que quiero tener
// por defecto sabesmo que si es un get es obtener
//app.get("/obtener/productos", (req, res) => {
// Esta ruta obtiene todos los datos
app.get("/productos", (req, res) => {
  res.status(200).send(data);
});

app.get("/productos/:idproducto", (req, res) => {
  // idproducto esto es el parametro de la ruta
  const idproducto = req.params.idproducto;
  console.log("idproducto", idproducto);

  const productoSeleccionado = data.find(
    (producto) => producto.id == idproducto
  );
  res.status(200).send(productoSeleccionado);
});

// POST este sirve para ingresar informacion
// damos por hecho que es un post es para ingresar informacion
// se da por entendido que la ruta sirve para  agregar un producto se puede nombrar de esta manera ero no es lo indicado app.post("/agregarproductos")

app.post("/productos", (req, res) => {
  const food = req.body;
  const id = data.length + 1;
  const newdata = {
    id: id,
    name: food.name,
  };
  data.push(newdata);
  // La respuesta que se retorna es newData
  res.send(newdata);
});

// PATCH
// se da por entendido que la ruta patch sirve para editar un informacion esta debe ser buscada para luego editarla

//{{url}}/productos/3
//{
//  "name": "verd"
//}
app.patch("/productos/:idProducto", (req, res) => {
  const idProducto = req.params.idProducto; // 3
  const dataObtenido = req.body; // { name: "verde" }
  const nuevoProducto = data.map((producto) => {
    if (idProducto == producto.id) {
      producto.name = dataObtenido.name;
    }
    return producto;
  });

  res.status(200).send(nuevoProducto);
});


// Detete

// make a partial update to a particular resource’s object
// es para editar un valor selelccionado

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
