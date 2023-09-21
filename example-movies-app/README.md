# Movies App

Esta es una aplicación web de ejemplo para mostrar una lista de películas. La aplicación utiliza un servidor backend en Node.js y una interfaz de usuario en React.js.

## Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- Node.js: [Descargar e instalar Node.js](https://nodejs.org/)
- PostgreSQL: [Descargar e instalar PostgreSQL](https://www.postgresql.org/)

## Configuración

### 1. Clonar el Repositorio

Clona este repositorio en tu máquina local usando Git:

```bash
git clone https://github.com/tuusuario/example-movies-app.git

#luego pasa a la carpeta del repositorio

cd example-movies-app
```

### 2. Configurar la Base de Datos

Asegúrate de tener PostgreSQL instalado y ejecutándose. Luego, crea una base de datos llamada <span class="hljs-string">movies_example</span>.

### 3. Configurar las Variables de Entorno

Crea un archivo .env en la carpeta api para configurar las variables de entorno del servidor backend. Debes configurar las siguientes variables:

```bash
DB_USER=usuario_de_postgresql
DB_HOST=localhost
DB_DATABASE=movies_example
DB_PASSWORD=tu_contraseña_de_postgresql
DB_PORT=5432      // puerto por defecto de PostgreSQL
```

### 4. Instalar dependencias

Instala los siguientes paquetes en el servidor api y en el cliente:

```bash
npm install
```

### 5. Ejecutar

Ejecuta el servidor api y el cliente.

```bash
npm start
```

## Contribuciones

Si deseas contribuir a este proyecto, ¡estoy abierto a colaboraciones!
