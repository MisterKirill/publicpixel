const { LiveChat } = require("youtube-chat");

const liveID = "your live id";

window.addEventListener('DOMContentLoaded', async () => {
    const liveChat = new LiveChat({liveId: liveID});
    let statusBar = document.getElementById('statusBar');
    liveChat.on("start", liveId => {
        statusBar.innerHTML = "Connected to live";
    });
    liveChat.on("chat", (chatItem) => {
        //statusBar.innerHTML = chatItem.message[0].text;
        if(chatItem.message[0].text) {
            if(chatItem.message[0].text.startsWith('draw')) {
                let msg = chatItem.message[0].text;
                let c = msg.split(' ')[1];
                let color = msg.split(' ')[2];
                if(c) {
                    let cell = document.getElementById(c);
                    if(cell != null) {
                        statusBar.innerHTML = chatItem.author.name+": "+chatItem.message[0].text;
                        //statusBar.innerHTML = color;
                        if(color) {
                            cell.style.backgroundColor = color;
                        } else {
                            if(cell.style.backgroundColor != "black")
                                cell.style.backgroundColor = "black";
                            else
                                cell.style.backgroundColor = "white";
                        }
                    }
                }
            }
        }
    });
    liveChat.on("error", (err) => {
        statusBar.innerHTML = err;
    });
    await liveChat.start()
});