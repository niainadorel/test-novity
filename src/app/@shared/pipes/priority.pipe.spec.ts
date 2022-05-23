import { PriorityPipe } from './priority.pipe';

describe('PriorityPipe', () => {
  it('create an instance', () => {
    const pipe = new PriorityPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return HIGH', () => {
    const pipe = new PriorityPipe();
    const result = pipe.transform(2);
    expect(result).toBe('HIGH')
  })
});
