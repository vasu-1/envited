import React from "react";
import "./createevent.css";
// import $ from "jquery";
// import { useState } from "react";


const CreateEvent = (props) => {
    // const [user,setuser] = useState();
    return (
        <div className="container backColor1">

            <div className="row">
            <div className="containertop11"></div>
                <div className="col-12">
                    <div className="EventPagetext"> Create Your Event </div>
                </div>
            </div>
            <br/><br/>
            <div className="row">    
                <div className="col-7">
                <form>
                <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
                <label for="nme"><span>π My event is called</span></label><br/>
                <input type="text" name="name" class="question" id="startdate" required autocomplete="off" />
                <label for="startdate"><span>π It starts at</span></label><br/>
                <input type="text" name="name" class="question" id="enddate" required autocomplete="off" />
                <label for="enddate"><span>π It ends at (optional)</span></label><br/>
                <input type="text" name="location" class="question" id="enddate" required autocomplete="off" />
                <label for="location"><span>π Itβs happening at (optional)</span></label><br/>
                <input type="text" name="name" class="question" id="url" required autocomplete="off" />
                <label for="url"><span>π Add a URL link (optional)</span></label><br/>
                <input type="text" name="name" class="question" id="description" required autocomplete="off" />
                <label for="description"><span>βοΈ Description (optional)</span></label>
                </form><br/><br/>
                <a href="/event" className="buttonright1">
                                <div className="buttoncontent1">π Create my event</div>
                            </a>
                </div>
                <div className="col-5 d-md-block d-none">
                    <img  className="sideimage" src="https://www.envited.io/_ipx/w_1920,q_75/https%3A%2F%2Fd23sdgsd7v5sge.cloudfront.net%2FParty.png?url=https%3A%2F%2Fd23sdgsd7v5sge.cloudfront.net%2FParty.png&w=1920&q=75"/>
                </div>

            </div>
            <div className="containertop11"></div>
        </div>
    )
};

export {CreateEvent};    