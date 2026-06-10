# Guia de despliegue en Netlify para docentes

Esta guia esta pensada para docentes que no usan GitHub y van a publicar el asistente subiendo un archivo `.zip` directamente a Netlify.

## 1. Que necesita el docente

Antes de comenzar, el docente debe tener:

1. Una cuenta en Netlify.
2. Una API key de Kimi.
3. Un codigo de acceso para proteger `config.html`.
4. El archivo `.zip` del proyecto.

## 2. Configuracion inicial recomendada

La plantilla queda preparada inicialmente con:

1. Proveedor: `Kimi`
2. Modelo: `kimi-k2.5`

## 3. Configurar el asistente antes de publicar

1. Descomprime el `.zip` del proyecto en tu equipo.
2. Abre el archivo `config.html`.
3. Ingresa el codigo de acceso definido para tu entorno de prueba.
4. Completa:
   - nombre del curso,
   - nombre del docente,
   - color institucional,
   - prompt principal,
   - bloque unico de informacion del curso.
5. Verifica que el proveedor sea `Kimi 2.5`.
6. Descarga la configuracion.
7. Reemplaza el archivo `course-data.json` de la carpeta del proyecto por el archivo descargado.

## 4. Crear el archivo .zip para Netlify

Una vez terminada la configuracion:

1. Selecciona todos los archivos y carpetas del proyecto.
2. Comprime el contenido en un archivo `.zip`.

Importante:

1. El `.zip` debe contener los archivos del proyecto en la raiz.
2. No debe contener una carpeta adicional envolviendo todo.

Dentro del `.zip` deben verse directamente archivos como:

```text
index.html
config.html
course-data.json
netlify.toml
netlify/
```

## 5. Subir el .zip a Netlify

1. Inicia sesion en Netlify.
2. En el panel principal, busca la opcion para agregar un nuevo sitio.
3. Elige la opcion de desplegar manualmente un sitio.
4. Arrastra el archivo `.zip` o subelo desde tu equipo.

Netlify publicara el sitio automaticamente.

## 6. Configurar variables de entorno en Netlify

Despues de subir el sitio:

1. Entra al sitio creado en Netlify.
2. Ve a `Site configuration`.
3. Ve a `Environment variables`.
4. Agrega estas variables:

```text
CONFIG_ACCESS_CODE=tu_codigo_seguro
MOONSHOT_API_KEY=tu_api_key_de_kimi
```

Notas:

1. `CONFIG_ACCESS_CODE` protege el acceso a `config.html`.
2. `MOONSHOT_API_KEY` permite que funcione Kimi.

## 7. Volver a desplegar despues de agregar variables

Despues de guardar las variables:

1. Ve a la seccion de despliegues del sitio.
2. Lanza un nuevo deploy o vuelve a subir el `.zip`.

Esto asegura que las funciones de Netlify lean las nuevas variables de entorno.

## 8. Probar el sitio publicado

Prueba al menos estas rutas:

1. Sitio principal:
   `https://tu-sitio.netlify.app`
2. Configuracion:
   `https://tu-sitio.netlify.app/config.html`

Pruebas recomendadas en el chat:

1. `¿Hay foros?`
2. `¿Cuantas unidades tiene el curso?`
3. `¿Que lecturas recomendadas hay?`
4. `¿Como se evalua el curso?`

## 9. Probar seguridad de configuracion

En `config.html`:

1. Prueba con el codigo correcto.
2. Prueba con un codigo incorrecto.

Resultado esperado:

1. Con codigo correcto, se abre el formulario.
2. Con codigo incorrecto, se rechaza el acceso.

## 10. Si el docente quiere actualizar el asistente luego

1. Descomprime de nuevo el proyecto localmente.
2. Edita `config.html`.
3. Descarga la nueva configuracion.
4. Reemplaza `course-data.json`.
5. Crea un nuevo `.zip`.
6. Sube nuevamente el `.zip` a Netlify.

## 11. Variables necesarias para esta version

Para usar Kimi en produccion:

```text
CONFIG_ACCESS_CODE=
MOONSHOT_API_KEY=
```

## 12. Recomendacion final para docentes

Antes de compartir el enlace con estudiantes:

1. Verifica que el contenido del curso este bien redactado.
2. Haz al menos 5 preguntas reales del curso.
3. Confirma que Kimi responde correctamente.
4. Guarda el `.zip` final como respaldo.
