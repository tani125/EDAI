$(document).ready(function () {
    $('#uploadBtn').click(function (e) {
      e.preventDefault(); // Prevent default form submission
  
      const fileInput = $('#resumeUpload').val();
      if (fileInput) {
        alert('Your resume has been uploaded successfully!');
      } else {
        alert('Please upload a resume file first!');
      }
    });
  });