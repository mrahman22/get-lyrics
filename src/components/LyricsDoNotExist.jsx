import React from 'react'
import {Link} from "@reach/router";

function LyricsDoNotExist() {
    return (
        <div className="lyrics-unavailable">
            <h1>I AM SORRY IT APPEARS THERE ARE NO LYRICS AVAILABLE FOR THIS SONG</h1>
            <Link to={`/`}>
            <button className="btn-back">BACK</button>
          </Link>{" "}
        </div>
    )
}

export default LyricsDoNotExist