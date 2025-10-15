import bodyParser from "body-parser";

export const bodyParserConfig = bodyParser.json({ limit: "50mb" });
