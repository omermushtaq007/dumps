import mongoose from 'mongoose';

const CertificateSchema = new mongoose.Schema({
    certificateName: {
        type: String,
        require: true,
    },
    status: {
        type: Boolean,
        require: true,
        default: true,
    },
    slug_Id: { type: mongoose.SchemaTypes.ObjectId, ref: 'vendors' },
}, {
    timestamps: true
});

// before save data handler.
CertificateSchema.pre('save', function (next) {
    this.certificateName = this.certificateName.toLowerCase();
    next();
});

// Global model
const Certificate = mongoose.model('certificates', CertificateSchema);
export default Certificate;