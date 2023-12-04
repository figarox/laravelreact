# Użyj lekkiego obrazu bazowego
FROM node:14-alpine as build

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Kopiuj pliki package.json i zainstaluj zależności
COPY package*.json ./
RUN npm install

# Kopiuj pozostałe pliki projektu
COPY . .

# Buduj aplikację
RUN npm run build

# Faza produkcyjna z Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
# Skopiuj niestandardową konfigurację nginx, jeśli istnieje
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]