select * from users u
join tutor_student_junction ts on u.user_id = ts.tutor_id
where ts.tutor_id = ${id}; 