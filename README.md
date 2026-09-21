# Calcu

Calculadora científica libre para iPhone y Android, inspirada en la HP Prime G2, la Casio fx-CG50, la TI-Nspire CX II CAS y la Casio fx-991CW. Funciona sin conexión una vez instalada y no pasa por App Store ni Google Play.

Versión actual: **0.1.0** (primera base funcional).

## Qué hace hoy

**Cálculo.** Operaciones científicas con vista previa en formato de libro de texto, resultado exacto o decimal (tecla S⇔D, como en Casio), grados o radianes, números complejos, matrices (determinante, inversa, valores propios, sistemas lineales), estadística y distribución normal, variables (`a = 5`), funciones de usuario (`f(x) = x^2`), `Ans`, historial reutilizable y conversión de unidades (`1000 bbl to m^3`, `100 km/h to m/s`). Incluye unidades petroleras: `bbl` (42 gal), `Mbbl`, `MMbbl`, `MBD`, `MMBD`, `MMBTU` y `TM`.

**CAS.** Derivadas, integrales indefinidas y definidas, límites, factorización, expansión, simplificación, fracciones parciales, sumatorias, ecuaciones (`x^2-5x+6=0`), sistemas (`2x+y=5; x-y=1`) y definiciones simbólicas (`f(x) := x^2+1`).

**Gráfica.** Hasta cuatro funciones, arrastrar para mover, pellizcar para acercar, trazado con coordenadas, raíces, máximos y mínimos, e intersecciones en la ventana visible.

**Teclado.** Diseño de 5 columnas con segunda función (SHIFT), borrado inteligente de funciones completas y opción de usar el teclado del teléfono.

## Instalarla en el teléfono

Primero hay que publicarla (ver la sección siguiente). Con el enlace de GitHub Pages:

**iPhone:** abre el enlace en **Safari** (no en Chrome), toca el botón Compartir y elige *Agregar a pantalla de inicio*. Ábrela una vez con conexión para que se guarde; después funciona en modo avión.

**Android:** abre el enlace en **Chrome**, toca el menú de tres puntos y elige *Instalar app* (o *Agregar a pantalla principal*).

## Publicarla gratis en GitHub Pages

1. Crea una cuenta en github.com si no tienes.
2. Crea un repositorio nuevo, por ejemplo `calcu`, marcado como público.
3. Sube todos los archivos de esta carpeta (botón *Add file → Upload files*, arrastra todo incluyendo las carpetas `lib` e `icons`).
4. En el repositorio ve a *Settings → Pages*. En *Source* elige *Deploy from a branch*, rama `main`, carpeta `/ (root)`, y guarda.
5. En uno o dos minutos la app queda en `https://TU-USUARIO.github.io/calcu/`. Ese es el enlace para ti y tus compañeros.

Cada vez que publiques cambios, sube el número en `VERSION` dentro de `sw.js` (por ejemplo `calcu-v0.1.1`). Así los teléfonos detectan la versión nueva; se aplica al cerrar y volver a abrir la app.

## Probarla en tu computadora

Hace falta un servidor local (abrir `index.html` con doble clic no activa el modo sin conexión):

```bash
cd calcu
python3 -m http.server 8000
```

Luego abre `http://localhost:8000`.

## Cómo está hecha

Todo vive en un solo archivo, `index.html` (HTML, CSS y JavaScript sin compilación), más tres librerías incluidas en `lib/`:

| Librería | Uso | Licencia |
|---|---|---|
| math.js 15.2.0 | Cálculo numérico, matrices, complejos, unidades | Apache-2.0 |
| Nerdamer 1.1.13 | Álgebra simbólica (CAS) | MIT |
| MathJax 3.2.2 | Presentación de fórmulas | Apache-2.0 |

`sw.js` guarda la app en el teléfono y `manifest.webmanifest` le da nombre e ícono al instalarla.

## Convenciones al escribir

El punto es el separador decimal y la coma separa argumentos: `round(3.14159, 2)`. En Ajustes puedes elegir que los resultados se muestren como `1.234,5` o `1 234.5`. Las gráficas siempre usan radianes. En Cálculo se asigna con `=` y en CAS con `:=`.

## Hoja de ruta

- **0.2:** editor en formato de libro de texto (fracciones y raíces que se escriben como se ven), tabla de valores y gráficas de ecuaciones implícitas y desigualdades (tipo *Advanced Graphing* de la HP Prime).
- **0.3:** hojas de cálculo ligadas a gráficas y estadística de dos variables con regresiones.
- **0.4:** documentos con páginas tipo TI-Nspire, deslizadores y gráficas 3D.
- **0.5:** motor CAS Giac (el mismo de la HP Prime) en WebAssembly, programación en Python y modo RPN.

## Licencia

GPL-3.0. Puedes usarla, modificarla y compartirla; las versiones modificadas que distribuyas deben seguir siendo libres. Se eligió GPL-3.0 para poder incorporar Giac más adelante sin cambiar de licencia. Las licencias de las librerías incluidas están en `lib/licenses/`.
