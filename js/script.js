document.addEventListener("DOMContentLoaded", function () {
     const videoPlayer = document.querySelector("video");
     const audioPlayer = document.querySelector("audio");
     const iframeViewer = document.querySelector("iframe");
     const fileInput = document.getElementById("file-input");

     fileInput.addEventListener("change", function (event) {
       const file = event.target.files[0];

       if (file) {
         const fileType = file.type.split("/")[0];

         if (fileType === "video") {
           videoPlayer.src = URL.createObjectURL(file);
           audioPlayer.src = ""; // Reset audio player
           iframeViewer.src = "about:blank"; // Reset document viewer
         } else if (fileType === "audio") {
           audioPlayer.src = URL.createObjectURL(file);
           videoPlayer.src = ""; // Reset video player
           iframeViewer.src = "about:blank"; // Reset document viewer
         } else if (
           [
             "application/pdf",
             "application/msword",
             "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
             "text/plain",
           ].includes(file.type)
         ) {
           videoPlayer.src = ""; // Reset video player
           audioPlayer.src = ""; // Reset audio player
           iframeViewer.src = URL.createObjectURL(file);
         }
       }
     });
   });