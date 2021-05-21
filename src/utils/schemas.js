import * as yup from "yup";

export const loginSchema = yup.object().shape({
  identifier: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export const contactSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "Message must be more than 10 characters"),
});

export const productSchema = yup.object().shape({
  name: yup.string().required("Please enter a name"),
  price: yup.number().required("Please enter a price"),
  image_url: yup.string().required("Please enter an image URL"),
  description: yup.string().required("Please enter a description"),
  capacity: yup
    .number()
    .required("Please enter a value")
    .min(0, "Must be greater than zero"),
  Heading: yup.string().required("Please enter a heading"),
});

export const enquirySchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  startDate: yup
    .date("Input is not valid")
    .min(new Date(Date.now() - 86400000), "Please enter a current date")
    .required("Please enter a start date"),
  endDate: yup
    .date("Input is not valid")
    .min(new Date(Date.now() - 86400000), "Please enter a current date")
    .required("Please enter an end date"),
  capacity: yup.number().required("Please select an option"),
});
