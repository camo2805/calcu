# Calcu

Calculadora científica gratuita y de código abierto para iPhone y Android, instalable desde el navegador (PWA). Combina ideas de la HP Prime G2, la Casio fx-CG50, la TI-Nspire CX II CAS y la Casio fx-991CW, con identidad propia.

Funciona con y sin conexión a internet una vez instalada.

## Novedades de la versión 0.2

**0.2.1**: corregido el catálogo, cuya barra de categorías cambiaba de posición al tocarla y hacía seleccionar otra categoría. Ahora la ventana tiene altura fija, las categorías van en dos filas y recuerda la última usada.

- **Escritura natural**: fracciones, raíces, potencias, integrales, límites, sumatorias y matrices se escriben y se ven como en un libro (MathLive). La escritura lineal sigue disponible en Ajustes.
- **Manual de usuario incorporado** (botón `?`): 18 secciones con buscador, ejemplos que se ejecutan con un toque y tabla de todas las teclas.
- **Ayuda en cada tecla**: mantener pulsada una tecla muestra qué hace, también con SHIFT.
- **CAS en capas**: Nerdamer, luego Algebrite y, si ninguno resuelve, métodos numéricos. Las primitivas se verifican derivando numéricamente y las soluciones de ecuaciones se comprueban sustituyendo.
- Nuevos comandos: `taylor`, `nint` (integral numérica), `nsolve` (solución numérica en un intervalo).
- Integrales impropias y con singularidades (cuadratura tanh-sinh), ecuaciones trascendentes como `cos(x) = x` y raíces complejas de polinomios.
- **Gráficas de relaciones y desigualdades**: `x^2+y^2=9`, `y>x^2-2`, con sombreado.
- **Tabla de valores** en el modo Gráfica.
- Tecla de fracción y matrices 2×2 y 3×3 en el teclado.

## Qué hace

- **Cálculo**: resultados exactos y decimales (S⇔D), variables y funciones, matrices, estadística, distribución normal, complejos y unidades, incluidas las petroleras (`bbl`, `Mbbl`, `MMbbl`, `MBD`, `MMBD`, `MMBTU`, `TM`).
- **CAS**: derivadas, integrales, límites, series de Taylor, factorización, fracciones parciales, sumatorias, ecuaciones y sistemas.
- **Gráfica**: hasta 4 funciones o relaciones; trazar, raíces, máximos y mínimos, intersecciones, tabla de valores.
- Tres temas de color y formato de números `1.234,5` o `1 234.5`.

## Instalar en el teléfono

1. Abre el enlace de la app en **Safari** (iPhone) o **Chrome** (Android).
2. iPhone: botón Compartir → **Agregar a pantalla de inicio**. Android: menú ⋮ → **Instalar app** (en Samsung Internet: **Agregar página a → Pantalla de inicio**).

## Publicar una versión nueva en GitHub Pages

1. Sube todos los archivos al repositorio, respetando las carpetas (incluidas `lib/mathlive/` y `lib/mathlive/fonts/`).
2. Cambia `VERSION` en `sw.js` (por ejemplo `calcu-v0.2.1`). Si no lo cambias, los teléfonos seguirán usando la versión guardada.
3. Los teléfonos descargan la versión nueva en segundo plano y la aplican al cerrar y volver a abrir la app.

## Estructura

```
index.html              La app completa (HTML, CSS y JavaScript)
sw.js                   Service worker: uso sin conexión
manifest.webmanifest    Datos de instalación
icons/                  Iconos
lib/                    Motores matemáticos
  math.js               math.js 15.2.0
  nerdamer.all.min.js   Nerdamer 1.1.13
  algebrite.bundle-for-browser.js   Algebrite 1.4.0
  mathlive/             MathLive 0.110.0 (editor y visualización) + fuentes KaTeX
  licenses/             Licencias de cada librería
```

## Librerías y licencias

| Librería | Uso | Licencia |
|---|---|---|
| [math.js](https://mathjs.org) | Cálculo numérico, matrices, unidades | Apache-2.0 |
| [Nerdamer](https://nerdamer.com) | CAS principal | MIT |
| [Algebrite](http://algebrite.org) | CAS de respaldo, series de Taylor, raíces de polinomios | MIT |
| [MathLive](https://cortexjs.io/mathlive/) | Escritura natural y visualización de fórmulas | MIT |

Calcu se distribuye bajo **GPL-3.0** (ver `LICENSE`).

## Limitaciones conocidas

- Algunas primitivas se muestran en una forma válida pero más larga de lo necesario (por ejemplo, la de `1/(x^3+1)`).
- Las integrales definidas con límites infinitos se calculan numéricamente.
- En ecuaciones sin solución exacta, la búsqueda numérica cubre el intervalo [−100; 100]; fuera de él hay que usar `nsolve`.
- El CAS y las gráficas trabajan siempre en radianes.

## Hoja de ruta

- **0.3**: hojas de cálculo ligadas a gráficas; estadística de dos variables con regresiones.
- **0.4**: documentos con páginas estilo TI-Nspire; deslizadores; gráficas 3D.
- **0.5**: motor Giac (el CAS de la HP Prime) en WebAssembly; Python; modo RPN.
