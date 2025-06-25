+++
title = 'Run C# files directly with dotnet run'
date = 2025-06-25T19:00:00+01:00
+++
With .NET 10, it is possible to run C# files directly using `dotnet run app.cs` - no need to create a project/solution. It is also possible to add NuGet packages like this:

```csharp
#:package Humanizer@2.14.1

using Humanizer;

var dotNet9Released = DateTimeOffset.Parse("2024-12-03");
var since = DateTimeOffset.Now - dotNet9Released;

Console.WriteLine($"It has been {since.Humanize()} since .NET 9 was released.");
```

Adding `#!/usr/bin/dotnet run` at the top of the file allows you to run it directly from the command line without needing to specify `dotnet run` every time. So this way we can use C# as a bash script alternative.