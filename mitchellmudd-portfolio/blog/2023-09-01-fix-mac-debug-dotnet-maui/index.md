---
slug: fix-mac-debug-dotnet-maui
title: Fix Mac Debugging not working .Net MAUI  + my thoughts on .Net MAUI
image: "./dotnetMauiThumbnail.png"
authors: Mitchell
tags: [.Net MAUI, Debugging, C#, Blazor]
---

![Logo of the dotnet mascot Mod](dotnetMauiThumbnail.png)

When I first started my new project using .Net MAUI (Blazor Server) I ran into a **big** issue. I couldn't use the debugger 🤯! For a while I just dealt with this, but then kept dealing with bugs that would have been much easier to fix with a debugger. I finally decided to fix this issue and I'm going to show you how to fix it too!

<!--truncate-->

The solution is fairly simple. You'll need to navigate to the Program.cs file in the MacCatalyst platform folder

`root folder > Platforms > MacCatalyst > Program.cs`

Then within the `Main` method you'll need to add the following line of code:

```cs
Thread.Sleep(5000);
```

Which will make your `Main` method look like this:

```cs
static void Main(string[] args)
	{
		Thread.Sleep(5000);
		UIApplication.Main(args, null, typeof(AppDelegate));
	}
```

See the [resources](#resources) section for where I found this solution and more information on why this works.

This will allow the debugger to attach to the process and you'll be able to debug your .Net MAUI app on Mac! 🎉

## My thoughts on .Net MAUI

Now that you're able to debug your Mac application I'll share a few of my thoughts both positive and negative on developing with .Net MAUI.

### The good parts

- There are fewer decisions to make than in Javascript land
- C# code is really intuitive with plenty of method overloads for different use cases
- C# documentation is *generally* pretty good
- Separating your code out with the presentation up top and the logic below helps my brain

### The not as good parts

- While there’s plenty of documentation on C# there’s a lack of it on MAUI… especially when developing with Blazor
    - An example is the error boundary component in Blazor. I couldn’t find anywhere that specified that the content tag **must** be a component itself. When I finally tried using just a component it finally worked
- When you need to use Javascript for event listeners it feels a bit clunky.
- I still haven’t figured out how to get hot reload working with my app so I have to restart it every time 😟 If anyone knows why this is happening feel free to reach out to me on LinkedIn lol
- Debugging Blazor code is a bit funky. Because the code is using web technology on the desktop you can use Safari on Mac (I couldn't figure out how to do this with Chrome) to debug your HTML and CSS. It's nice, but doesn't feel as smooth as debugging your frontend would feel in an actual web project or something like React Native.

## Conclusion 🎭

I'm a big fan of .Net and I believe that .Net MAUI can help those already familiar with it build cross-platform applications. I'm excited to continue working on my project and I hope that this article helped you fix your debugging issues!

## Resources

- [Where I found the sleep method solution](https://youtrack.jetbrains.com/issue/RIDER-79838/Cannot-debug-maccatalyst-target-in-MAUI-project)
- [Dotnet MAUI](https://dotnet.microsoft.com/en-us/apps/maui)
- [My .Net MAUI Project](https://github.com/mitchelldirt/cycleFitMAUI)