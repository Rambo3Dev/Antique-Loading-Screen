# 🏺 Antique Loading Screen by Rambo3Dev

Welcome to the **Antique Loading Screen**! This loading screen combines a classic, vintage aesthetic with modern functionality, perfect for your FiveM server.

## 🎨 Features
- **Unique Antique Design**: A visually appealing loading screen with a vintage touch.
- **Fully Responsive**: Works seamlessly on all screen sizes and devices.
- **Custom Background**: Add your own background to fit your server's theme.
- **Progress Bar**: Smooth and stylish loading progress bar.
- **Song Controls**: Play, pause, and skip through your chosen background music.
- **Server Information Display**: Show server rules, updates, and staff members while players wait.
- **Discord Integration**: Include a link to your Discord server to keep your community connected.

## 🚀 Step-by-Step Installation Instructions

Extract and Place: Extract the downloaded files and place the entire folder in your FiveM server's resource directory. Rename the folder to Rambo3Dev-loading-screen for consistency.

fivem-server/
└── resources/
    └── Rambo3Dev-loading-screen/


Configure fxmanifest.lua: Ensure your fxmanifest.lua includes the necessary files for the loading screen to function properly. Your fxmanifest.lua should look like this:

fx_version 'cerulean'
game 'gta5'

- files {
    'index.html',
    'style.css',
    'script.js',
    'images/background.jpg',
    'song/song1.mp3',
    'song/song2.mp3',
    'song/song3.mp3',
    'logo/logo.png'
}

loadscreen 'index.html'

Start the Resource: Add the following line to your server.cfg file to start the loading screen when your server launches.

start Rambo3Dev-loading-screen

Customize: You can customize the loading screen to match your server's theme by modifying the following files:

Background Image: Replace images/background.jpg with your own background image.
Music: Replace song1.mp3, song2.mp3, and song3.mp3 with your desired tracks in the song folder.
Server Information: Edit index.html to update the server rules, staff info, and other details.
Restart Your Server: After making the necessary changes, restart your FiveM server to apply the loading screen.

# 📂 File Structure

Rambo3Dev-loading-screen/
│
├── fxmanifest.lua
├── index.html
├── style.css
├── script.js
├── images/
│   └── background.jpg
├── song/
│   ├── song1.mp3
│   ├── song2.mp3
│   └── song3.mp3
└── logo/
    └── logo.png


🔗 Links
Tebex Store: Visit our Tebex store for more products
Discord Server: Join our Discord server
⚙️ Customization Options
Background: Replace images/background.jpg with your preferred image.
Music: Replace the song1.mp3, song2.mp3, and song3.mp3 files in the song folder with your desired music.
Server Information: Update the text and content in index.html to display your server rules, staff, and other important details.
🛠️ Requirements
FiveM Server: Ensure you have a running FiveM server to use this loading screen.
Basic HTML/CSS Knowledge: For customization beyond the default setup, knowledge of HTML and CSS will help you make changes.
🎉 Contribute
Have ideas for improving the loading screen? Feel free to fork this repository, make your changes, and submit a pull request. All contributions are welcome!

📧 Support
If you encounter any issues or need assistance, please contact me via Discord: Rambo3Dev.


