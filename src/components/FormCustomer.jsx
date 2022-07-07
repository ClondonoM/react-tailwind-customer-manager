import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Alert from './Alert';
import Spinner from './Spinner';

const FormCustomer = ({ customer, loading }) => {
  const { name, company, email, phone, notes } = customer;
  const navigate = useNavigate();
  const newCustomerSchema = () =>
    Yup.object().shape({
      name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .max(40, 'Name must be at maximum 40 characters')
        .required('Name is required'),
      company: Yup.string().required('Company Name is required'),
      email: Yup.string()
        .required('E-mail is required')
        .email('Invalid E-mail'),
      phone: Yup.number()
        .positive('Invalid Phone Number')
        .integer('Invalid Phone Number')
        .typeError('Invalid Phone Number'),
    });
  const handleSubmit = async (values) => {
    try {
      const url = 'http://localhost:4000/customers';
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return loading ? (
    <Spinner />
  ) : (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
      <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
        {customer.id ? 'Edit Customer' : 'New Customer'}
      </h1>
      <Formik
        initialValues={{
          name: name,
          company: company,
          email: email,
          phone: phone,
          notes: notes,
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={newCustomerSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className='mt-10'>
              <div className='mb-4'>
                <label className='text-slate-800 ' htmlFor='name'>
                  Name:
                </label>
                <Field
                  id='name'
                  type='text'
                  placeholder='Customer Name'
                  className='mt-2 block w-full p-3 bg-slate-50 rounded-md'
                  name='name'
                />
                {errors.name && touched.name ? (
                  <Alert>{errors.name}</Alert>
                ) : null}
              </div>
              <div className='mb-4'>
                <label className='text-slate-800 ' htmlFor='company'>
                  Company:
                </label>
                <Field
                  id='company'
                  type='text'
                  placeholder='Customer Company Name'
                  className='mt-2 block w-full p-3 bg-slate-50 rounded-md'
                  name='company'
                />
                {errors.company && touched.company ? (
                  <Alert>{errors.company}</Alert>
                ) : null}
              </div>
              <div className='mb-4'>
                <label className='text-slate-800 ' htmlFor='email'>
                  E-mail:
                </label>
                <Field
                  id='email'
                  type='email'
                  placeholder='Customer E-mail'
                  className='mt-2 block w-full p-3 bg-slate-50 rounded-md'
                  name='email'
                />
                {errors.email && touched.email ? (
                  <Alert>{errors.email}</Alert>
                ) : null}
              </div>
              <div className='mb-4'>
                <label className='text-slate-800 ' htmlFor='phone'>
                  Phone:
                </label>
                <Field
                  id='phone'
                  type='tel'
                  placeholder='Customer Phone'
                  className='mt-2 block w-full p-3 bg-slate-50 rounded-md'
                  name='phone'
                />
                {errors.phone && touched.phone ? (
                  <Alert>{errors.phone}</Alert>
                ) : null}
              </div>
              <div className='mb-4'>
                <label className='text-slate-800 ' htmlFor='notes'>
                  Notes:
                </label>
                <Field
                  as='textarea'
                  id='notes'
                  type='textarea'
                  placeholder='Notes'
                  className='mt-2 block w-full p-3 bg-slate-50 rounded-md h-40'
                  name='notes'
                />
              </div>
              <input
                type='submit'
                value={customer.id ? 'Edit Customer' : 'Add Customer'}
                className='mt-5 w-full bg-blue-800 p-3 text-white text-lg rounded-md uppercase cursor-pointer'
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

FormCustomer.defaultProps = {
  customer: {},
  loading: false,
};

export default FormCustomer;
