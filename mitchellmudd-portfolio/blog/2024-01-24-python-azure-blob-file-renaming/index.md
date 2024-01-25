---
slug: python-azure-blob-file-rename
title: Removing Special Characters in an Azure Blob Container Using Python
image: "./pythonBlob.png"
authors: Mitchell
tags: [Python, Azure, Scripting]
---

![Python and Azure logo with a green plus symbol in between them](pythonBlob.png)

Special characters in file names can be a pain if you need to use them within a system that doesn’t allow special characters. In this post, I’ll show you how to remove them using a Python script 🐍

<!--truncate-->

**WARNING:** If the data you’re editing matters deeply to you, **PLEASE** save a copy of it before running this code

If you’d like to view the final code, you can skip ahead to the [end](#final-code)

## Step 1 (initialize blob service client)

You’ll need to authenticate with Azure, which I’ll be doing using the Azure CLI az login command and DefaultAzureCredential. [This article from Microsoft](https://learn.microsoft.com/en-us/azure/developer/python/sdk/authentication-overview) covers the specifics of it, but the short version is you’ll need to install the **azure.identity** and **azure.storage.blob** packages and then implement the following code

I decided to store the storage account and container names in a .env file. If you don’t know or remember how to do that, you can follow [this guide](https://dev.to/jakewitcher/using-env-files-for-environment-variables-in-python-applications-55a1)

```py
import os

from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

account_url = f"https://{os.getenv('storage_account')}.blob.core.windows.net"
default_credential = DefaultAzureCredential()

# Create the BlobServiceClient object
blob_service_client = BlobServiceClient(account_url, credential=default_credential)

# Name of the container in the above storage account
container_client = blob_service_client.get_container_client(os.getenv('container_name'))
```

## Step 2 (grab the file path from the blob)

Now we’ll grab all of the blobs within the container of the storage account. We need to make sure we’re dealing with a blob and not a directory within the storage browser so we’ll check for the existence of a period (If a folder has a period it will throw an error, I currently just keep running the script, ignoring the error). You need the path of the file and the name so that you can combine them later when you fix the file name.

```py
# List the blobs in the container
blob_list = container_client.list_blobs(name_starts_with='unlinked-files/')
for blob in blob_list:
    # make sure the blob has file extension otherwise it's a "folder"
    if '.' not in blob.name:
        continue

    # get index of last slash
    last_slash_index = blob.name.rfind('/')

    # get the path to the file
    path_to_file = blob.name[:last_slash_index + 1]

    # get the file name
    file_name = blob.name[last_slash_index + 1:]
```

## Step 3 (find if the blob has special characters)

We’ll create an array of characters we want to swap out (making sure to escape characters that otherwise wouldn’t be output). Then we’ll loop over the file name and check for the existence of special characters.

```py
 	# Decide which characters you want to remove from the file name
    special_characters = ['?', '*', ':', '<', '>', '|', '\\', '/', '\'', '\"', ',', ';', '#', '@', '!', '$', '%']

    # Initialize a variable to keep track of whether the file name contains any special characters
    contains_special_characters = False

    # Check if the file name contains any special characters listed above
    for character in special_characters:
        if character in file_name:
            contains_special_characters = True
            break
```

## Step 4 (replace the characters and re-upload)

If there aren’t any special characters we’ll output the name of the file that’s being skipped, otherwise we’ll out the special characters for underscores. Once we’re done swapping the special characters out we’ll create a blob client and download the data using .readall()

Then we’ll try to upload a duplicate of the blob we’re working on with the new name and then delete the original. If that’s successful we’ll output the new file name, otherwise we’ll output the exception.

```py
  	# If the file name contains any special characters, remove them
    if contains_special_characters:
        print("\t" + file_name)

        # Unnecessary variable used for readability
        new_file_name = file_name

        # Remove all special characters from the file name, in my case I'm replacing them with underscores
        for character in special_characters:
            new_file_name = new_file_name.replace(character, '_')

        # Get the blob data so we can upload it again with the new file name
        blob_client = container_client.get_blob_client(blob)
        blob_data = blob_client.download_blob().readall()

        try:
            # Upload the blob again with the new file name
            container_client.upload_blob(name=" ".join([path_to_file, new_file_name]), data=blob_data)

            # Delete the original blob
            container_client.delete_blob(blob)

            # Print the new file name
            print("\t" + new_file_name)
        except Exception as ex:
            # If an exception occurs, print it. I'm allowing the program to continue even if an exception occurs
            print('Exception Occured' + str(ex))
    else:
        # If the file name does not contain any special characters, skip it
        print("skip: " + file_name)
```

## Conclusion

Congrats! 🎉 Now you can remove special characters from an Azure Blob container using Python! If you have any questions or comments feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/mitchellmudd/).

## Final code

```py
import os

from azure.identity import DefaultAzureCredential
from azure.storage.blob import BlobServiceClient
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

account_url = f"https://{os.getenv('storage_account')}.blob.core.windows.net"
default_credential = DefaultAzureCredential()

# Create the BlobServiceClient object
blob_service_client = BlobServiceClient(account_url, credential=default_credential)

# Name of the container in the above storage account
container_client = blob_service_client.get_container_client(os.getenv('container_name'))

# List the blobs in the container
blob_list = container_client.list_blobs(name_starts_with='unlinked-files/')
for blob in blob_list:
    # make sure the blob has file extension otherwise it's a "folder"
    if '.' not in blob.name:
        continue

    # get index of last slash
    last_slash_index = blob.name.rfind('/')

    # get the path to the file
    path_to_file = blob.name[:last_slash_index + 1]

    # get the file name
    file_name = blob.name[last_slash_index + 1:]

    # Decide which characters you want to remove from the file name
    special_characters = ['?', '*', ':', '<', '>', '|', '\\', '/', '\'', '\"', ',', ';', '#', '@', '!', '$', '%']

    # Initialize a variable to keep track of whether the file name contains any special characters
    contains_special_characters = False

    # Check if the file name contains any special characters listed above
    for character in special_characters:
        if character in file_name:
            contains_special_characters = True
            break

    # If the file name contains any special characters, remove them
    if contains_special_characters:
        print("\t" + file_name)

        # Unnecessary variable used for readability
        new_file_name = file_name

        # Remove all special characters from the file name, in my case I'm replacing them with underscores
        for character in special_characters:
            new_file_name = new_file_name.replace(character, '_')

        # Get the blob data so we can upload it again with the new file name
        blob_client = container_client.get_blob_client(blob)
        blob_data = blob_client.download_blob().readall()

        try:
            # Upload the blob again with the new file name
            container_client.upload_blob(name=" ".join([path_to_file, new_file_name]), data=blob_data)

            # Delete the original blob
            container_client.delete_blob(blob)

            # Print the new file name
            print("\t" + new_file_name)
        except Exception as ex:
            # If an exception occurs, print it. I'm allowing the program to continue even if an exception occurs
            print('Exception Occured' + str(ex))
    else:
        # If the file name does not contain any special characters, skip it
        print("skip: " + file_name)
```