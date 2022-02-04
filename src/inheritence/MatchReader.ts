import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from '../MatchResult';
import { MatchData } from '../MatchData';
import { dateStringToDate } from '../utils';

export class MatchReader extends CsvFileReader<MatchData> {
  constructor(filename: string) {
    super(filename);
  }

  matchRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}