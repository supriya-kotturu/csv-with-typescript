import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  constructor(public reportName: string) {}
  print(report: string): void {
    const html = `
      <div>
      <h1> Analysis Report </h1>
      <p>${report}</p>
      </div>
      `;

    fs.writeFileSync(this.reportName, html);
  }
}
