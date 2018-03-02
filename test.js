import test from 'ava';
import uniqueSampler from './';

test('main', t => {
  const min = 0;
  const max = 100;
  const length = max - min;
  const sampler = uniqueSampler(min, max);
  const all_values = Array.from({length: length}, (v, i) => i + min);
  const all_samples = Array.from({length: length}, sampler);

  t.notDeepEqual(all_values, all_samples);
  t.deepEqual(all_values, all_samples.sort((a,b) => a - b));
  t.throws(sampler);
})