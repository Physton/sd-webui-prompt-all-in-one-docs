# Keyword Grouping / One-Click Keyword Addition

![](./assets/images/demo.group_tags.gif)

> Prompt word integration from sources such as 路过银河 (Zhihu), Unknown Author (Google Drive), the Internet, and more. Thanks to these authors for their selfless contributions!

## Function Description

1. Click on different category names and keywords to add them to the input box.
2. Customize the keyword colors for different groups or remove the colors altogether.
3. Customize the content of keyword groups.
4. Only a few languages have been translated for the keywords. If your language is not available, you can translate it yourself or submit an issue on GitHub to request a translation.
5. The current keyword translations are machine-generated and may contain errors. If you find any mistakes, you can submit an issue on GitHub to request a correction.

## Keyword Files

1. Keywords are stored in YAML format files located in the `group_tags` directory. There are three types of file names in this directory:
   1. `default.yaml`: The default file that cannot be deleted. This file does not have localized translations and is primarily displayed in the English interface.
   2. `language_code.yaml`: Keyword files for different language environments.
   3. `custom.yaml`: Custom file created by users.
2. The plugin will prioritize loading the `custom.yaml` file. If that file is not available, it will load the `language_code.yaml` file. If that file is also not available, it will finally load the `default.yaml` file.
3. Currently, only a few languages have been translated for the keywords. If your language is not available, you can duplicate the `default.yaml` file as `custom.yaml` and translate it yourself.
4. It is not recommended to directly modify the `default.yaml` and `language_code.yaml` files. If you need to customize keyword groups, please create a `custom.yaml` file.
5. To view the content format of the keyword files, please open the `default.yaml` file.
6. Files with incorrect content formats will not be successfully loaded. You can use the [https://www.yamllint.com/](https://www.yamllint.com/) website to check the format.