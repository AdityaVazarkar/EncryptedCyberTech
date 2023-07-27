export async function getVideo():Promise<void | {}>{
    return await fetch(`https://youtube.googleapis.com/youtube/v3/playlists?channelId=UCleTFDjZpf47o0YnWjJxipQ&key=[AIzaSyDu0WH_cj1EitlJTZ80q_3IYwHYntI1ftk] `)
    .then(data=>data.json())
    .then(list=>list)
}