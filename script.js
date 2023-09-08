document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');
    const progressBar = document.getElementById('progress-bar');
    const validationMessage = document.getElementById('validation-message');

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();

        validationMessage.innerText = '';
        const file = fileInput.files[0];

        if (!file) {
            validationMessage.innerText = 'Please select a file.';
            return;
        }

        const allowedFormats = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
        if (!allowedFormats.includes(file.type)) {
            validationMessage.innerText = 'Invalid file format. Please upload an image (jpg, jpeg, png, or gif).';
            return;
        }

        const totalSize = file.size;
        let uploadedSize = 0;

        const uploadInterval = setInterval(() => {
            if (uploadedSize >= totalSize) {
                clearInterval(uploadInterval);
                validationMessage.innerText = 'File uploaded successfully!';
            } else {
                uploadedSize += totalSize / 10; //
                const progress = (uploadedSize / totalSize) * 100;
                progressBar.style.width = `${progress}%`;
            }
        }, 100);
    });
});
