const Course = require('../models/Course');

class CourseController{
    detail(req, res, next){
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('news',{
                    course: course,
                })
            })
            .catch(next);
    }
}

module.exports = new CourseController();