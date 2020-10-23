insert into users (
    full_name,
    email,
    password,
    tutor
) values (
    ${fullName},
    ${email},
    ${hash},
    ${tutor}
)
returning user_id, full_name, email, tutor;