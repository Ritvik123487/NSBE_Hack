import React from "react";
import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "4ba77350fb0e4e059ef962df17adf31d";
const token =
    "007eJxTYLBdKJ/PPOnOh/fXWEXT17oo3ViYcmu157rifo9jiTYZywMUGEySEs3NjU0N0pIMUk1SDUwtU9MszYxS0gzNE1PSjA1TQiRZUhoCGRlOZScwMEIhiM/CkJuYmcfAAAAzdx6p";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";