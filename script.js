function displayTextWithStyle(text, marginTop, fontSize, textContainerId) {
    const container = document.getElementById(textContainerId);
    container.style.marginTop = marginTop + 'em';
    container.style.fontSize = fontSize + 'em';
    container.textContent = text;
}

displayTextWithStyle('Do you want to get the Batocara game pack that includes all versions of Hello Neighbor game?', 3, 2, 'textContainer1');
displayTextWithStyle('The compressed package already includes the flashing tool Balena Etcher, so there is no need for any additional downloads.', 1, 2, 'textContainer2');
displayTextWithStyle('You will need a USB drive, hard drive, or SD card with a capacity of at least 200 gigabytes (GB).', 1, 2, 'textContainer3');
displayTextWithStyle('Come and download it now, and have lots of fun playing!', 1, 2, 'textContainer4');