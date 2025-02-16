document.addEventListener("DOMContentLoaded", () => {
    const links_instagram = document.querySelectorAll(".instagram");
    links_instagram.forEach(link => {
        link.href = "https://www.instagram.com/amanda.limarq/";
    });
    
    const links_linkedin = document.querySelectorAll(".linkedin");
    links_linkedin.forEach(link => {
        link.href = "https://www.linkedin.com/in/amanda-lima-0076ba11a/";
    });

    const links_email = document.querySelectorAll(".email");
    links_email.forEach(link => {
        link.href = "mailto:arquimandac@gmail.com?subject=Oie%20Amanda";
    });

    const links_whatsapp = document.querySelectorAll(".whatsapp");
    links_whatsapp.forEach(link => {
        link.href = "https://wa.me/5511959176564";
    });
});