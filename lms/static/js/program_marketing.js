function playVideo(src) {
    'use strict';
    document.querySelector('#program_video button').style = 'display:none;';
    document.querySelector('#program_video iframe').style = 'display:block;';
    document.querySelector('#program_video iframe').src = src;
}
function toggleBio(currentEl, bioHash) {
    'use strict';
    var button = currentEl;
    var bioId = 'instructor-bio-' + bioHash;
    var bio = document.getElementById(bioId);
    var hidden = bio.classList.contains('hidden');
    if (hidden) {
        bio.classList.remove('hidden');
        button.innerHTML = 'Hide Bio';
    } else {
        bio.classList.add('hidden');
        button.innerHTML = 'View Bio';
    }
}
