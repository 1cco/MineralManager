import fs from 'fs';
import yaml from 'yaml';

const src = fs.readFileSync('docs/models.yml', 'utf8');
const data = yaml.parse(src);

const lines: string[] = [];
lines.push('export interface Schema {');
for (const [model, fields] of Object.entries<any>(data)) {
  lines.push(`  ${model}: {`);
  for (const [key, type] of Object.entries<any>(fields)) {
    lines.push(`    ${key}: ${type};`);
  }
  lines.push('  };');
}
lines.push('}');

fs.writeFileSync('src/db/schema.ts', lines.join('\n'));
console.log('schema.ts generated');

