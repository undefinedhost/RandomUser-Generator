const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { collection: "Address" }
);

const basicInfoSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    dateofbirth: {
      type: Date,
      required: true,
    },
  },
  { collection: "BasicInformation" }
);

const contactInfoSchema = new mongoose.Schema(
  {
    emailaddress: {
      type: String,
      required: true,
      match: /.+\@.+\..+/, // regex for email validation
    },
    phonenumber: {
      type: String,
      required: true,
    },
  },
  { collection: "ContactInformation" }
);

const occupationinfoSchema = new mongoose.Schema(
  {
    occupationtitle: {
      type: String,
      required: true,
      // enum : ['Job', 'Content Creator', 'Businessman', 'Freelancer', 'Engineer', 'Teacher']
    },
    "company/platform": {
      type: String,
      required: true,
    },
    income: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { collection: "OccupationDetails" }
);

const Address = mongoose.model("Address", addressSchema);
const BasicInfo = mongoose.model("BasicInformation", basicInfoSchema);
const ContactInfo = mongoose.model("ContactInformation", contactInfoSchema);
const occupationInfo = mongoose.model(
  "OccupationDetails",
  occupationinfoSchema
);
