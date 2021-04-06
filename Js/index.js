window.addEventListener('DOMContentLoaded', () => {
    const IndexP = [`“ I’ve been interested in coding for a while but never taken the jump, until now.
    // I couldn’t recommend this course enough. I’m now in the job of my dreams and so
    // excited about the future. ”`, `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`];
    // const Profile = document.querySelector('.ProfilePic');
    const P = document.querySelector('p');
    const Name = document.querySelector('.DevName');
    const JobTitle = document.querySelector('.JobTitle');
    // const IndexSrc = ['images/image-t anya.jpg', 'images/image-john.jpg'];
    const IndexDev = ['Tanya Sinclair', 'John Tarkpar'];
    const IndexJob = ['UX Developer', 'Junior Front end Developer'];
    function Prev() {
        // P.innerHtml = IndexP[0];
        // Name.innerHtml = IndexDev[0];
        // JobTitle.innerHtml = IndexJob[0];
        alert('clicked');
    }
    function Next() {
        alert('clicked');
        // P.innerHtml = indexP[1];
        // Name.innerHtml = IndexDev[1];
        // JobTitle.innerHtml = IndexJob[1];
    }
    console.log(P);
})