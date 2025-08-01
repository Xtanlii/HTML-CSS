import { videos } from "../data/videos.js";

console.log(videos);

function loadPage() {
  let videosHTML = '';
  videos.forEach((videoDetails) => {
    videosHTML += `
    <div class="video-preview">
      <div class="thumbnail-row"> 
        <img class="thumbnails" src="${videoDetails.thumbnail}">
        <div class="video-time">
          ${videoDetails.time}
        </div>
      </div>
       
      <div class="video-info-grid">
        <div class="channel-picture">
          <img class="profile-picture" src="${videoDetails.pfp}">
        </div>
        <div class="video-info">
          <p class="video-title">
            ${videoDetails.title}
            </p>
            <p class="video-author">
            ${videoDetails.author}
            </p>
            <p class="video-stats">
            ${videoDetails.stats}
            </p>
        </div>
       
      </div>
     
    </div>
    `
  })
  document.querySelector('.js-video-grid')
    .innerHTML = videosHTML;
}

loadPage();