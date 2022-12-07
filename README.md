# Nodejs Postgresql Samples

## Prerequisite (Ubuntu)

- PostgreSQL client 13 install

```bash
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" |sudo tee  /etc/apt/sources.list.d/pgdg.list
sudo apt update
sudo apt install -y postgresql-client-13
```

- Set environment variables

```bash
export PGUSER=dbuser
export PGHOST=database.server.com
export PGPASSWORD=secretpassword
export PGDATABASE=mydb
export PGPORT=5432
```

- Install nodejs libraries

```bash
yarn install
```

## Demonstrate

```bash
yarn start

curl http://localhost:8080/v1/query
```
