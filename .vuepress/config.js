import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {sitemapPlugin} from "@vuepress/plugin-sitemap"
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
import { revealJsPlugin } from '@vuepress/plugin-revealjs'
import { markdownIncludePlugin } from '@vuepress/plugin-markdown-include'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { socialSharePlugin } from 'vuepress-plugin-social-share'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'

import fs from 'fs'
import path from 'path'

export default {
    // base: '/sd-webui-prompt-all-in-one-assets/',
    lang: 'en',
    dest: './dist',
    bundler: viteBundler({
        viteOptions: {
            build: {
                rollupOptions: {
                    cache: true,
                }
            }
        },
        vuePluginOptions: {},
    }),
    plugins: [
        backToTopPlugin(),
        // searchProPlugin({
        //     indexContent: true
        // }),
        // copyCodePlugin(),
        // fullTextSearchPlugin(),
        slimsearchPlugin({
            indexContent: true, // 是否索引内容
        }),
        sitemapPlugin({
            hostname: 'aiodoc.physton.com'
        }),
        revealJsPlugin({
            // 插件选项
        }),
        markdownIncludePlugin({
            // 选项
        }),
        markdownImagePlugin({
            // 启用 figure
            figure: true,
            // 启用图片懒加载
            lazyload: true,
            // 启用图片标记
            mark: true,
            // 启用图片大小
            size: true,
        }),
        socialSharePlugin(),
        copyCodePlugin({
            // options
        }),
    ],
    async onPrepared(app) {
        const translate_apis = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'translate_apis.json'), 'utf8'))
        await app.writeTemp('translate_apis.js', `export const translate_apis = ${JSON.stringify(translate_apis)}`)

        const i18n = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'i18n.json'), 'utf8'))
        await app.writeTemp('i18n.js', `export const i18n = ${JSON.stringify(i18n)}`)
    },
    locales: {
        '/': {
            lang: 'en',
            name: 'English',
            title: 'sd-webui-prompt-all-in-one',
            description: 'sd-webui-prompt-all-in-one is an extension based on stable-diffusion-webui that aims to improve the user experience of the prompt/negative prompt input box. It has a more intuitive and powerful input interface, provides automatic translation, history and collection functions, and supports multiple languages to meet the needs of different users.',
            top: `
            <div>This project is developed in Physton. The documentation in multiple languages is translated using machine translation. Please excuse any translation errors.</div>
            <div>If you find this extension helpful, please give me a star on Github! You could also buy me a coffee: <a href="{donateUrl}">donate</a></div>
            <div>&nbsp;</div>
            <div>⭐️⭐️⭐️ This project has developed an independent standalone version that can run without relying on stable-diffusion-webui. It is lightweight and compact, focusing on editing and organizing prompt words. Visit <a href="https://github.com/Physton/sd-webui-prompt-all-in-one-app" target="_blank">Physton/sd-webui-prompt-all-in-one-app</a> for the tutorial on how to use it.</div>
            `
        },
        '/ru/': {
            lang: 'ru',
            name: 'Русский',
            title: 'sd-webui-prompt-all-in-one',
            description: 'sd-webui-prompt-all-in-one - это расширение для stable-diffusion-webui, разработанное для улучшения опыта использования полей ввода для prompt/negative prompt. Оно обладает более интуитивным и мощным интерфейсом ввода и предлагает функции автоматического перевода, истории и закладок. Оно поддерживает несколько языков, чтобы удовлетворить потребности различных пользователей.',
            top: `
            <div>Этот проект разработан Physton. Многоязычная документация основана на машинном переводе, пожалуйста, прошу прощения за возможные ошибки в переводе.</div>
            <div>Если вы считаете, что это расширение полезно, пожалуйста, поставьте мне звезду на Github! Вы также можете угостить меня чашкой кофе: <a href="{donateUrl}">donate</a></div>
            <div>&nbsp;</div>
            <div>⭐️⭐️⭐️ Этот проект разработал самостоятельную автономную версию, которая может работать без зависимости от stable-diffusion-webui. Он легкий и компактный, с фокусом на редактировании и организации ключевых слов. Посетите <a href="https://github.com/Physton/sd-webui-prompt-all-in-one-app" target="_blank">Physton/sd-webui-prompt-all-in-one-app</a> для просмотра руководства по использованию.</div>
            `
        },
        '/zh-CN/': {
            lang: 'zh-CN',
            name: '简体中文',
            title: 'sd-webui-prompt-all-in-one',
            description: 'sd-webui-prompt-all-in-one 是一个基于 stable-diffusion-webui 的扩展，旨在提高提示词/反向提示词输入框的使用体验。它拥有更直观、强大的输入界面功能，它提供了自动翻译、历史记录和收藏等功能，它支持多种语言，满足不同用户的需求。',
            top: `
            <div>此项目由 Physton 开发。多国语言文档来自机器翻译，如有翻译错误请谅解。</div>
            <div>如果你觉得这个扩展有帮助，请在Github上给我一颗星！你也可以请我喝杯咖啡: <a href="{donateUrl}">donate</a></div>
            <div>&nbsp;</div>
            <div>⭐️⭐️⭐️ 本项目已开发独立运行版本，不依赖 stable-diffusion-webui 既可运行。轻便小巧，专注于提示词的编辑和整理。前往 <a href="https://github.com/Physton/sd-webui-prompt-all-in-one-app" target="_blank">Physton/sd-webui-prompt-all-in-one-app</a> 查看使用教程。</div>
            `
        },
        '/zh-TW/': {
            lang: 'zh-TW',
            name: '繁體中文',
            title: 'sd-webui-prompt-all-in-one',
            description: 'sd-webui-prompt-all-in-one 是基於 stable-diffusion-webui 的擴展，旨在提升提示詞/反向提示詞輸入框的使用體驗。它擁有更直觀、強大的輸入界面功能，並提供自動翻譯、歷史記錄和收藏等功能。它支援多種語言，滿足不同用戶的需求。',
            top: `
            <div>此項目由 Physton 開發。多國語言文檔來自機器翻譯，如有翻譯錯誤請諒解。</div>
            <div>如果你覺得這個擴展有幫助，請在Github上給我一顆星！你也可以請我喝杯咖啡: <a href="{donateUrl}">donate</a></div>
            <div>&nbsp;</div>
            <div>⭐️⭐️⭐️ 本專案已開發獨立運行版本，不依賴 stable-diffusion-webui 既可運行。輕巧小巧，專注於提示詞的編輯和整理。前往 <a href="https://github.com/Physton/sd-webui-prompt-all-in-one-app" target="_blank">Physton/sd-webui-prompt-all-in-one-app</a> 查看使用教程。</div>
            `
        },
    },
    theme: defaultTheme({
        selectLanguageText: '🌏Languages / Язык / 语言 / 語言',
        editLink: true,
        docsRepo: 'Physton/sd-webui-prompt-all-in-one-docs',
        docsDir: '/',
        lastUpdated: true,
        locales: {
            '/': {
                selectLanguageName: 'English',
                navbar: [
                    {text: 'Home', link: '/'},
                    {text: 'Donate', link: '/Donate.md'},
                    {text: 'GitHub', link: 'https://github.com/Physton/sd-webui-prompt-all-in-one'},
                ],
                sidebar: [
                    '/Installation.md',
                    '/InstallationPackages.md',
                    '/ExtensionUpdateDescription.md',
                    '/TranslationAPIDescription.md',
                    '/OfflineTranslation.md',
                    {
                        text: 'Toolbar', link: '', children: [
                            '/LanguageSelection.md',
                            {
                                text: 'Settings', link: '', children: [
                                    '/TranslationApiConfiguration.md',
                                    '/FormatOfPrompts.md',
                                    '/PromptBlacklist.md',
                                    '/ThemeStyle.md',
                                    '/Theme.md',
                                    '/About.md',
                                    '/AutomaticTranslation.md',
                                    '/Tooltip.md',
                                    '/AutoInputPrompt.md',
                                ]
                            },
                            '/History.md',
                            '/Favorite.md',
                            '/BatchTranslation.md',
                            '/UsingChatgptToGeneratePrompts.md',
                            '/KeywordInputBox.md',
                            '/OtherFeatures.md',
                        ]
                    },
                    {
                        text: 'List of keywords', link: '', children: [
                            '/ListOfKeywords.md',
                            '/BatchOperation.md',
                            '/GroupTags.md',
                        ]
                    },
                    {
                        text: 'Other', link: '', children: [
                            '/WritingInWebUIInputBox.md',
                            '/Contributing.md',
                        ]
                    },
                    '/FAQ.md',
                    '/Donate.md'
                ]
            },
            '/ru/': {
                selectLanguageName: 'Русский',
                navbar: [
                    {text: 'Главная страница', link: '/ru/'},
                    {text: 'Пожертвование', link: '/ru/Donate.md'},
                    {text: 'GitHub', link: 'https://github.com/Physton/sd-webui-prompt-all-in-one'},
                ],
                sidebar: [
                    '/ru/Installation.md',
                    '/ru/InstallationPackages.md',
                    '/ru/ExtensionUpdateDescription.md',
                    '/ru/TranslationAPIDescription.md',
                    '/ru/OfflineTranslation.md',
                    {
                        text: 'Панель инструментов', link: '', children: [
                            '/ru/LanguageSelection.md',
                            {
                                text: 'Настройки', link: '', children: [
                                    '/ru/TranslationApiConfiguration.md',
                                    '/ru/FormatOfPrompts.md',
                                    '/ru/PromptBlacklist.md',
                                    '/ru/ThemeStyle.md',
                                    '/ru/Theme.md',
                                    '/ru/About.md',
                                    '/ru/AutomaticTranslation.md',
                                    '/ru/Tooltip.md',
                                    '/ru/AutoInputPrompt.md',
                                ]
                            },
                            '/ru/History.md',
                            '/ru/Favorite.md',
                            '/ru/BatchTranslation.md',
                            '/ru/UsingChatgptToGeneratePrompts.md',
                            '/ru/KeywordInputBox.md',
                            '/ru/OtherFeatures.md',
                        ]
                    },
                    {
                        text: 'Список ключевых слов', link: '', children: [
                            '/ru/ListOfKeywords.md',
                            '/ru/BatchOperation.md',
                            '/ru/GroupTags.md',
                        ]
                    },
                    {
                        text: 'Другое', link: '', children: [
                            '/ru/WritingInWebUIInputBox.md',
                            '/ru/Contributing.md',
                        ]
                    },
                    '/ru/FAQ.md',
                    '/ru/Donate.md'
                ]
            },
            '/zh-CN/': {
                selectLanguageName: '简体中文',
                navbar: [
                    {text: '首页', link: '/zh-CN/'},
                    {text: '捐赠', link: '/zh-CN/Donate.md'},
                    {text: 'GitHub', link: 'https://github.com/Physton/sd-webui-prompt-all-in-one'},
                    {text: 'Gitee 中国镜像', link: 'https://gitee.com/Physton/sd-webui-prompt-all-in-one'},
                ],
                sidebar: [
                    '/zh-CN/Installation.md',
                    '/zh-CN/InstallationPackages.md',
                    '/zh-CN/ExtensionUpdateDescription.md',
                    '/zh-CN/TranslationAPIDescription.md',
                    '/zh-CN/OfflineTranslation.md',
                    {
                        text: '工具栏', link: '', children: [
                            '/zh-CN/LanguageSelection.md',
                            {
                                text: '设置', link: '', children: [
                                    '/zh-CN/TranslationApiConfiguration.md',
                                    '/zh-CN/FormatOfPrompts.md',
                                    '/zh-CN/PromptBlacklist.md',
                                    '/zh-CN/ThemeStyle.md',
                                    '/zh-CN/Theme.md',
                                    '/zh-CN/About.md',
                                    '/zh-CN/AutomaticTranslation.md',
                                    '/zh-CN/Tooltip.md',
                                    '/zh-CN/AutoInputPrompt.md',
                                ]
                            },
                            '/zh-CN/History.md',
                            '/zh-CN/Favorite.md',
                            '/zh-CN/BatchTranslation.md',
                            '/zh-CN/UsingChatgptToGeneratePrompts.md',
                            '/zh-CN/KeywordInputBox.md',
                            '/zh-CN/OtherFeatures.md',
                        ]
                    },
                    {
                        text: '关键词列表', link: '', children: [
                            '/zh-CN/ListOfKeywords.md',
                            '/zh-CN/BatchOperation.md',
                            '/zh-CN/GroupTags.md',
                        ]
                    },
                    {
                        text: '其他', link: '', children: [
                            '/zh-CN/WritingInWebUIInputBox.md',
                            '/zh-CN/Contributing.md',
                        ]
                    },
                    '/zh-CN/FAQ.md',
                    '/zh-CN/Donate.md'
                ]
            },
            '/zh-TW/': {
                selectLanguageName: '繁體中文',
                navbar: [
                    {text: '首頁', link: '/zh-TW/'},
                    {text: '捐贈', link: '/zh-TW/Donate.md'},
                    {text: 'GitHub', link: 'https://github.com/Physton/sd-webui-prompt-all-in-one'},
                    {text: 'Gitee 中国镜像', link: 'https://gitee.com/Physton/sd-webui-prompt-all-in-one'},
                ],
                sidebar: [
                    '/zh-TW/Installation.md',
                    '/zh-TW/InstallationPackages.md',
                    '/zh-TW/ExtensionUpdateDescription.md',
                    '/zh-TW/TranslationAPIDescription.md',
                    '/zh-TW/OfflineTranslation.md',
                    {
                        text: '工具欄', link: '', children: [
                            '/zh-TW/LanguageSelection.md',
                            {
                                text: '設置', link: '', children: [
                                    '/zh-TW/TranslationApiConfiguration.md',
                                    '/zh-TW/FormatOfPrompts.md',
                                    '/zh-TW/PromptBlacklist.md',
                                    '/zh-TW/ThemeStyle.md',
                                    '/zh-TW/Theme.md',
                                    '/zh-TW/About.md',
                                    '/zh-TW/AutomaticTranslation.md',
                                    '/zh-TW/Tooltip.md',
                                    '/zh-TW/AutoInputPrompt.md',
                                ]
                            },
                            '/zh-TW/History.md',
                            '/zh-TW/Favorite.md',
                            '/zh-TW/BatchTranslation.md',
                            '/zh-TW/UsingChatgptToGeneratePrompts.md',
                            '/zh-TW/KeywordInputBox.md',
                            '/zh-TW/OtherFeatures.md',
                        ]
                    },
                    {
                        text: '關鍵詞列表', link: '', children: [
                            '/zh-TW/ListOfKeywords.md',
                            '/zh-TW/BatchOperation.md',
                            '/zh-TW/GroupTags.md',
                        ]
                    },
                    {
                        text: '其他', link: '', children: [
                            '/zh-TW/WritingInWebUIInputBox.md',
                            '/zh-TW/Contributing.md',
                        ]
                    },
                    '/zh-TW/FAQ.md',
                    '/zh-TW/Donate.md'
                ]
            },
        },
    }),
}