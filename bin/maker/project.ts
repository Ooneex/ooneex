import {Request} from "ooneex/cli/request";
import {MakeProject} from "ooneex/bin/maker";

const bin = new MakeProject();

bin.exec(new Request());
