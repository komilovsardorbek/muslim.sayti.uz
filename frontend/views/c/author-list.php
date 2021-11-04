<?php

?>

<section>
    <div class="section_inner">
        <div class="section_rub">
            <div class="container" style="padding:0;">
                <div class="row slider-pub">
                    <div class="col-sm-9" style="padding-right: 23px;">
                        <div class="post_card">
                            <?php foreach ($authors as $author): ?>
                                <div class="autor" style="margin-bottom: 10px;">
                                    <div class="row">
                                        <div class="col-12 border_left">
                                            <img class="img_shayx" src="<?= $author->getPhoto1('640', '480', 'zoomCrop', 'transparent', 'center', 'center') ?>"
                                                 alt="#logo">
                                            <div style="padding-left: 20px;">
                                                <div class="py-1"><?= Yii::t('app', 'Author') ?></div>
                                                <div class="bold_word"><a href="<?= $author->link ?>"><?= $author->getName() ?></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    <?= $this->render('/layouts/aside.php') ?>
                </div>
            </div>
        </div>
    </div>
</section>