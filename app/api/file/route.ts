import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  const buffer = await readFile(path.join(process.cwd(), '/public', 'WediahEmmanuelresume.docx'));

  const headers = new Headers();
  headers.append('Content-Disposition', 'attachment; filename="WediahEmmanuelresume.docx"');
  headers.append('Content-Type', 'text/docx');

  return new Response(buffer, {
    headers,
  });
}
