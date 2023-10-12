/* eslint-disable prettier/prettier */
import { GetAnalysisHandler } from "./analysis/GetAnalysys/getAnalysisHandler";
import { GetServiceByCompanyHandler } from "./catalogs/GetCompany/getcompany.handler";
import { GetCompanyInterfaceHandler } from "./catalogs/GetCompanyInterface/getcompanyinterface.handler";
import { GetDocumentsHandler } from "./analysis/GetDocuments/getdocuments.handler";
import { GetGenericCatalogHandler } from "./catalogs/GetGenericCatalog/getgenericcatalog.handler";
import { PendingAnalysisHandler } from "./analysis/GetPendingAnalysis/pendingAnalysisHandler";
import { ProcessAnalysisHandler } from "./analysis/PorcessAnalysis/processanalysis.handler";
import { MasiveAnalysisHandler } from "./analysis/ProcessMasiveAnalysis/processmasive.analysis.handler";
import { GetQueueHandler } from "./rpa/GetQueue/getqueue.handler";
import { GetCaptchaHandler } from "./captcha/GetCaptcha/getcaptcha.handler";
import { SetCaptchaHandler } from "./captcha/SetCaptcha/setcaptcha.handler";

export const queryHandlers = [
    GetAnalysisHandler, 
    PendingAnalysisHandler, 
    GetDocumentsHandler, 
    GetServiceByCompanyHandler, 
    GetGenericCatalogHandler, 
    GetQueueHandler, 
    GetCaptchaHandler
];

export const commandHandlers = [
    ProcessAnalysisHandler,
    MasiveAnalysisHandler,
    GetCompanyInterfaceHandler,
    SetCaptchaHandler
]
