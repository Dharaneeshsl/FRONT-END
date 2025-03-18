document.getElementById("qrForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const url = document.getElementById("long_url").value;

    if (!url) {
        alert("Please enter a URL");
        return;
    }

    const qrCodeImg = document.getElementById("qrcode");
    qrCodeImg.src = `https://quickchart.io/qr?text=${encodeURIComponent(url)}`;  
});