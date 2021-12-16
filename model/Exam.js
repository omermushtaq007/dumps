import mongoose from 'mongoose'
/**
 * @todo: Add the following fields to the schema:
 * @todo create ref between slug and certificate
 */
const examSchema = new mongoose.Schema(
  {
    exam_name: {
      type: String,
      require: true,
    },
    exam_code: {
      type: String,
      require: true,
    },
    exam_date: {
      type: Date,
    },
    questions: {
      type: Number,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    slug_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'vendors',
      required: true,
    },
    certificate_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'certificates',
      required: true,
    },
  },
  { timestamps: true },
)

const Exam = mongoose.model('exams', examSchema)

export default Exam
