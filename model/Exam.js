import mongoose from 'mongoose'
/**
 * @todo: Add the following fields to the schema:
 * @todo create ref between slug and certificate
 */
const examSchema = new mongoose.Schema({})

const Exam = mongoose.model('exams', examSchema)

export default Exam
