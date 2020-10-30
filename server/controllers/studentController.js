//This controller handles all requests regarding students, including adding new students, getting 
//students from the db, and removing students from the db
const bcrypt = require('bcryptjs'),
      nodmailer = require('nodemailer'),
      {EMAIL, PASSWORD} = process.env;

module.exports = {
    getStudents: (req, res) => {
        const {id} = req.params,
              db = req.app.get('db');

        db.student.get_students({id})
        .then(students => res.status(200).send(students))
        .catch(err => res.status(500).send(err));
    },
    addStudent: async(req, res) => {
        const {fullName, email, id} = req.body,
              db = req.app.get('db');

        //need to create a random password, then insert the student info into the db
        let randStr = Math.random().toString(36).substr(2, 8),
            salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(randStr, salt);

        const studentId = await db.student.add_student({fullName, email, password: hash});
        db.student.tutor_student_junction({id, studentId: studentId[0].user_id});
        
        //need to send the student an email letting them know they've been added to the platform
        try {
            let transporter = nodmailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                service: 'gmail',
                secure: false,
                requireTLS: true,
                auth: {
                    user: EMAIL,
                    pass: PASSWORD
                }
            })

            let info = await transporter.sendMail({
                from: `Tutorlabs <${EMAIL}>`,
                to: email,
                subject: 'Welcome to Tutorlabs',
                text: 'You have been added to the Tutorlabs platform by your tutor',
                html: `<div>You have been added to the Tutorlabs platform by your tutor</div>`
            }, (err, res) => {
                if(err){
                    console.log(err);
                } else {
                    res.status(200).send(info);
                }
            })
        } catch(err){
            res.status(500).send(err);
        }

        res.sendStatus(200);
    },
    changePassword: async(req, res) => {
        const {password, id} = req.body,
              db = req.app.get('db');

        const foundUser = await db.auth.check_user({email: null, id});
        if(!foundUser[0]){
            return res.status(400).send('No user')
        }

        const authenticated = bcrypt.compareSync(password, foundUser[0].password);
        if(!authenticated){
            return res.status(401).send('Old password is incorrect')
        }

        let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt);

        const newUser = db.student.change_password({password, id});
        req.session.user = newUser[0];
        res.status(200).send(req.session.user);
    },
    removeStudent: (req, res) => {
        //This will remove a student and their accompanying information (schedule and notes)
    }
}