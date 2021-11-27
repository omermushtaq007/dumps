import mongoose from 'mongoose';
const vendorSchema = new mongoose.Schema({
    slug: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    certification: {certificate: {
        trim: true,
        type: String,
    }}
    
}, {
    timestamps: true
});

// before save lowercase the slug value
vendorSchema.pre('save', function (next) {
    this.slug = this.slug.toLowerCase();
    next();
});

// Global model
const Vendor = mongoose.model('vendors', vendorSchema);
export default Vendor;