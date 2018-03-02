import test from 'ava';
import uniqueSampler from './';

test('main', t => {
  const min = 100;
  const max = 1000;
  const length = max - min
  const sampler = uniqueSampler(min, max);
  const all_values = Array.from({length: length}, (v, i) => i + min);
  const all_samples = Array.from({length: length}, sampler);

  t.notDeepEqual(all_values, all_samples);
  t.deepEqual(all_values, all_samples.sort());
  t.throws(sampler);
})