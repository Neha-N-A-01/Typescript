"use strict";
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptVersionIsAtLeast = void 0;
const semver = __importStar(require("semver"));
const ts = __importStar(require("typescript"));
function semverCheck(version) {
    return semver.satisfies(ts.version, `>= ${version}.0 || >= ${version}.1-rc || >= ${version}.0-beta`, {
        includePrerelease: true,
    });
}
const versions = [
    '4.7',
    '4.8',
    '4.9',
    '5.0',
    '5.1',
    '5.2',
    '5.3',
    '5.4',
];
const typescriptVersionIsAtLeast = {};
exports.typescriptVersionIsAtLeast = typescriptVersionIsAtLeast;
for (const version of versions) {
    typescriptVersionIsAtLeast[version] = semverCheck(version);
}
//# sourceMappingURL=version-check.js.map