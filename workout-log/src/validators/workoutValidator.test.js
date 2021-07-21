import { validateWorkout } from './workoutValidator';

describe('#validateWorkout', () => {
  const workout = { hours: 8, type: 'bicycle', date: '2019-01-15' };

  describe('with valid values', () => {
    it('is valid', () => {
      expect(validateWorkout(workout)).toEqual({
        valid: true,
        validationErrors: [],
      });
    });
  });

  describe('with invalid values', () => {
    describe('with invalid hours', () => {
      it('rejects negative hours', () => {
        const invalidWorkout = { ...workout };
        invalidWorkout.hours = -1;

        expect(validateWorkout(invalidWorkout)).toEqual({
          valid: false,
          validationErrors: ['The workout hours must be a positive number.'],
        });
      });

      it('rejects zero hours', () => {
        const invalidWorkout = { ...workout };
        invalidWorkout.hours = 0;

        expect(validateWorkout(invalidWorkout)).toEqual({
          valid: false,
          validationErrors: ['The workout hours cannot be zero.'],
        });
      });

      it('rejects NaN hours', () => {
        const invalidWorkout = { ...workout };
        invalidWorkout.hours = NaN;

        expect(validateWorkout(invalidWorkout)).toEqual({
          valid: false,
          validationErrors: ['The workout hours must be a positive number.'],
        });
      });

      it('rejects undefined hours', () => {
        const invalidWorkout = { ...workout };
        invalidWorkout.hours = undefined;

        expect(validateWorkout(invalidWorkout)).toEqual({
          valid: false,
          validationErrors: ['The workout hours must be a positive number.'],
        });
      });
    });
    describe('with invalid workout type', () => {
      it('rejects inexisting type', () => {
        const invalidWorkout = { ...workout };
        invalidWorkout.type = 'inexisting';

        expect(validateWorkout(invalidWorkout)).toEqual({
          valid: false,
          validationErrors: ['The selected workout type is not valid.'],
        });
      });

      it('rejects undefined type', () => {
        const invalidWorkout = { ...workout };
        invalidWorkout.type = undefined;

        expect(validateWorkout(invalidWorkout)).toEqual({
          valid: false,
          validationErrors: ['The selected workout type is not valid.'],
        });
      });

      it('rejects empty type', () => {
        const invalidWorkout = { ...workout };
        invalidWorkout.type = '';

        expect(validateWorkout(invalidWorkout)).toEqual({
          valid: false,
          validationErrors: ['Please select a workout type.'],
        });
      });
    });
    describe('with invalid date', () => {
      it('rejects non-date-like value', () => {
        const invalidWorkout = { ...workout };
        invalidWorkout.date = 'not a date';

        expect(validateWorkout(invalidWorkout)).toEqual({
          valid: false,
          validationErrors: ['Please insert a valid date.'],
        });
      });

      it('rejects dd-mm-yyyy date format', () => {
        const invalidWorkout = { ...workout };
        invalidWorkout.date = '19-02-2021';

        expect(validateWorkout(invalidWorkout)).toEqual({
          valid: false,
          validationErrors: ['Please insert a valid date.'],
        });
      });

      it('rejects slash separated date', () => {
        const invalidWorkout = { ...workout };
        invalidWorkout.date = '2021/02/19';

        expect(validateWorkout(invalidWorkout)).toEqual({
          valid: false,
          validationErrors: ['Please insert a valid date.'],
        });
      });

      xit('rejects months bigger than 12', () => {
        const invalidWorkout = { ...workout };
        invalidWorkout.date = '2021-14-19';

        expect(validateWorkout(invalidWorkout)).toEqual({
          valid: false,
          validationErrors: ['Please insert a valid date.'],
        });
      });

      xit('rejects days bigger than 31', () => {
        const invalidWorkout = { ...workout };
        invalidWorkout.date = '2021-14-19';

        expect(validateWorkout(invalidWorkout)).toEqual({
          valid: false,
          validationErrors: ['Please insert a valid date.'],
        });
      });
    });

    describe('with all attributes invalid', () => {});
  });
});
