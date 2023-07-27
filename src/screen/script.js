
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCleTFDjZpf47o0YnWjJxipQ&maxResults=10&order=date&key=AIzaSyDu0WH_cj1EitlJTZ80q_3IYwHYntI1ftk")
.then((data)=>{
    console.log(data);
})


