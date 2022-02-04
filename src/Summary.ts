import { MatchData } from './MatchData';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalyzerWithHtmlReport(
    teamName: string,
    reportName: string
  ): Summary {
    return new Summary(new WinsAnalyzer(teamName), new HtmlReport(reportName));
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]) {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
