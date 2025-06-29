import fs from 'fs';

const csv = fs.readFileSync('sample-data/specimens.csv', 'utf8');
const lines = csv.trim().split(/\r?\n/);
const header = lines.shift()?.split(',') || [];
let count = 0;
for (const line of lines) {
  if (!line) continue;
  count++;
}
console.log(`Imported ${count} rows`);
