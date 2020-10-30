update users
set password = ${password}
where user_id = ${id};

select user_id, full_name, email, tutor from users
where user_id = ${id};