insert into users (
    full_name,
    email,
    password,
    tutor
) values (
    ${fullName},
    ${email},
    ${password},
    false
)
returning user_id;