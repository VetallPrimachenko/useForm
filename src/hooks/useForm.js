import { useState, useCallback } from 'react';

function useForm(initialValues, validate) {
  // write your code here

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}

export default useComplexForm;
