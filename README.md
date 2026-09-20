# MR Soluciones Eléctricas

Landing page responsive construida con React + Vite, preparada para desplegarse en GitHub Pages.

## 1. Instalar dependencias

```bash
npm install
```

## 2. Ejecutar en desarrollo

```bash
npm run dev
```

Abre la dirección local que muestre Vite, normalmente `http://localhost:5173`.

## 3. Personalizar el contenido

Edita `src/main.jsx` para cambiar:

- Nombre y descripción de los servicios.
- Proyectos, categorías e imágenes.
- Teléfono, correo, ubicación y redes sociales.

Edita `src/styles.css` para ajustar tamaños, espacios y estilos.

El logo está en `public/logo-mr.png`.

## 4. Desplegar en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `mr-soluciones-electricas`.
2. En `package.json`, agrega la propiedad `homepage` con la URL de tu repositorio publicado si deseas usarla con `gh-pages`.
3. Inicializa Git y sube el proyecto:

```bash
git init
git add .
git commit -m "Inicializa sitio web MR Soluciones Eléctricas"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/mr-soluciones-electricas.git
git push -u origin main
```

4. Ejecuta:

```bash
npm run deploy
```

5. En GitHub entra a **Settings > Pages** y selecciona la rama `gh-pages` como fuente de publicación.

> Importante: reemplaza los datos de contacto y las imágenes de ejemplo antes de publicar.
