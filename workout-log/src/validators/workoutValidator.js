const validHours = (value) => {
  // Check for simple integer value only by the digits (e.g. no 2e4 allowed)
  const re = new RegExp(/^\d*$/g);

  return re.test(value + '');
};

const validType = (type) => ['running', 'bycicle', 'swimming'].includes(type);

const validDate = (date) => {
  // Simple regex for yyyy-mm-dd
  const re = new RegExp(/^(\d){4}-(\d){2}-(\d){2}$/g);

  return re.test(date);
};

const validWorkout = (workout) => {
  return (
    validHours(workout.hours) &&
    validType(workout.type) &&
    validDate(workout.date)
  );
};

export { validWorkout };
