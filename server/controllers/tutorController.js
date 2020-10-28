module.exports = {
    getTutorInfo: (req, res) => {
        //This will grab the tutors students and schedule
    },
    addStudent: (req, res) => {
        //This will add a student into the database users table, as well as insert them into the
        //junction table. It will also use NodeMailer to send an email to the student letting them
        //know they've been added to the platform
    },
    removeStudent: (req, res) => {
        //This will remove a student and their accompanying information (schedule and notes)
    }
}