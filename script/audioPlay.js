function createAudio(url, volume = 1) {
    let audio = document.createElement("audio");
    audio.src = url;
    audio.autoplay = true;
    audio.controls = false;
    audio.volume = volume;
    audio.setAttribute("url", url);
    return audio;
}
