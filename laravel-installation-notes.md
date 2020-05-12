h1. Instalacion  Puesta a punto


Crear el archivo que apunta el servidor al proyecto (VirtualHost)
<pre>
cd /etc/apache2/sites-available
sudo nano laravel.conf
</pre>

*Contenido laravel.conf*
<pre>
<VirtualHost *:80>
    ServerName dominio.com

    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/NOMBREDELPROJECTO/public

    <Directory /var/www/html/NOMBREDELPROJECTO>
        AllowOverride All
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
</pre>

h3. Desmontar VirtualHost por defecto
(O el que esté activo al momento)

<pre>
sudo a2dissite 000-default.conf
</pre> 


h3. Montar el archivo creado (VirtualHost)

<pre>
sudo a2ensite laravel.conf
</pre>

h3. Activar el mod_rewrite

<pre>
sudo a2enmod rewrite
> reiniciar
sudo service apache2 restart
</pre>

h3. Permisos

Dar permisos a las siguientes carpetas de laravel
<pre>
sudo chgrp -R www-data storage bootstrap/cache
sudo chmod -R ug+rwx storage bootstrap/cache


sudo chgrp -R www-data public/webimages;
sudo chmod -R ug+rwx public/webimages;
sudo chgrp -R www-data public/images/users;
sudo chmod -R ug+rwx public/images/users

sudo chgrp -R www-data public/images;
sudo chmod -R ug+rwx public/images;

</pre>


h3. COMPOSER (Vendors) y NPM (node_modules)
<pre>
composer install
npm install
</pre>

h3. Generar Llave
<pre>
php artisan key:generate
</pre>


h3. MIGRACIONES
Para migrar desde las carpetas core:
<pre>
sudo php artisan make:migration nombre_de_la_migracion --path=database/migrations/Core
sudo php artisan migrate --path=database/migrations/Core
</pre>

Refrescar migraciones
<pre>
php artisan migrate:refresh --seed
</pre>


h3. SEEDS
Es necesario rellenar la base de datos ya que contiene las rutas, roles, middlewares y otros datos importantes para que el sistema funcione.
sudo php artisan migrate --path=database/migrations/Core
<pre>
php artisan db:seed --class="Core/DatabaseSeeder"
</pre>

h3. Comprobar si la siguiente fila está presente:
En: Providers\AppServiceProviders
<pre>
public function boot()
{
 // >   Schema::defaultStringLength(191);
}
</pre>