"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const queue_1 = require("./queue/queue");
let Core = class Core {
    constructor() {
        this.filaMsgsAguardInstal = async (data) => {
            if (data.action === "remove") {
                await queue_1.msgsAguardInstalQueue.remove(`aguardInstal_${data.negocio.id.toString()}`);
            }
            else if (data.action === "add") {
                const payload = {
                    data: {
                        negocio: data.negocio,
                        day: data.day,
                    },
                };
                await queue_1.msgsAguardInstalQueue.add("msgsAguardInstalQueue", payload, {
                    jobId: `aguardInstal_${data.negocio.id.toString()}`,
                });
            }
        };
    }
};
Core = __decorate([
    (0, tsyringe_1.singleton)(),
    __metadata("design:paramtypes", [])
], Core);
exports.default = Core;
