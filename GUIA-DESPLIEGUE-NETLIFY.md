# Guia para docentes: publica tu asistente virtual

Esta guia explica como desplegar tu propio asistente virtual de curso en Netlify. No necesitas saber programar, usar la terminal ni instalar nada. Solo necesitas una cuenta de correo y 15-20 minutos.

## Antes de empezar

Vas a necesitar:

1. Un navegador web (Chrome, Firefox, Edge, Safari).
2. Una cuenta de correo electronico (Gmail, Outlook, Yahoo, etc.).
3. Una API key de Kimi (Moonshot). La obtienes en https://platform.moonshot.ai. Es gratis para empezar.

El flujo usa dos servicios:

- **GitHub**: donde se guarda una copia personal del proyecto (necesario para que puedas personalizarla).
- **Netlify**: donde se publica el asistente para que este accesible desde internet.

---

## Paso 1: Crear cuenta en GitHub

1. Abre https://github.com/signup
2. Ingresa tu correo electronico. **Usa el mismo correo que usaras en Netlify** (Paso 2).
3. Crea una contrasena segura.
4. Elige un nombre de usuario (sera visible en la URL de tu repositorio, por ejemplo `https://github.com/maria-docente/asistente-docente`).
5. Resuelve el captcha y verifica tu correo con el codigo que GitHub te envia.

## Paso 2: Crear cuenta en Netlify

1. Abre https://app.netlify.com/signup
2. Click en **Sign up** y elige la opcion que prefieras (Google, GitHub, o email).
3. **Si te registraste con Google**, el correo debe coincidir con el de GitHub.
4. **Si te registraste con email**, asegurate de usar el mismo correo que en GitHub.

## Paso 3: Hacer una copia personal del proyecto (fork)

Un "fork" es una copia del proyecto en tu propia cuenta de GitHub. Asi puedes personalizarla sin afectar el original.

1. Abre https://github.com/osber00/asistente-docente
2. Arriba a la derecha, click en el boton **Fork**.
3. Si te pide elegir donde hacer el fork, dejalo en tu cuenta personal.
4. Espera unos segundos. GitHub te llevara a tu copia, con una URL como:
   ```
   https://github.com/TU-USUARIO/asistente-docente
   ```
   A partir de ahora, **TU-USUARIO** es tu nombre de usuario de GitHub.

## Paso 4: Editar el boton del README para que apunte a TU copia

El boton "Deploy to Netlify" del README apunta al repositorio original. Necesitamos cambiarlo para que use tu fork.

1. En tu fork, click en el archivo `README.md`.
2. Click en el icono de lapiz (✏️) arriba a la derecha.
3. Busca esta linea dentro del link del boton:
   ```
   https://github.com/osber00/asistente-docente
   ```
   y cambiala por:
   ```
   https://github.com/TU-USUARIO/asistente-docente
   ```
4. Scroll abajo, click **Commit changes**.
5. Vuelve a la pagina principal del repositorio (click en el nombre del repo arriba a la izquierda).

## Paso 5: Personalizar el contenido del curso (opcional pero recomendado)

Por defecto, el asistente viene con un curso de ejemplo. Para configurar el tuyo tienes dos opciones:

### Opcion A: Editar `course-data.json` directamente en GitHub

1. En tu fork, click en el archivo `course-data.json`.
2. Click en el icono de lapiz (✏️).
3. Edita los valores entre comillas. Por ejemplo:
   - `"courseName"`: nombre de tu curso
   - `"teacherName"`: tu nombre
   - `"mainPrompt"`: instrucciones para el asistente
   - `"courseInfo"`: el bloque de informacion del curso
4. **Cuidado**: respeta las comillas, comas y llaves. Si te equivocas, GitHub te mostrara un error.
5. Scroll abajo, click **Commit changes**.

### Opcion B: Usar el formulario visual `config.html`

Una vez que el sitio este desplegado (Paso 6 en adelante), puedes:

1. Abre `https://tu-sitio.netlify.app/config.html`.
2. Ingresa tu `CONFIG_ACCESS_CODE`.
3. Llena el formulario visualmente.
4. Click en **Descargar configuracion**.
5. Vuelve a GitHub, abre `course-data.json` con el lapiz, **borra todo el contenido**, pega el del archivo descargado, y commitea.

## Paso 6: Desplegar el asistente en Netlify

Ahora viene la publicacion.

1. En tu fork, scroll hasta el README y busca el boton **Deploy to Netlify**.
2. Click en el boton. Se abrira una nueva pestana con el wizard de Netlify.
3. Si te pide conectar a GitHub, autoriza a Netlify.
4. Netlify detectara tu repositorio y te mostrara la configuracion. **No cambies nada**, solo verifica que diga tu fork.
5. Click **Deploy site**.
6. Espera 1-2 minutos. Veras una pantalla de progreso con los pasos del build.
7. Al terminar, Netlify te muestra la URL de tu sitio, algo como:
   ```
   https://random-name-12345.netlify.app
   ```

## Paso 7: Configurar las variables de entorno

Las variables de entorno son las claves secretas que necesita el asistente para funcionar.

1. En el dashboard de Netlify, abre tu sitio.
2. Ve a **Site configuration** > **Environment variables**.
3. Click **Add a variable** y agrega la primera:

   | Campo | Valor |
   |-------|-------|
   | Key | `MOONSHOT_API_KEY` |
   | Scopes | marca **Builds**, **Functions** y **Runtime** |
   | Values | click **Add value** > contexto **Production** > pega tu API key de Kimi |

4. Click **Add a variable** y agrega la segunda:

   | Campo | Valor |
   |-------|-------|
   | Key | `CONFIG_ACCESS_CODE` |
   | Scopes | marca **Builds**, **Functions** y **Runtime** |
   | Values | contexto **Production** > escribe el codigo que quieras usar (ej. `MiClave2026!`) |

## Paso 8: Redesplegar para activar las variables

Las variables no se aplican hasta hacer un nuevo deploy:

1. En el menu lateral, ve a **Deploys**.
2. Arriba a la derecha, click **Trigger deploy**.
3. Elige **Clear cache and deploy site**.
4. Espera 1-2 minutos.

## Paso 9: Probar el sitio

1. Abre `https://random-name-12345.netlify.app` (la URL de tu sitio).
2. Escribe una pregunta en el chat, por ejemplo:
   - `¿Cuantas unidades tiene el curso?`
   - `¿Como se evalua?`
3. Si el asistente responde coherentemente, **el despliegue esta completo**.
4. Tambien prueba `https://random-name-12345.netlify.app/config.html` e ingresa tu `CONFIG_ACCESS_CODE`. Deberia abrir el formulario.

## Paso 10 (opcional): Personalizar la URL

Por defecto tu sitio tiene una URL aleatoria. Puedes cambiarla:

1. **Site configuration** > **Site details**.
2. Click **Change site name**.
3. Elige un nombre (ej. `asistente-matematicas-2026`).
4. Tu nueva URL sera `https://asistente-matematicas-2026.netlify.app`.

---

## Actualizaciones futuras

### Cambiar el contenido del curso

1. Edita `course-data.json` en tu fork de GitHub (o usa el formulario `config.html` y sube el archivo descargado).
2. Haz commit.
3. Netlify redespliega **automaticamente** (no tienes que hacer nada mas). Espera 1-2 minutos y la version nueva estara en tu URL.

### Cambiar las variables de entorno

1. **Site configuration** > **Environment variables**.
2. Edita o agrega variables.
3. **Deploys** > **Trigger deploy** > **Clear cache and deploy site**.

---

## Solucion de problemas

### El chat dice "El servicio de chat no esta disponible"

`MOONSHOT_API_KEY` no esta configurada o no se redesplego. Revisa los pasos 7 y 8.

### El formulario de config rechaza el codigo correcto

`CONFIG_ACCESS_CODE` no esta definida o no se redesplego. Mismos pasos.

### El sitio dice "Page not found" al abrirlo

El build fallo. Ve a **Deploys** > click en el ultimo deploy > revisa si hay pasos en rojo. Comparte el error con quien te dio la plantilla.

### El boton "Deploy to Netlify" crea un sitio con la URL del repositorio equivocado

Probablemente no actualizaste la URL en el README (Paso 4). Edita el README, corrige la URL, commit, y vuelve a hacer click en el boton.

### Quiero conectar un dominio personalizado (ej. `asistente.micolegio.edu`)

1. Compra o configura el dominio donde tu proveedor habitual.
2. En Netlify: **Domain management** > **Add a domain**.
3. Sigue las instrucciones para apuntar el DNS.

---

## Resumen rapido (para los que ya entienden)

```text
1. Cuenta en github.com (mismo correo que Netlify)
2. Cuenta en app.netlify.com
3. Fork de github.com/osber00/asistente-docente
4. Editar README.md: cambiar osber00 por tu usuario
5. (Opcional) Editar course-data.json
6. Click en "Deploy to Netlify" del README
7. Site configuration > Environment variables: MOONSHOT_API_KEY y CONFIG_ACCESS_CODE
8. Deploys > Trigger deploy > Clear cache and deploy site
9. Probar la URL
```
