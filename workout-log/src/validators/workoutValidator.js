import workoutTypes from '../utils/workoutTypes';

const validateHours = (value) => {
  if (value == 0) {
    return 'The workout hours cannot be zero.';
  }

  // Check for simple integer value only by the digits (e.g. no 2e4 allowed)
  const re = new RegExp(/^\d*$/g);

  return re.test(value + '')
    ? ''
    : 'The workout hours must be a positive number.';
};

const validateType = (type) => {
  if (type === '') {
    return 'Please select a workout type.';
  }

  return workoutTypes.includes(type)
    ? ''
    : 'The selected workout type is not valid.';
};

const validateDate = (date) => {
  // Simple regex for yyyy-mm-dd
  const re = new RegExp(/^(\d){4}-(\d){2}-(\d){2}$/g);

  return re.test(date) ? '' : 'Please insert a valid date.';
};

const validateWorkout = (workout) => {
  let validationErrors = [
    validateHours(workout.hours),
    validateType(workout.type),
    validateDate(workout.date),
  ];

  validationErrors = validationErrors.filter((msg) => msg);

  const valid = !validationErrors.length;

  return { valid, validationErrors };
};

export { validateWorkout };
