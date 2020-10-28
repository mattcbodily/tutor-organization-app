create table if not exists users (
    user_id serial primary key,
    full_name varchar(100) not null,
    email varchar(150) not null,
    password varchar(250) not null,
    tutor boolean not null
);

create table if not exists tutor_student_junction (
    junction_id serial primary key,
    tutor_id int references users(user_id) not null,
    student_id int references users(user_id) not null,
    lesson_day varchar(10),
    lesson_time varchar(10),
    lesson_location varchar(200)
);