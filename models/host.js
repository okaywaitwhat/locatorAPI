const mongoose = require("mongoose");

const HostSchema = new mongoose.Schema({
  hostId: {
    type: String,
    required: [true, "Please add a host ID"],
    unique: true,
    trim: true,
    maxlength: [10, "Host ID must be less than 10 characters"]
  },
  address: {
    type: String,
    require: [true, "Please add ana address"]
  },
  location: {
    type: {
      type: String,
      emun: ["Point"]
    },
    coordinates: {
      type: [Number],
      index: "2dsphere"
    },
    formattedAddress: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Host", HostSchema);
