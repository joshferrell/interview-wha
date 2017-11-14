import app from './app';
import { testSort } from 'whasome-interview-api';

describe('doctor sorting', () => {
    it('should return an array of sorted doctors', () => {
        return expect(app()).resolves.toMatchSnapshot();
    });
});
