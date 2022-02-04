"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyzer = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalyzer {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let teamWins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                teamWins++;
            }
            else if (match[2] === this.team && match[5] === MatchResult_1.MatchResult.AwayWin) {
                teamWins++;
            }
        }
        return `Team ${this.team} won ${teamWins} games.`;
    }
}
exports.WinsAnalyzer = WinsAnalyzer;
