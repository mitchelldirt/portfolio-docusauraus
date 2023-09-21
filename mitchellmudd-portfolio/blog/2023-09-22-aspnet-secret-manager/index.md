---
slug: dotnet-asp-secret-manager
title: Using Secret Manager in ASP.NET
image: "./thumbnail.jpg"
authors: Mitchell
tags: [.Net, ASP.NET, C#]
---

![Logo of the dotnet mascot Mod](thumbnail.jpg)

Having come over to .Net from javascript land I found myself confused when I needed to store sensitive information for
the first time. I couldn't use a `.env` file and `proccess.env.superSecretThing` anymore. No worries though because there
are tons of ways to store sensitive data using .Net!

<!--truncate-->

## What is secret manager?

From Microsoft:

> The Secret Manager tool stores sensitive data during the development of an ASP.NET Core project. In this context,
> a piece of sensitive data is an app secret. App secrets are stored in a separate location from the project tree. 
> The app secrets are associated with a specific project or shared across several projects. The app secrets aren't 
> checked into source control.

Keep in mind that just because the secrets are stored outside of source control that doesn't mean it's secure. The
secrets still get stored locally on your computer.

**MacOS/Linux Directory**

`~/.microsoft/usersecrets/<user_secrets_id>/secrets.json`

**Windows Directory** 

`%APPDATA%\Microsoft\UserSecrets\<user_secrets_id>\secrets.json`

## How do I use it?

> pro-tip: check out the [resources](#resources) for the guide from Microsoft which is quite a bit more complicated than mine, but also goes more in depth :)

### Initializing the secret manager

Navigate to the root of your .Net project and run this command

`dotnet user-secrets init`

This will initialize the json file used to store your secrets. 

### Setting a secret

You can then set a new secret using the below command

`dotnet user-secrets set "ServiceApiKey" "12345"`

### Accessing your secrets

When I was trying access my secrets using ASP.NET I was unable to access them using the IConfiguration class; However, I'm
pretty certain that I just wasn't doing it correctly, or it's better suited for a different type .Net project type. Regardless, the way
that I accessed it was fairly simple:

```js
namespace secretManagerTutorial;

public class Secrets
{
    public static string FetchSecret()
    {
        // Setup the config object
        var config = new ConfigurationBuilder().AddUserSecrets<Program>().Build();
        
        // Access the ServiceApiKey secret
        var clientId = config["ServiceApiKey"];
        
        // clientId could be null since we aren't sure what's in the secret manager. Make sure to check :)
        return clientId ?? "secret not found :(";
    }
}
```

I was able to do this within any C# file to quickly get access to all of my secrets.
As mentioned earlier though this is only good for local development or proof of concepts. I highly recommend
using [Azure Key Vault](https://azure.microsoft.com/en-us/products/key-vault/) 🔑 instead.

## Are there any alternatives?

### Default Azure Credential

If you're only trying to authenticate with something like Azure Key Vault then simply logging into azure (`az login`)
will do the trick. I've included a link to how this works in the [resources](#resources).

### Key Vault

My personal preference for managing secrets is *Azure Key Vault*, but there are plenty of other options. Using the default azure credential
mentioned above you can store and then access all of your environment variables through the azure key vault. The user interface is
easy to use grabbing values from the key vault is quite simple as well. I've linked a great guide from Microsoft in the [resources](#resources) :)

### appsettings.json Environment Variables

🚨 This is a quick and dirty alternative to the above that I recommend against 🚨

It's easier to set up than the others, but you run the risk of pushing your sensitive data to your version control system 😱

Given the example `appsettings.json`

```json
{
  "Position": {
    "Title": "Editor",
    "Name": "Joe Smith"
  },
  "MyKey": "My appsettings.json Value",
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*"
}
```

you can access things like the position "object" which can hold variables through the IConfiguration class. Here's an example:

```js
public class TestModel : PageModel
{
    // requires using Microsoft.Extensions.Configuration;
    private readonly IConfiguration Configuration;

    public TestModel(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public ContentResult OnGet()
    {
        var myKeyValue = Configuration["MyKey"];
        var title = Configuration["Position:Title"];
        var name = Configuration["Position:Name"];
        var defaultLogLevel = Configuration["Logging:LogLevel:Default"];


        return Content($"MyKey value: {myKeyValue} \n" +
                       $"Title: {title} \n" +
                       $"Name: {name} \n" +
                       $"Default Log Level: {defaultLogLevel}");
    }
}
```

There's a great Microsoft article about this right below the sentence in the [resources](#resources).

## Conclusion

Azure secret manager is great for quickly making a proof of concept with .Net, but falls short as soon as you need to
production. It's great to know how to use this and the other tools mentioned throughout this blog post. You can find source code showcasing how I implemented the secret manager in the resources section below :)

**Thank you for taking the time to read my blog post! 🎉**

## Resources

- [What is the secret manager and how to use it](https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-7.0&tabs=windows#secret-manager)
- [Default Azure Credential](https://learn.microsoft.com/en-us/dotnet/api/azure.identity.defaultazurecredential?view=azure-dotnet)
- [How to use the Azure Key Vault in .Net](https://learn.microsoft.com/en-us/azure/key-vault/secrets/quick-create-net?tabs=azure-cli)
- [appsettings.json / configuration environment variables](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-7.0#appsettingsjson)
- [Source code for this tutorial](https://github.com/mitchelldirt/secretManagerTutorial/tree/master)

## Attribution

Photo by <a href="https://unsplash.com/@jankolar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jan Antonin Kolar</a> on <a href="https://unsplash.com/photos/lRoX0shwjUQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  