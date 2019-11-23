"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = require("express");
const router = express.Router();
router.route("/").get((req, res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    const name = "Paul";
    const testArtist = {
        name
    };
    res.json(testArtist);
}));
exports.default = router;
