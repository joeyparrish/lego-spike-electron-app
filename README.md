# LEGO SPIKE Electron App

This hosts the LEGO SPIKE web app in Electron.  It's useful if you want your child to have access to this one app, but not to a general-purpose web browser.

## Installation

```sh
curl -L https://joeyparrish.github.io/lego-spike-electron-app/public.key | \
    sudo tee /etc/apt/trusted.gpg.d/lego-spike-electron-app.asc
echo deb https://joeyparrish.github.io/lego-spike-electron-app/ stable main | \
    sudo tee /etc/apt/sources.list.d/lego-spike-electron-app.list
sudo apt update
sudo apt install -y lego-spike
```
