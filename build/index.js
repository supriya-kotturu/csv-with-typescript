"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { HtmlReport } from './reportTargets/HtmlReport';
// import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
const Summary_1 = require("./Summary");
const MatchReader_1 = require("./MatchReader");
// ---- INHERITENCE ----
// const matchReader = new MatchReader('football.csv');
// matchReader.read();
// const csvReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvReader);
const matchReader = MatchReader_1.MatchReader.fromCSV('football.csv');
matchReader.load();
// const summary = new Summary(
//   new WinsAnalyzer('Man United'),
//   new HtmlReport('index.html')
// );
const summary = Summary_1.Summary.winsAnalyzerWithHtmlReport('Man United', 'report.html');
summary.buildAndPrintReport(matchReader.matches);
