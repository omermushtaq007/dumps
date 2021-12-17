import { validationResult } from 'express-validator'
import Exam from '../../model/Exam.js'
import Vendor from '../../model/Vendor.js'

// create an exam
export async function createExam(req, res) {
  // validate request
  const errors = validationResult(req)

  // if not required fields
  if (!errors.isEmpty())
    res.status(400).json({
      errors: errors.array(),
    })

  try {
    // check if exam code already exists
    let exam = await Exam.findOne({ exam_code: req.body.examCode })
    if (exam) {
      return res.status(400).json({
        message: 'Exam code already exists',
      })
    }
    exam = new Exam({
      slug_id: req.body.slug_id,
      certificate_id: req.body.certificate_id,
      exam_code: req.body.examCode,
      exam_name: req.body.examName,
      exam_date: req.body.examDate,
      questions: req.body.question,
      price: req.body.price,
      status: req.body.status,
    })
    await exam.save()
    res.status(200).json({
      message: 'Exam created successfully',
    })
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    })
  }
}

// find exams
export async function findExams(req, res) {
  try {
    const exams = await Exam.find({ _id: req.params._id })
    res.status(200).json({ exams })
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    })
  }
}
