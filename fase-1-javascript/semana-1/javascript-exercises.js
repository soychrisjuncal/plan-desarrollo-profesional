// ======================================================
// EJERCICIOS JAVASCRIPT MODERNO - SEMANA 1
// ======================================================
// Estos ejercicios cubren los fundamentos de JavaScript ES6+
// Completa cada ejercicio y ejecuta el código para verificar.
// ======================================================

// -----------------------------------------------------
// EJERCICIO 1: Variables y Constantes
// -----------------------------------------------------
// Objetivo: Practicar la diferencia entre let, const y var

// 1.1 Declara variables usando let, const y var
console.log('EJERCICIO 1: Variables y Constantes');

// TODO: Declara una variable con var llamada 'nombre' y asígnale tu nombre
var nombre = 'TuNombre';

// TODO: Declara una variable con let llamada 'edad' y asígnale tu edad
let edad = 30;

// TODO: Declara una constante llamada 'PROFESION' y asígnale tu profesión
const PROFESION = 'Web Designer';

// 1.2 Intenta reasignar valores
nombre = 'Nuevo Nombre'; // Esto funciona con var
edad = 31;               // Esto funciona con let
// PROFESION = 'Otro';   // Esto daría error por ser const

// 1.3 Demuestra el scope de bloque
{
  var varTest = 'var es global o de función';
  let letTest = 'let tiene scope de bloque';
  const constTest = 'const tiene scope de bloque';
  
  console.log('Dentro del bloque:');
  console.log(varTest);   // Accesible
  console.log(letTest);   // Accesible
  console.log(constTest); // Accesible
}

console.log('Fuera del bloque:');
console.log(varTest);     // Accesible
// console.log(letTest);  // Error: no definido
// console.log(constTest);// Error: no definido

// Imprime los resultados
console.log('nombre:', nombre);
console.log('edad:', edad);
console.log('PROFESION:', PROFESION);
console.log('\n');

// -----------------------------------------------------
// EJERCICIO 2: Template Literals
// -----------------------------------------------------
// Objetivo: Usar template literals para crear strings más legibles

console.log('EJERCICIO 2: Template Literals');

// TODO: Crea variables para almacenar información de un proyecto
const nombreProyecto = 'Portfolio Personal';
const tecnologias = ['HTML', 'CSS', 'JavaScript'];
const fechaInicio = '2024-02-26';
const clienteId = 123;

// 2.1 Crea un string usando concatenación tradicional
const descripcionTradicional = 'El proyecto ' + nombreProyecto + 
                              ' utiliza las tecnologías ' + tecnologias.join(', ') + 
                              '. Comenzó el ' + fechaInicio + 
                              ' para el cliente #' + clienteId + '.';

// 2.2 Crea el mismo string usando template literals
const descripcionModerna = `El proyecto ${nombreProyecto} 
utiliza las tecnologías ${tecnologias.join(', ')}. 
Comenzó el ${fechaInicio} 
para el cliente #${clienteId}.`;

// Imprime y compara los resultados
console.log('Tradicional:', descripcionTradicional);
console.log('Moderna:', descripcionModerna);
console.log('\n');

// -----------------------------------------------------
// EJERCICIO 3: Arrow Functions
// -----------------------------------------------------
// Objetivo: Comprender las diferencias entre funciones tradicionales y arrow functions

console.log('EJERCICIO 3: Arrow Functions');

// 3.1 Función tradicional
function sumarTradicional(a, b) {
  return a + b;
}

// 3.2 Arrow function (expresión completa)
const sumarArrow = (a, b) => {
  return a + b;
};

// 3.3 Arrow function (return implícito)
const sumarArrowCorta = (a, b) => a + b;

// 3.4 Arrow function con un solo parámetro (sin paréntesis)
const cuadrado = x => x * x;

// Probando las funciones
console.log('Suma tradicional: 5 + 3 =', sumarTradicional(5, 3));
console.log('Suma arrow: 5 + 3 =', sumarArrow(5, 3));
console.log('Suma arrow corta: 5 + 3 =', sumarArrowCorta(5, 3));
console.log('Cuadrado de 4 =', cuadrado(4));

// 3.5 Diferencias con 'this'
// Función constructora
function Persona(nombre) {
  this.nombre = nombre;
  
  // Método usando función tradicional
  this.saludarTradicional = function() {
    console.log('Hola, soy ' + this.nombre);
  };
  
  // Método usando arrow function
  this.saludarArrow = () => {
    console.log(`Hola, soy ${this.nombre}`);
  };
  
  // Método que demuestra la diferencia
  this.compararThis = function() {
    setTimeout(function() {
      console.log('En función tradicional, this.nombre:', this.nombre); // undefined
    }, 100);
    
    setTimeout(() => {
      console.log(`En arrow function, this.nombre: ${this.nombre}`); // funciona
    }, 100);
  };
}

// Crear una instancia y probar
const persona = new Persona('Juan');
persona.saludarTradicional();
persona.saludarArrow();
persona.compararThis();
console.log('\n');

// -----------------------------------------------------
// EJERCICIO 4: Destructuring
// -----------------------------------------------------
// Objetivo: Aprender a extraer valores de arrays y objetos con destructuring

console.log('EJERCICIO 4: Destructuring');

// 4.1 Destructuring de arrays
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'naranja'];

// TODO: Extrae el primer y segundo elemento en variables llamadas 'primerColor' y 'segundoColor'
const [primerColor, segundoColor] = colores;

// TODO: Extrae el primer y tercer elemento
const [primero, , tercero] = colores;

// TODO: Extrae el primer elemento y el resto en un nuevo array
const [primer, ...restoColores] = colores;

console.log('Primer color:', primerColor);
console.log('Segundo color:', segundoColor);
console.log('Primer y tercer color:', primero, tercero);
console.log('Resto de colores:', restoColores);

// 4.2 Destructuring de objetos
const usuario = {
  id: 1,
  username: 'usuario123',
  email: 'usuario@ejemplo.com',
  detalles: {
    nombre: 'Juan Pérez',
    edad: 28,
    direccion: {
      calle: 'Calle Principal 123',
      ciudad: 'Buenos Aires'
    }
  },
  roles: ['editor', 'moderador']
};

// TODO: Extrae username y email en variables del mismo nombre
const { username, email } = usuario;

// TODO: Extrae id y username pero guárdalos en variables con otros nombres
const { id: userId, username: nombreUsuario } = usuario;

// TODO: Extrae la ciudad desde el objeto anidado
const { detalles: { direccion: { ciudad } } } = usuario;

// TODO: Extrae nombre y usa un valor por defecto para una propiedad que no existe
const { detalles: { nombre }, lenguajeFavorito = 'JavaScript' } = usuario;

console.log('Username y email:', username, email);
console.log('userId y nombreUsuario:', userId, nombreUsuario);
console.log('Ciudad:', ciudad);
console.log('Nombre y lenguaje favorito:', nombre, lenguajeFavorito);
console.log('\n');

// -----------------------------------------------------
// EJERCICIO 5: Spread & Rest Operators
// -----------------------------------------------------
// Objetivo: Usar los operadores ... para manipular arrays y objetos

console.log('EJERCICIO 5: Spread & Rest Operators');

// 5.1 Spread con arrays
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

// TODO: Combina los dos arrays en uno nuevo llamado 'todosNumeros'
const todosNumeros = [...numeros1, ...numeros2];

// TODO: Crea un nuevo array con un elemento al principio, todos los de numeros1, y uno al final
const numerosExtendidos = [0, ...numeros1, 7];

console.log('Todos los números:', todosNumeros);
console.log('Números extendidos:', numerosExtendidos);

// 5.2 Spread con objetos
const datosBasicos = {
  nombre: 'Ana',
  email: 'ana@ejemplo.com'
};

const datosExtras = {
  rol: 'desarrollador',
  experiencia: 5
};

// TODO: Combina los dos objetos en uno nuevo llamado 'perfilCompleto'
const perfilCompleto = {...datosBasicos, ...datosExtras};

// TODO: Crea un objeto basado en datosBasicos pero sobrescribe el email
const perfilActualizado = {...datosBasicos, email: 'nueva@email.com'};

console.log('Perfil completo:', perfilCompleto);
console.log('Perfil actualizado:', perfilActualizado);

// 5.3 Rest operator en funciones
// TODO: Crea una función que tome el primer argumento normalmente y el resto en un array
function procesarItems(primero, ...resto) {
  console.log('Primer item:', primero);
  console.log('Resto de items:', resto);
  return resto.length;
}

const cantidadResto = procesarItems('manzana', 'banana', 'naranja', 'uva');
console.log('Cantidad en resto:', cantidadResto);
console.log('\n');

// -----------------------------------------------------
// EJERCICIO 6: Default Parameters & Enhanced Object Literals
// -----------------------------------------------------
// Objetivo: Usar parámetros por defecto y mejoras en la sintaxis de objetos

console.log('EJERCICIO 6: Default Parameters & Enhanced Object Literals');

// 6.1 Parámetros por defecto
// TODO: Crea una función con parámetros por defecto
function crearPerfil(nombre = 'Anónimo', edad = 25, activo = true) {
  return {
    nombre,
    edad,
    activo,
    fechaCreacion: new Date().toISOString()
  };
}

const perfil1 = crearPerfil('María', 30);
const perfil2 = crearPerfil(); // Usa todos los valores por defecto
const perfil3 = crearPerfil('Carlos', undefined, false); // Solo usa el valor por defecto para edad

console.log('Perfil 1:', perfil1);
console.log('Perfil 2:', perfil2);
console.log('Perfil 3:', perfil3);

// 6.2 Enhanced Object Literals
const categoria = 'desarrollo web';
const nivel = 'intermedio';

// TODO: Crea un objeto usando enhanced object literals (propiedades y métodos)
const curso = {
  // Propiedades con el mismo nombre que las variables
  categoria,
  nivel,
  // Propiedades calculadas
  [`curso_${nivel}`]: true,
  // Métodos simplificados (sin la palabra 'function')
  describir() {
    return `Curso de ${this.categoria} - Nivel ${this.nivel}`;
  },
  // Método arrow (ten en cuenta que 'this' se comporta diferente)
  getInfo: () => `Información del curso: ${categoria} ${nivel}`
};

console.log('Curso:', curso);
console.log('Descripción:', curso.describir());
console.log('Info:', curso.getInfo());
console.log('\n');

// -----------------------------------------------------
// DESAFÍO FINAL: Aplica todo lo aprendido
// -----------------------------------------------------
// Objetivo: Crear una pequeña biblioteca de gestión de proyectos

console.log('DESAFÍO FINAL:');

// TODO: Completa este desafío aplicando todo lo que has aprendido
// Crea un sistema para gestionar proyectos web utilizando:
// - let/const
// - template literals
// - arrow functions
// - destructuring
// - spread/rest operators
// - default parameters
// - enhanced object literals

// Base de datos de proyectos
const proyectos = [
  { id: 1, nombre: 'Sitio web corporativo', cliente: 'Empresa A', tecnologias: ['HTML', 'CSS', 'JavaScript'], completado: true },
  { id: 2, nombre: 'E-commerce', cliente: 'Empresa B', tecnologias: ['React', 'Node.js'], completado: false }
];

// Biblioteca de gestión
const gestionProyectos = {
  proyectos,
  
  // Listar todos los proyectos
  listarProyectos() {
    this.proyectos.forEach(({ id, nombre, cliente, completado }) => {
      console.log(`[${id}] ${nombre} - Cliente: ${cliente} - Estado: ${completado ? 'Completado' : 'En progreso'}`);
    });
  },
  
  // Agregar un nuevo proyecto
  agregarProyecto(nombre, cliente, tecnologias = [], completado = false) {
    const nuevoId = this.proyectos.length > 0 ? Math.max(...this.proyectos.map(p => p.id)) + 1 : 1;
    
    const nuevoProyecto = {
      id: nuevoId,
      nombre,
      cliente,
      tecnologias,
      completado
    };
    
    this.proyectos.push(nuevoProyecto);
    return nuevoProyecto;
  },
  
  // Buscar proyectos por tecnología
  buscarPorTecnologia(tecnologia) {
    return this.proyectos.filter(proyecto => 
      proyecto.tecnologias.includes(tecnologia)
    );
  },
  
  // Actualizar estado de un proyecto
  actualizarEstado(id, completado) {
    const proyecto = this.proyectos.find(p => p.id === id);
    
    if (proyecto) {
      return { ...proyecto, completado };
    }
    
    return null;
  }
};

// Demostración
console.log('----- Lista de proyectos inicial -----');
gestionProyectos.listarProyectos();

console.log('----- Agregando nuevo proyecto -----');
const proyectoNuevo = gestionProyectos.agregarProyecto('App Móvil', 'Empresa C', ['React Native', 'Firebase']);
console.log('Proyecto creado:', proyectoNuevo);

console.log('----- Buscando proyectos con React -----');
const proyectosReact = gestionProyectos.buscarPorTecnologia('React');
proyectosReact.forEach(({ nombre }) => {
  console.log(`- ${nombre}`);
});

console.log('----- Lista final de proyectos -----');
gestionProyectos.listarProyectos();

// ======================================================
// FIN DE LOS EJERCICIOS
// ======================================================
