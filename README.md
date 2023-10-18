# Introduccion 

En la era digital actual, donde todo está al alcance de un toque, encontrar el trabajo adecuado no debería ser una tarea que consuma tiempo y recursos. Presentamos Zen-Jobs, la solución móvil definitiva diseñada específicamente para conectar talentos con oportunidades, donde quiera que estén.

Con una interfaz intuitiva y fácil de usar, nuestra plataforma no solo facilita la búsqueda de empleo, sino que también personaliza la experiencia, asegurando que los candidatos encuentren posiciones que se alineen con sus habilidades, intereses y aspiraciones profesionales. Del mismo modo, las empresas pueden descubrir talentos que se ajusten perfectamente a sus necesidades, acelerando el proceso de selección y garantizando resultados de calidad.

Características principales:

Búsquedas Personalizadas: Encuentra empleos basados en ubicación, habilidades, industria o nivel de experiencia.
Perfiles Enriquecidos: Destaca tus habilidades, logros y experiencia con perfiles detallados.
Notificaciones en Tiempo Real: Nunca te pierdas una oportunidad con alertas instantáneas sobre nuevas ofertas o actualizaciones.
Conexión Directa con Empleadores: Chatea en tiempo real con reclutadores y gestiona tus entrevistas directamente desde la aplicación.
Ya sea que estés buscando dar el siguiente paso en tu carrera o simplemente explorando nuevas oportunidades, Zen-Jobs es tu compañero ideal en el viaje hacia el éxito profesional. Únete a nuestra creciente comunidad y descubre cómo podemos transformar juntos el panorama de la búsqueda de empleo.



# Getting Started
1.	Proceso de instalacion:

**Instala Ionic CLI:**
El CLI de Ionic (Interfaz de Línea de Comandos) es una herramienta que te permite iniciar nuevos proyectos, servir aplicaciones a nivel local, y construir tu proyecto para despliegue.
***npm install -g @ionic/cli***

**Descarga el repositorio del proyecto:**
Al descargar el repositorio estas creando el nuevo trabajo en tu maquina y prdras utilizarlo sin problema
***git clone https://dev.azure.com/ANDES-MISO/proyecto-final/_git/frontend**

**Instala las librerias:**
Una vez el proyecto esta en tu maquina deberas instalar las librerias que necesita para su correcto funcionamiento, para esto debes ingresar a la carpeta raiza del proyecto y a traves de una linea de comandos escribir el siguiente codigo.
***npm install***

**Inicia el proyecto:**
Una vez instalada usa el siguiente comando para compilar el proyecto
***ionic serve***

# Construccion
Los pasos para la generacion de la Apk son los siguientes:
**1** En la raiz del proyecto usar el comando ***ionic build***
**2** En la raiz del proyecto usar el comando ***npx cap copy android***
**3** ingresar a la carpeta android con el comando ***cd android***
**3** En la carpeta android ingresar el comando ***gradlew bundleRelease***
**4** Una vez finalizados estos paso se generara un archivo aab, es necesario extraer el apk de este archivo para ello necesitamos tener instalado **bundletools** y usar el comando ***java -jar C:/Users/Home/bundletool/bundletool-all-1.15.4.jar build-apks --bundle=C:/RUTA_DONDE_ESTA_EL_ARCHIVO/app-release.aab --output=C:/RUTA_DONDE_SE_GUARDA_EL_APKS/app-release.apks***
**5** Esto genera un archivo apks en donde es necesario extraer el apk, se puede realizar de dos formas, ingresando a la apks ya que se puede abrir con un formato zip y extrayendo el apk de nombre base-master.apk o con el comando ***java -jar C:/Users/Home/bundletool/bundletool-all-1.15.4.jar extract-apks --apks=C:/RUTA_DONDE_ESTA_EL_APK/app-release.apks --output-dir=C:/RUTA_DONDE_SE_GUARDA_EL_APK --device-spec=C:RUTA_DEL_JSON_DE_CONFIGURACION/device-spec.json***. Para este paso necesitaremos un archivo json con la configuracion de android.
