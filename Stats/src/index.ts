import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("matches.csv");
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport("Huddersfield");
summary.buildAndPrintReport(matchReader.matches);
