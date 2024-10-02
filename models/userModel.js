const mongoose = require("mongoose");

const identitySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
  },
  { collection: "IdentityInfo" }
);

const contactSchema = new mongoose.Schema(
  {
    address: {
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
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/, // regex for email validation
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    socialLinks: {
      linkedin: {
        type: String,
        required: true,
      },
      twitter: {
        type: String,
        required: true,
      },
      instagram: {
        type: String,
        required: true,
      },
      facebook: {
        type: String,
        required: true,
      },
    },
  },
  { collection: "ContactInfo" }
);

const financeSchema = new mongoose.Schema(
  {
    bankInfo: {
      accountNumber: {
        type: String,
        required: true,
      },
      creditCardNumber: {
        type: String,
        required: true,
      },
      debitCardNumber: {
        type: String,
        required: true,
      },
    },

    occupationTitle: {
      type: String,
      required: true,
    },
    income: {
      type: Number,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    companyORplatform: {
      type: String,
      required: true,
    },
  },
  { collection: "FinanceInfo" }
);

const IdentityModel = mongoose.model("IdentityInfo", identitySchema);
const ContactModel = mongoose.model("ContactInfo", contactSchema);
const FinanceModel = mongoose.model("FinanceInfo", financeSchema);
