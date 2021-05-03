CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(50) check(lenght > 2),
    email text not null unique,
    password text check(lenght > 6)
)