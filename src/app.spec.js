import { sortDoctorsByDistance } from './app';
import sortedDoctors  from './sorted-doctors';

describe('doctor sorting', () => {
    it('should return an array of sorted doctors', () => {
        return expect(sortDoctorsByDistance()).resolves.toEqual(sortedDoctors);
    });
});
