# :star: Инструкция по использованию переводчика

![](../assets/images/demo.translate_setting.gif)

## Типы переводчиков

### API-ключ не требуется
1. Эти переводчики нестабильны и могут не работать на вашем компьютере.
2. Если перевод не удался, попробуйте переключиться на другой переводчик. :warning::warning::warning: **Не отправляйте запросы об ошибке!**

### API-ключ необходим
1. Вам нужно самостоятельно получить API-ключ.
2. Методы получения ключа для разных переводчиков будут представлены в соответствующих учебных пособиях после переключения на соответствующий переводчик.
3. :warning::warning::warning: **Большинство из них `бесплатны`!**

### Офлайн-перевод
1. При инициализации требуется автоматическая загрузка языковой модели.
2. Если у вас плохое интернет-соединение, автоматическая загрузка и инициализация могут не завершиться.
3. Требуются высокие компьютерные характеристики.
4. Качество перевода может сильно отличаться у разных моделей.
5. Скорость перевода может сильно отличаться у разных моделей.
6. Просмотреть: [Офлайн-перевод](/ru/OfflineTranslation.md)

## Сравнение интерфейсов перевода

|  | API-ключ не требуется | API-ключ необходим | Офлайн-перевод |
| :--- | :--- | :--- | :--- |
| Цена | `Бесплатно` | `Большинство бесплатны`<br/>Может быть ограничение на количество символов для перевода в месяц, но обычно бесплатного объема достаточно для наших нужд. | `Бесплатно` |
| Стабильность | `Очень нестабильно`<br/>Некоторые переводчики могут не работать в зависимости от вашего компьютера и сетевой среды.<br/>Очень нестабильно, может перестать работать в любой момент.<br/>Перевод может успешно выполняться во время тестирования, но неудачно в реальном использовании. | `Очень стабильно` | `Очень стабильно` |
| Скорость | `Очень медленно` | `Очень быстро` | `Зависит от модели` |

## Все интерфейсы перевода

<Translators lang="ru"/>