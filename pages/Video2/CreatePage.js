import React from "react";
import './index.css'

const CreatePage = () => {
    return (
        <div>
            <div>
                <div class="row mt-3">
                    <div class="col-1 text-center">
                        <i class="fas fa-arrow-left back-btn" id="backButton"></i>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center create-col">
                        <h1 class="create-head">
                            Create Room
                        </h1>
                    </div>
                    <div class="col-12 text-center mt-2">
                        <p id="createRoomText"></p>
                        <div>
                            <div class="mt-1 mb-1">
                                <input
                                    class=""
                                    type="text"
                                    name="username"
                                    id="create-username"
                                    placeholder="username"
                                    autocomplete="off"
                                    required
                                />
                            </div>
                            <div class="mt-3">
                                <input
                                    class=""
                                    type="text"
                                    name="roomname"
                                    id="roomname"
                                    placeholder="room name"
                                    autocomplete="off"
                                    required
                                />
                            </div>
                            <div class="mt-4">
                                <input type="file" class="form-control fileInput" id="file-id" onchange="onChangeFile();" />
                                <br />
                                <p id="filePathText"></p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <button class="buttons" id="roomCreateButton">
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePage