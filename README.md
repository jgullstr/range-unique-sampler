# integer-unique-sampler [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jgullstr/array-integer-sampler/blob/master/LICENSE)

Sample random unique integers within a range.

## Usage

```js
import uniqueSampler from 'integer-unique-sampler';

// Sample integers in range 100 (inclusive) - 500 (exclusive).
const sample = uniqueSampler(100,500);

sample() // 123
sample() // x:[100-499] \ 123

// Sample 50 unique integers 0-999.
const samples = Array.from({length: 50}, uniqueSampler(0,1000))
```