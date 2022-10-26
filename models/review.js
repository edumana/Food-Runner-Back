import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  stars: {type: Number, min: 1, max: 5},
  review: String,
  customer: {type: Schema.Types.ObjectId, ref: "Profile"},
},{
  timestamps: true,
})

const Review = mongoose.model('Review', reviewSchema)

export { Review }