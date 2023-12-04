# Użyj obrazu PHP z Apache
FROM php:8.2-apache

# Aktualizacja pakietów i instalacja zależności
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl

# Instalacja rozszerzeń PHP
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Włączenie mod_rewrite dla Apache
RUN a2enmod rewrite

# Pobieranie i instalacja Composera
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Ustawienie katalogu roboczego
WORKDIR /var/www/html

# Kopiowanie plików aplikacji
COPY . /var/www/html

# Pozwolenie na uruchomienie Composera jako root (opcjonalnie)
ENV COMPOSER_ALLOW_SUPERUSER=1

# Uruchomienie Composera
RUN composer install --no-dev --optimize-autoloader
# Nadawanie odpowiednich uprawnień
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage

# Oczyszczenie cache
RUN php artisan optimize

EXPOSE 80