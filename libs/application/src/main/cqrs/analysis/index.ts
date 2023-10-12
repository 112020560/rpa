/* eslint-disable prettier/prettier */
import { AnalysisRequest } from "./GetAnalysys/getanalsisyRequest";
import { GetAnalysisQuery } from "./GetAnalysys/getanalysis.query";
import { GetDocumentsQuery } from "./GetDocuments/getdocuments.query";
import { GetDocumentsRequest } from "./GetDocuments/getdocuments.request";
import { PendingAnalysisQuery } from "./GetPendingAnalysis/pendingAnalysisquery";
import { PendingAnalysisRequest } from "./GetPendingAnalysis/pendingAnalysisReques";
import { ProcessAnalysisCommand } from "./PorcessAnalysis/process.analysis.command";
import { ProcessAnalysisRequest } from "./PorcessAnalysis/process.analysis.request";
import { MasiveAnalysisCommand } from "./ProcessMasiveAnalysis/processmasive.analysis.command";
import { MasiveAnalysisRequest } from "./ProcessMasiveAnalysis/processmasive.analysis.request";

export {
    GetAnalysisQuery,
    GetDocumentsQuery, 
    PendingAnalysisQuery,
    ProcessAnalysisCommand,
    MasiveAnalysisCommand,
    ///REQUEST
    AnalysisRequest,
    GetDocumentsRequest,
    PendingAnalysisRequest,
    ProcessAnalysisRequest,
    MasiveAnalysisRequest
}