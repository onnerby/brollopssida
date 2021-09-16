# Bröllopssida

Sidan kräver node och npm för att kunna byggas.

Checka ut och kör:
```
cd brollopssidan
npm i
```

För att bygga sidan medans man utvecklar sidan kör
```
npm run watch
```
Alla fileer lägger sig i `build`-mappen

När man är klar, kör
```
npm run build
```

Ställ in nginx på att peka din domän på build-mappen.
Kan tex see ut såhär
```
server {
        server_name brollopssidan.se;
        listen 80;

        root /var/www/brollopssidan/build/;
        access_log  /var/log/nginx/brollopssidan.access.log;

        client_max_body_size 50M;

        gzip_static on;

        index index.html;

        location / {
                try_files $uri $uri/ @rewriteswed;
        }

        location = /index.html {
                add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
                if_modified_since off;
                expires -1;
                etag off;
        }

        location @rewriteswed {
                rewrite ^(.+)$ /index.html last;
        }
}

```