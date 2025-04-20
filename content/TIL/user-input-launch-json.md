+++
title = 'Asking for user input in a VSCode launch.json file'
date = 2025-04-2100:00:00+02:00
+++

While playing around with Zig (not that I'm actually going to try and learn it anytime soon I think) I had GitHub copilot generate the launch,json file for a little hello world app. Apparently you can ask for user input directly this way:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "lldb",
      "request": "launch",
      "name": "Debug Zig Executable",
      "program": "${workspaceFolder}/zig-out/bin/${input:executableName}",
      "preLaunchTask": "build",
      "args": [],
      "cwd": "${workspaceFolder}"
    }
  ],
  "inputs": [
    {
      "type": "promptString",
      "id": "executableName",
      "description": "Enter the name of the executable to debug (e.g., zig_hello_world)"
    }
  ]
}
```

When pressing F5, a little dialogue pops up and asks you to input some text which is then used in the config. Pretty neat.
