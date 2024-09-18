import React from 'react';
import useForm from '../../hooks/useForm';

function validate(values) {
  // write your code here
}

const ComplexForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(initialValues, validate);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label>
          Password (optional):
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </label>
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default ComplexForm;
