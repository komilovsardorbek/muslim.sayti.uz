<?php

use afzalroq\cms\Module;
use yii\caching\FileCache;
use himiklab\yii2\recaptcha\ReCaptchaConfig;
use yii\i18n\PhpMessageSource;

$params = array_merge(
    require __DIR__ . '/params.php',
    require __DIR__ . '/params-local.php'
);

return [
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm' => '@vendor/npm-asset',
        '@url' => $params['siteUrl'],
        '@storageRoot' => $params['storageRoot'],
        '@storageHostInfo' => $params['storageHostInfo'],
    ],
    'vendorPath' => dirname(__DIR__, 2) . '/vendor',
    'language' => 'oz',
    'timezone' => 'Asia/Tashkent',
    'components' => [
        'cache' => [
            'class' => FileCache::class,
            'cachePath' => Yii::getAlias('@frontend') . '/runtime/cache'
        ],
        'assetManager' => [
//        'bundles' => [
//            JqueryAsset::class => [
//                'jsOptions' => ['position' => View::POS_HEAD]
//            ]
//        ],
            'appendTimestamp' => true,
        ],
        'reCaptcha' => [
            'class' => ReCaptchaConfig::class,
            'siteKeyV2' => '6Lc4CEMbAAAAAL1B9YR476zbqaPM1zunryI7eyxP',
            'secretV2' => '6Lc4CEMbAAAAAPswaovIjTvyPCoS5L_eB8Y4FBE3',
//            'siteKeyV3' => '',
//            'secretV3' => '',
        ],
        'i18n' => [
            'translations' => [
                'app*' => [
                    'class' => PhpMessageSource::class,
                    'basePath' => '@common/messages',
                    'fileMap' => [
                        'app' => 'app.php',
                        'app/error' => 'error.php',
                    ],
                ],
            ],
        ],
    ],
    'modules' => [
        'cms' => [ // don`t change module key
            'class' => Module::class,
            'path' => $params['storageRoot'], // dirname(__DIR__, 2) . '/storage'
            'host' => $params['storageHostInfo'], // 'https://site.example'
            'fallback' => $params['storageRoot'] . '/fallback.png',
            'watermark' => $params['storageRoot'] . '/logo.png',
//            'cacheDuration' => 3600,
            'languages' => [
                'oz' => [
                    'id' => 4,
                    'name' => 'Ўзбек (крилл)',
                ],
                'uz' => [
                    'id' => 1,
                    'name' => 'O`zbek (lotin)',
                ],
                'ru' => [
                    'id' => 0,
                    'name' => 'Русский',
                ],
                'en' => [
                    'id' => 2,
                    'name' => 'English',
                ],
                'ar' => [
                    'id' => 3,
                    'name' => 'اللغة العربية',
                ],
            ],
            'menuActions' => [ // for add to menu controller actions
                '' => 'Home',
                'site/contacts' => 'Contacts',
            ]
        ],
    ],
];
