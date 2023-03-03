import { useState } from "#imports";

export const useSampleGlobal = () => useState("sampleGlobal", () => false);
