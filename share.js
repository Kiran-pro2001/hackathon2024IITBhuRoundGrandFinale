
// Sharing Post to different social media platform

document.addEventListener('DOMContentLoaded', function () {
    const shareButtons = document.querySelectorAll('.share-button');
    
    const shareContent = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(document.title);

        const shareUrls = {
            // facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
            linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`,
            reddit: `https://www.reddit.com/submit?url=${url}&title=${text}`,
            whatsapp: `https://api.whatsapp.com/send?text=${text} ${url}`
        };

        for (const platform in shareUrls) {
            window.open(shareUrls[platform], '_blank');
        }
    };

    shareButtons.forEach(button => {
        button.addEventListener('click', shareContent);
    });
});
