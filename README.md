# Tienda Isa


## `Introducción`

El sitio se llama Tienda ISA y es un Ecommerce orientado a la venta de artículos de Computación y Celulares conteniendo las siguientes categorías:

### `Celulares`

Aquí aparecen los smartphones de las marcas que hay en el mercado que operan en Argentina.

### `Notebooks`

Aquí se destacan las notebooks gamers o de alto rendimiento

### `PCs`

Se venden las pcs mas solicitadas por los clientes.

### Idea del proyecto 
Me decidí por elegir esta tématica para el Ecommerce, porque es un tema muy común y muy consumido entre los trabajadores IT. 

### Algunas decisiones puntuales 
- Se eligió la utilización del fondo de color blanco y la fuente negra. Para la creación de las cards del componente Item, Se implementó una imagen de de buena calidad, la cual, se accede a través del botón nombrado "Ver Detalles".

- El componente ItemCount se utilizó iconos de + -, el badge con la cantidad total de stock, con la caracteristica que evita que pueda agregar al carrito más cantidad de producto del total de stock, ní tampoco descontar más allá del cero. Está caracteritica es señalada cuando el botón azul se tiñe de gris.

- Se colocó un loader, para ocupar el lugar de la frase "Cargando..." configurado para que un hook de estado marque el momento en el cual aparece y desaparece.

- El componente CartWidget del Navbar, está creado dentro de un botón el cual será routeado a la zona del carrito de compras.

- Se utilizó como backend la base de datos provista por Firebase que permite crear las distintas colecciones tanto de productos como historial de compras.

- El renderizado de los productos del Carrito, se realizó a traves de una función exportada desde el contexto CartContext debido a ciertos errores que aparecian al ejecutar.

- La muestra de los totales en la vista Cart, fue hecha desde un componente aparte para crear un poco mejor de limpieza en el código.

- Se decidió usar como una exportación el componente NavBar debido a un conflicto de nombres.

- Se crearon dos archivos .mht con la grabacion del sitio, uno intermedio y otro final, donde se muestra el funcionamiento de la app, se encuentran en la raiz del proyecto.



### Librerias y dependencias necesarias

```

bootstrap: "^5.1.3",
Para el CSS.

react: "^18.1.0",
react-dom: "^18.1.0",
react-icons: "^4.3.1",
Una libreria que tiene linkeados varias colecciones de iconos gratis.

react-router-dom: "^6.3.0",
Para poder crear las rutas.

react-scripts: "5.0.1",
reactstrap: "^9.0.2",
Una libreria de estilos y formatos adaptada a los componentes de React.
```
Para visualizarlo en su Computador.

```
En el directorio del proyecto, puedes ejecutarlo:
`npm start`

Corre la App en modo desarrollador.\
abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

La pagina se recargará cuando haga cambios.\
Tambien puede ver cualquier linea de error en la consola.

```

## Despliegue 


```
`npm run build`
Para crear la producción en la carpeta `build` .\ 
esta obtendrá el código minificado para tener una mejor performance y poder cargarlo en un servidor.
```




## Construido con 


* [Visual Studio Code] (https://code.visualstudio.com/) - El ID utilizado
* [Reactstrap] (https://reactstrap.github.io/?path=/story/home-installation--page) - El framework visual utilizado
* [Reac Router] (https://reactrouter.com/) - El enrutador utilizado
* [React] (https://reactjs.org/) - El framework web usado
* [NPM] (https://www.npmjs.com) - Manejador de paquetes
* [Firebase] (https://firebase.google.com/) - Gestor de Backend
