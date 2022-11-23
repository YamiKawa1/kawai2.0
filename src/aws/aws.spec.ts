import { Aws } from './aws';

describe('Aws', () => {
    it('should be defined', () => {
        expect(new Aws()).toBeDefined();
    });
});
