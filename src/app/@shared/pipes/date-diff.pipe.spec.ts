import { DateDiffPipe } from './date-diff.pipe';

describe('DateDiffPipe', () => {
  it('create an instance', () => {
    const pipe = new DateDiffPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a few seconds ago', () => {
    const pipe = new DateDiffPipe();
    const result = pipe.transform(new Date());
    expect(result).toBe('a few seconds ago')
  })
});
