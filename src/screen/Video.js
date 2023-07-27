import React, { useEffect, useState } from "react";
import Base from "../component/Base";
import Footer from "../component/Footer"
// const API = "AIzaSyDu0WH_cj1EitlJTZ80q_3IYwHYntI1ftk";
// const channelID = "UCleTFDjZpf47o0YnWjJxipQ";

// var fetchuel=`https://www.googleapis.com/youtube/v3/search?key=${API}&hannelID=${channelID}&part=snippet,id&order=date&maxResult=20`

function Video({ resJson }) {
  // const [allVideo,setAllVideo] = useState([])
  // useEffect(()=>{
  //   fetch(fetchuel).then((response)=>response.json()).then((resJson)=>{
  //     const result = resJson.items.map(doc=>({
  //       ...doc,
  //       Videolink:"https://www.youtube.com/embed"+doc.id.videoId
  //     }))
  //     setAllVideo(result)
  //   })
  // })
  // console.log(allVideo);
  return (
    <div style={{ backgroundColor: "#cab3f2" }}>
      <Base>
        {/* {allVideo.map((items)=>{
          return( <div>
            <iframe width="560" height="315" src={"https://www.youtube.com/embed"}/>
          </div>)
            */}
        {/* })} */}

        <div >
          <main className="container mx-auto py-36 px-8 w-1/1">
            <h1
              className="text-center  "
              style={{ fontSize: "40px", color: "" }}
            >
              CyberSecurity
            </h1>
            
            <div className="flex-w-auto  grid lg:grid-cols-2 gap-6">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/inWWhr5tnEA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/bKQfWqOtPZw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/vb5Ja7G21aU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </main>
        </div>
      </Base>
      <Footer/>
    </div>
  );
}

export default Video;
