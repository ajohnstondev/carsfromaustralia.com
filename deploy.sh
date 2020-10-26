rm -rf /var/www/html/*
cp -rf /var/www/carsfromaustralia/frontend/dist/* /var/www/html/
 
service nginx restart
