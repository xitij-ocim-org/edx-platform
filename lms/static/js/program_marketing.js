function playVideo(src) {
    'use strict';
    document.querySelector('#program_video button').style = 'display:none;';
    document.querySelector('#program_video iframe').style = 'display:block;';
    document.querySelector('#program_video iframe').src = src;
}
function toggleBio(button, bio_hash){
    var bio_id = 'instructor-bio-' + bio_hash;
    bio = document.getElementById(bio_id)
    hidden = bio.classList.contains("hidden");
    if(hidden){
        bio.classList.remove("hidden")
        button.innerHTML = 'Hide Bio'
    }else{
        bio.classList.add("hidden")
        button.innerHTML = 'View Bio'
    }
}