"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalyzer_1 = require("./analyzers/WinsAnalyzer");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsAnalyzerWithHtmlReport(teamName, reportName) {
        return new Summary(new WinsAnalyzer_1.WinsAnalyzer(teamName), new HtmlReport_1.HtmlReport(reportName));
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
