import React, { useState, useEffect } from 'react';

export default ({ setIsInstallBannerShown }) => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const registerBeforeInstallEvent = (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // See if the app is already installed, in that case, do nothing
            if((window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || 
                window.navigator.standalone === true) {
                return false;
            }
            // Save the event so it can be triggered later.
            setDeferredPrompt(e);
        };
        window.addEventListener('beforeinstallprompt', registerBeforeInstallEvent);
        return () => window.removeEventListener("beforeinstallprompt", registerBeforeInstallEvent);
    }, []);
    
    const handlePromptClick = async (e) => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const choiceResult = await deferredPrompt.userChoice;
            if (choiceResult.outcome === 'accepted') {
                console.log('Your PWA has been installed');
            } else {
                console.log('User chose to not install your PWA');
            }
            setDeferredPrompt(null);
            setIsInstallBannerShown(false);
        };
    }

    return deferredPrompt ? <div id="installBanner" onClick={handlePromptClick}>
        Install the app
    </div> : null;
}
