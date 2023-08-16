# Keyword Grouping / One-Click Keyword Addition

![](./assets/images/demo.group_tags.gif)

> Prompt word integration from sources such as 路过银河 (Zhihu), Unknown Author (Google Drive), the Internet, and more. Thanks to these authors for their selfless contributions!

## Function Description

1. Click on different category names and keywords to add them to the input box.
2. Customize the keyword colors for different groups or remove the colors altogether.
3. Customize the content of keyword groups.

## Keyword File

### File Types

1. Keywords are stored in YAML format files located in the `group_tags` directory.
2. It is not recommended to directly modify the `default.yaml` and `country_language_code.yaml` files. If you need to customize keyword groups, please use the `custom.yaml`, `prepend.yaml`, and `append.yaml` files.

- `default.yaml`: The default file that should not be deleted. This file does not have localized translations and is primarily displayed in the English interface.
- `country_language_code.yaml`: Keyword files for different language environments (not recommended for modification).
- `custom.yaml`: Custom file created by the user. If this file exists, the contents of the `country_language_code.yaml` file will not be displayed.
- `prepend.yaml`: Custom file created by the user. If this file exists, its contents will be added before the contents of the `country_language_code.yaml` file.
- `append.yaml`: Custom file created by the user. If this file exists, its contents will be added after the contents of the `country_language_code.yaml` file.

### File Loading Order

1. The plugin will first load the `custom.yaml` file. If this file does not exist, it will load the `country_language_code.yaml` file. If that file also does not exist, the `default.yaml` file will be loaded.
2. If the `prepend.yaml` file exists, its contents will be added before the already loaded file contents.
3. If the `append.yaml` file exists, its contents will be added after the already loaded file contents.

### Translation Information

1. Currently, only keywords in some national languages have been translated. If your language is not available, you can copy the `default.yaml` file as `custom.yaml` and translate it yourself.
2. Only a few national languages have been translated for keywords. If your language is not available, you can translate it yourself or submit an Issue on GitHub to request a translation.
3. The current keyword translations are machine-generated and may contain errors. If you find any errors, you can submit an Issue on GitHub to request a correction.

### Content Format

```yaml
- name: First-level category name
  groups: List of second-level categories
    - name: Second-level category name
      color: Default text color for keywords (can be empty). Use CSS color codes, e.g., #ff0000, red, rgb(255,0,0), rgba(255,0,0,1), hsl(0,100%,50%), hsla(0,100%,50%,1)
      tags: List of keywords
        - English keyword: Localized translation
        - English keyword: Localized translation
        ...
```

1. If there are special characters, it is recommended to enclose the keywords in double quotation marks.
2. There must be a space after the `:` symbol.
3. The number of spaces before each level must be consistent.
4. Each subcategory must have unique `English keyword` values and cannot contain duplicates.
5. The `Localized translation` can be empty, in which case the `English keyword` will be displayed.
6. It is recommended to use a professional text editor (such as Visual Studio Code) to edit this file to avoid encoding and formatting errors.
7. Do not use the default Notepad application in Windows to edit this file.
8. After making modifications, you can use [https://www.yamllint.com/](https://www.yamllint.com/) to check if the content format is correct.