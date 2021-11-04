<aside class="main-sidebar">
    <section class="sidebar">
        <div class="user-panel">
            <div class="pull-left image">
                <img src="/images/avatar2.jpeg" class="img-circle" alt="User Image"/>
            </div>
            <div class="pull-left info">
                <p><?= Yii::$app->user->identity->username ?></p>
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
        <?= dmstr\widgets\Menu::widget(
            [
                'options' => ['class' => 'sidebar-menu tree', 'data-widget' => 'tree'],
                'items' => [
                    ['label' => 'Boshqaruv', 'options' => ['class' => 'header']],
                    YII_ENV === 'dev' ? ['label' => 'CMS', 'icon' => 'th-list', 'url' => ['/cms/home']] : [],
                    ['label' => 'Maqolalar', 'icon' => 'newspaper-o', 'url' => ['/cms/items/index?slug=posts']],
                    ['label' => 'Teglar', 'icon' => 'newspaper-o', 'url' => ['/cms/options/index?slug=tags']],
                    ['label' => 'Mualliflar', 'icon' => 'users', 'url' => ['/cms/options/index?slug=author']],
                    ['label' => '', 'options' => ['class' => 'header']],
                    [
                        'label' => 'Menyu sahifalari',
                        'icon' => 'bars',
                        'url' => '#',
                        'items' => [
                            ['label' => 'Iymon', 'icon' => 'newspaper-o', 'url' => ['/cms/options/index?slug=iyman']],
                            ['label' => 'Namoz', 'icon' => 'newspaper-o', 'url' => ['/cms/options/index?slug=prayer']],
                            ['label' => 'Ro`za', 'icon' => 'newspaper-o', 'url' => ['/cms/options/index?slug=fasting']],
                            ['label' => 'Zakot', 'icon' => 'newspaper-o', 'url' => ['/cms/options/index?slug=zakot']],
                            ['label' => 'Haj', 'icon' => 'newspaper-o', 'url' => ['/cms/options/index?slug=haj']],
                            ['label' => 'Qur`on', 'icon' => 'newspaper-o', 'url' => ['/cms/options/index?slug=quran']],
                            ['label' => 'Darslar', 'icon' => 'newspaper-o', 'url' => ['/cms/options/index?slug=lessons']],

                        ]
                    ],
                    ['label' => 'Sahifalar', 'icon' => 'newspaper-o', 'url' => ['/cms/items/index?slug=pages']],
                    ['label' => '', 'options' => ['class' => 'header']],
                    ['label' => 'Bannerlar', 'icon' => 'life-bouy', 'url' => ['/cms/items/index?slug=banner']],
                    ['label' => 'Reklama', 'icon' => 'chain', 'url' => ['/cms/items/index?slug=advertising']],
                    ['label' => '', 'options' => ['class' => 'header']],
                    ['label' => 'Qoldirilgan fikrlar',  'icon' => 'envelope-o', 'url' => ['/contacts']],
                    ['label' => '', 'options' => ['class' => 'header']],
                    ['label' => 'Foydalanuvchilar',  'icon' => 'users', 'url' => ['/user']],
                    ['label' => 'Hududlar', 'icon' => 'map-marker', 'url' => ['/regions']],
                    ['label' => 'Namoz vaqtlari', 'icon' => 'map-marker', 'url' => ['/namaz-time']],

                    ['label' => '', 'options' => ['class' => 'header']],
//                    ['label' => 'Menyu', 'icon' => 'th-list', 'url' => ['/cms/menu/index?slug=main']],
                    [
                        'label' => 'Sozlamalar',
                        'icon' => 'bars',
                        'url' => '#',
                        'items' => [
                            ['label' => 'Ijtimoiy tarmoqlar', 'icon' => 'twitter', 'url' => ['/cms/unit-categories/unit?slug=socials']],
                            ['label' => 'Basmala', 'icon' => 'life-bouy', 'url' => ['/cms/unit-categories/unit?slug=basmala']],
                            ['label' => 'Footer malumotlari', 'icon' => 'life-bouy', 'url' => ['/cms/unit-categories/unit?slug=contact-information']],
                        ]
                    ],

                ],
            ]
        ) ?>
    </section>
</aside>
