import React from "react";
import "./index.css"

const JoinPage = () => {
    return (
        <div>
            <div class="row mt-3">
                <div class="col-1 text-center">
                    <i class="fas fa-arrow-left back-btn" id="backButton"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center join-col">
                    <h1 class="create-head">
                        Join Room
                    </h1>
                </div>
                <div class="col-12 text-center mt-3">
                    <p id="joinRoomText"></p>
                    <div class="mt-1 mb-1">
                        <input
                            class=""
                            type="text"
                            name="username"
                            id="join-username"
                            placeholder="username"
                            autocomplete="off"
                            required
                        />
                    </div>
                    <div class="mt-3">
                        <input
                            class=""
                            type="text"
                            name="roomCode"
                            id="roomCode"
                            placeholder="room code"
                            autocomplete="off"
                            required
                        />
                    </div>
                    <div class="mt-4">
                            </div>
                            <div class="mt-4">
                                <button class="buttons" id="roomJoinButton">
                                    Join
                                </button>
                            </div>
                    </div>
                </div>
            </div>
    );
}

export default JoinPage