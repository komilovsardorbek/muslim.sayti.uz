<?php

namespace frontend\assets;

use yii\web\AssetBundle;
use yii\web\YiiAsset;

class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        '/css/bootstrap.min.css',
        '/css/main.css',
        '//fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;0,700;1,400&display=swap',
        '/css/owl.carousel.min.css',
        '/css/owl.theme.default.min.css',
        '//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
        '/css/changes.css',
        '/css/contact.css',
        '/css/toast.css',
        '/css/faq.css',
        '/css/header-button.css',
        '/css/header-top.css',
        '/css/header-center.css',
        '/css/section1.css',
        '/css/section2.css',
        '/css/inner_page.css',
        '/css/header-mobile.css',
        '/css/owl-work.css',
        '/css/time.css',
        '/css/azon_list.css',
        '/css/own.css',
        '/css/audio.css',
        '/css/audio.css',
        '/css/page-nav.css',
        '/css/site-nav.css',
        '/css/dropdown.css',
        '/css/infinite-scroll.css',
        '/css/slick.css'
    ];
    public $js = [
        '/js/app.js',
        '/js/namaz.js',
        '/js/datetime.js',
        '/js/main.js',
        '/js/faq.js',
        '/js/owl.carousel.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
        '//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
        '//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.3.1/jquery.cookie.js',
        '/js/mobilenamaztime.js',
        '/js/slick.min.js'
    ];
    public $depends = [
        YiiAsset::class,
    ];
}
