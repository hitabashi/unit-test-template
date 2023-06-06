import { doSomething } from './test';

jest.mock('./test', () => ({ doSomething: () => 'mock test' }));

test('mock', () => {
  expect(doSomething()).toEqual('mock test');
});
