# :star: 翻译接口说明

![](../assets/images/demo.translate_setting.gif)

## 翻译接口类型

### 不需要API KEY
1. 它们非常不稳定，并不是每个API都能在你的电脑中使用。
2. 如果翻译失败，请尝试切换其他API，:warning::warning::warning: **不要提交issue！**

### 需要API KEY
1. 需要自行申请API KEY。
2. 不同接口的申请方法，在切换到对应接口后，会出现对应的申请教程。
3. :warning::warning::warning: **它们大部分都是 `免费` 的！**

### 离线翻译
1. 在初始化时需要自动下载语言模型。
2. 如果你的网络环境不好，可能无法完成自动下载并初始化。
3. 对电脑性能有较高的要求。
4. 不同模型的翻译质量差别会很大。
5. 不同模型翻译的速度差别会很大。
6. 请查看：[离线翻译](/zh-CN/OfflineTranslation.md)

## 翻译接口对比

|  | 不需要API KEY | 需要API KEY | 离线翻译 |
| :--- | :--- | :--- | :--- |
| 收费 | `免费` | `大部分免费`<br/>可能每个月有翻译字符数的限制，但基本上免费的额度完全足够我们使用。 | `免费` |
| 稳定 | `非常不稳定`<br/>根据每个人的电脑环境和网络环境不同，其中部分可能无法使用。<br/>非常不稳定，可能随时失效。<br/>在测试时可能翻译成功，但是在实际使用时可能翻译失败。 | `非常稳定` | `非常稳定` |
| 速度 | `非常慢` | `非常快` | `根据模型不同，速度不一样` |

## 所有翻译接口

<Translators lang="zh-CN"/>