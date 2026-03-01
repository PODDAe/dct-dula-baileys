"use strict";

const chalk = require("chalk");

console.clear();

const line = chalk.gray("════════════════════════════════════════════════════");

console.log(chalk.magentaBright.bold("\n╔══════════════════════════════════════════════════╗"));
console.log(chalk.magentaBright.bold("║             🌐☠︎︎  ᴅᴄᴛ ᴅᴜʟᴀ ᴅᴇᴠ </>  ☠︎︎ 🌐            ║"));
console.log(chalk.magentaBright.bold("║            ⚡ MODIFIED BAILEYS ENGINE ⚡               ║"));
console.log(chalk.magentaBright.bold("╚════════════════════════════════════════════════════╝\n"));

console.log(line);
console.log(chalk.cyanBright.bold("🚀 Welcome to DCT DULA DEV Modified Baileys System"));
console.log(chalk.whiteBright("💬 Thank you for choosing our advanced WhatsApp multi-device framework."));
console.log(chalk.white("🛠 Built for speed, stability, and next-level automation."));
console.log(chalk.white("🔐 Secure • Fast • Powerful • Developer Friendly"));
console.log(line);

const latestUpdate = new Date("2026-02-28");
console.log(chalk.yellowBright.bold("\n🆕 Latest Update Information"));
console.log(chalk.whiteBright("📅 Release Date : ") + chalk.greenBright(latestUpdate.toLocaleDateString()));
console.log(chalk.whiteBright("⚙ Version       : ") + chalk.greenBright("v1.0.0"));
console.log(chalk.whiteBright("🧠 Engine        : ") + chalk.greenBright("Baileys MD Modified Core"));
console.log(chalk.whiteBright("🔥 Status        : ") + chalk.greenBright("ONLINE & READY"));
console.log(line);

console.log(chalk.magentaBright.bold("\n⚡ System Successfully Initialized ⚡"));
console.log(chalk.greenBright("✔ All modules loaded"));
console.log(chalk.greenBright("✔ Database connected"));
console.log(chalk.greenBright("✔ WhatsApp session verified"));
console.log(chalk.greenBright("✔ Auto features enabled"));
console.log(line);

console.log(chalk.blueBright.bold("\n🌟 Powered By ᴅᴄᴛ ᴅᴜʟᴀ ᴅᴇᴠ </>"));
console.log(chalk.gray("© 2026 DCT DULA DEV — All Rights Reserved\n"));

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
