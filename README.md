# 🏺 Antique Loading Screen by Rambo3Dev

Welcome to the **Antique Loading Screen**! This loading screen combines a classic, vintage aesthetic with modern functionality, perfect for your FiveM server.

![Antique Loading Screen](https://media.discordapp.net/attachments/1132179857384681509/1282498425115377674/Screenshot_250.png?ex=66e03bfc&is=66deea7c&hm=f7bfa597fe9d39e6e1ca7313978378945ddb01e0f458320590add36dbd03b063&=&format=webp&quality=lossless&width=1210&height=683)

## 🎨 Features
- **Unique Antique Design**: A visually appealing loading screen with a vintage touch.
- **Fully Responsive**: Works seamlessly on all screen sizes and devices.
- **Custom Background**: Add your own background to fit your server's theme.
- **Progress Bar**: Smooth and stylish loading progress bar.
- **Song Controls**: Play, pause, and skip through your chosen background music.
- **Server Information Display**: Show server rules, updates, and staff members while players wait.
- **Discord Integration**: Include a link to your Discord server to keep your community connected.

## 🚀 Step-by-Step Installation Instructions

1. **Extract and Place**: Extract the downloaded files and place the entire folder in your FiveM server's resource directory. Rename the folder to `Rambo3Dev-loading-screen` for consistency.

    ```plaintext
    fivem-server/
    └── resources/
        └── Rambo3Dev-loading-screen/
    ```

2. **Configure `fxmanifest.lua`**: Ensure your `fxmanifest.lua` includes the necessary files for the loading screen to function properly. Your `fxmanifest.lua` should look like this:

    ```lua
    fx_version 'cerulean'
    game 'gta5'

    files {
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
    ```

3. **Start the Resource**: Add the following line to your `server.cfg` file to start the loading screen when your server launches.

    ```plaintext
    start Rambo3Dev-loading-screen
    ```

4. **Customize**: You can customize the loading screen to match your server's theme by modifying the following files:
    - **Background Image**: Replace `images/background.jpg` with your own background image.
    - **Music**: Replace `song1.mp3`, `song2.mp3`, and `song3.mp3` with your desired tracks in the `song` folder.
    - **Server Information**: Edit `index.html` to update the server rules, staff info, and other details.

5. **Restart Your Server**: After making the necessary changes, restart your FiveM server to apply the loading screen.

## 📂 File Structure

```plaintext
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
```

# 🔗 Links

[Visit my Tebex Store](https://rambo3dev-shop.tebex.io)

[Join our Discord Server](https://discord.gg/sMawDztCVq)

GitHub Repository: View the GitHub repository for this project

# ⚙️ Customization Options
Background: Replace images/background.jpg with your preferred image.
Music: Replace the song1.mp3, song2.mp3, and song3.mp3 files in the song folder with your desired music.
Server Information: Update the text and content in index.html to display your server rules, staff, and other important details.

# 🛠️ Requirements
FiveM Server: Ensure you have a running FiveM server to use this loading screen.
Basic HTML/CSS Knowledge: For customization beyond the default setup, knowledge of HTML and CSS will help you make changes.

# 🎉 Contribute
Have ideas for improving the loading screen? Feel free to fork this repository, make your changes, and submit a pull request. All contributions are welcome!

# 📧 Support
If you encounter any issues or need assistance, please contact me via Discord: Rambo3Dev.
