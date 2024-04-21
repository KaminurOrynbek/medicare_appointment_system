const apiKey = '645149859698254';
const apiSecret = 'pW48nuObN2PEhdEbIDaoteGhBYY';
const cloud_name = 'dervvymnj'
const upload_preset = 'doctor-booking-system'

const uploadImageToCloudinary = async file => {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('upload_preset', upload_preset);

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: 'post',
        body: uploadData,
        headers: {
            'Authorization': 'Basic ' + btoa(`${apiKey}:${apiSecret}`),
        },
    });

    const data = await res.json();
    return data;
};

export default uploadImageToCloudinary;
