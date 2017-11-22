function playVideo(src) {
    'use strict';
    document.querySelector('#program_video button').style = 'display:none;';
    document.querySelector('#program_video iframe').style = 'display:block;';
    document.querySelector('#program_video iframe').src = src;
}
function showBio(button, bio_hash){
    button.style.display='none';
    var bio_id = 'instructor-bio-' + bio_hash;
    document.getElementById(bio_id).style.display='block';
}