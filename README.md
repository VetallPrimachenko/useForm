# useForm

# 1. State Management
The hook must manage the state of multiple form fields dynamically.
The initial state values should be passed as an argument (initialValues) to the hook.
The hook should maintain a separate state for validation errors and for tracking whether the form is currently being submitted.
# 2. Validation
The hook should accept a validation function (validate) as an argument.
The validation function should be called whenever form fields change, and it should return an object containing error messages for any invalid fields.
The hook should automatically update the error state based on the validation results.
# 3. Dynamic Form Handling
The hook should handle changes to form fields dynamically. The handleChange function should update the form state when any input changes.
The hook should ensure that the validation is performed on the fly when form inputs are modified.
# 4. Form Submission
The hook should provide a handleSubmit function to be used in the form's onSubmit event.
Upon submission, the hook should validate the entire form. If the form is valid, it should trigger a submission action (e.g., calling an API or a custom function).
The hook should track the submission process and prevent multiple submissions by disabling the form or the submit button while a submission is in progress.
