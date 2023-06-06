// マッチャ
// jest.fn()
// jest.spyOn()
// jest.mock()

describe('write some description', () => {
  test('write some test', () => {
    expect(1 + 1).toEqual(2);
  });
});

// p.78のリスト4-24をもとに練習
test('モック関数は実行された', () => {
  const mockFn = jest.fn();
  mockFn(1);
  expect(mockFn).toBeCalled();
  // 同じ
  expect(mockFn.mock.calls.length).toBeGreaterThan(0);

  expect(mockFn).toBeCalledTimes(1);
  // 同じ
  expect(mockFn.mock.calls.length).toBe(1);
});

test('モック関数は実行された', () => {
  const mockFn = jest.fn();
  mockFn(1, 1, 2);
  expect(mockFn).toBeCalledWith(1, 1, 2);

  expect(mockFn.mock.calls[0]).toEqual([1, 1, 2]);
  expect(mockFn.mock.calls[0][2]).toEqual(2);
});

/*
  * [メモ]
  * mock関数は、できていない関数についてテストができる。
  *
  * [疑問点]
  * 本来は、なんらかの存在する関数に対してテストするはず。それなのにjest.fn()によって、存在しないかんすうに対してのテストをするのはなぜでしたっけ?
  * → テストしたい関数が依存している関数を扱いやすいようにするために使ったりする。
  *
*/

test('jest.fnに関数を入れる', () => {
  const mockApi = jest.fn()
    .mockImplementationOnce(() => 3)
    .mockImplementationOnce(() => 9)
    .mockImplementation((x) => x * 2);

  expect(mockApi(1)).toEqual(3);
  expect(mockApi(1)).toEqual(9);
  expect(mockApi(3)).toEqual(6);
  expect(mockApi(4)).toEqual(8);
}