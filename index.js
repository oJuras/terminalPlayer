const fs = require('fs');
const { exec } = require('child_process')
const execPromise = require('util').promisify(exec)
const path = require("path");
const re = /^(?!.*[\\\/]\s+)(?!(?:.*\s|.*\.|\W+)$)(?:[a-zA-Z]:)?(?:(?:[^<>:"\|\?\*\n])+(?:\/\/|\/|\\\\|\\)?)+$/gm

const playFrom = async function playFrom(filePath) {
    if(filePath.startsWith("./") || filePath.startsWith("../")){
        this.filePath = path.resolve(filePath);
    }else if(re.exec(filePath)){
        this.filePath = filePath;
    }else{
        throw new Error("File Path "+filePath+" is incompatible");
    }
    const consolePayload = "powershell -c Add-Type -AssemblyName presentationCore; $player = New-Object system.windows.media.mediaplayer; $player.open('"+this.filePath+"'); $player.Volume = 1; $player.Play(); Start-Sleep 1; Start-Sleep -s $player.NaturalDuration.TimeSpan.TotalSeconds; Exit;";
    await execPromise(consolePayload, {windowsHide: true})  
}

module.exports = { playFrom }