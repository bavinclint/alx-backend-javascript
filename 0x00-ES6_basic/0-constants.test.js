import { taskFirst, taskNext } from './0-constants.js';

test('task are correctly defined', () => {
  expect(`${taskFirst()} ${taskNext()}`).toEqual("I prefer const when I can. But sometimes let is okay");
});
