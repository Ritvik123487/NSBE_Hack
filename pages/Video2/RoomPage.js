import React from "react";
import "./index.css"

const RoomPage = () => {
    return (
        <div class="room" >
    <div class="container-fluid">
      <div class="row">
        <div class="col-9 left-side">
          <div class="video video-player-conatiner">
            <video id="video-player" class="video-js vjs-big-play-centered" controls preload="metadata" data-setup='{}'>
              <source id="videoSrc" src="test.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="col-3 right-side">
          <div class="row mt-3">
            <div class="col-12 text-center">
              <h6 class="room-code" id="roomNameText">Room Name</h6>
            </div>
          </div>
          <hr class="mt-1" style={ {height : 0.1, width: 90, background_color: "white" } } />
          <div class="row mt-3">
            <div class="col-12">
              <div class="row">
                <div class="col-2 text-center" data-toggle="tooltip" data-placement="bottom" title="Leave Party">
                  <i class="fas fa-sign-out-alt icon" id="roomLeaveButton"></i>
                </div>
                <div class="col-8 text-center">
                  <h6 class="room-code" data-toggle="tooltip" data-placement="left" title="Room Code" id="roomCodeText">
                    1234</h6>
                </div>
                <div class="col-2 text-center">
                  <h6 id="pplinparty" class="members" data-toggle="tooltip" data-placement="left"
                    title="People in party: 1">
                    <i class="fas fa-user-friends"></i>
                  </h6>
                </div>
              </div>
              <div class="row mt-2 mb-2 messages" id="messages-box">

              </div>
              <div class="row">
                <div class="col-12">
                  <div class="row justify-content-center chattimg">
                    <form action="#" id="send-form">
                      <div class="col-12">
                        <input autocomplete="off" class="form-control" type="text" name="messageInp" id="messageInp"
                          placeholder="Message" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
}

export default RoomPage