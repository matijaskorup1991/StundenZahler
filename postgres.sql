CREATE TABLE users (
    id serial PRIMARY KEY,
    username varchar(50) not null check(lenght > 2),
    email varchar(30) not null unique,
    password varchar(30) not null check(lenght > 5)
);
CREATE TABLE months (
    id serial PRIMARY KEY,
    created_at timestamp with time zone default current_timestamp
);