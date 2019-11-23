"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ArtistSchema = new mongoose.Schema({
    createdAt: { type: String, required: true },
    basicInformation: { type: Object, required: true, unique: true },
    advancedInformation: { type: Object, required: true, unique: true },
    socialMediaLinks: { type: Object, required: true },
    events: { type: Array, required: true }
});
const ArtistModel = mongoose.model("Artist", ArtistSchema);
exports.default = ArtistModel;
//# sourceMappingURL=artist.model.js.map