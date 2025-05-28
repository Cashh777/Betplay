# Usa una imagen oficial de PHP con Apache
FROM php:8.1-apache

# Instala extensiones de PHP que puedas necesitar
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copia el código de tu proyecto a la carpeta raíz del servidor web
COPY . /var/www/html/

# Da permisos necesarios a los archivos
RUN chown -R www-data:www-data /var/www/html/ && chmod -R 755 /var/www/html/

# Expone el puerto 80 (usado por Apache)
EXPOSE 80
