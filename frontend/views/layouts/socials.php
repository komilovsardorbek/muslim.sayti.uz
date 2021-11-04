<?php

use afzalroq\cms\entities\unit\Unit;

?>

<div class="col-1 iconss_inner" style="padding: 0;">
    <a href="<?= Unit::findOne(['slug' => 'telegram'])->getModelByType()->get() ?>"><i
                style="color:#0088cc; font-size:20px" class="fab fa-telegram-plane "></i></a>
</div>
<div class="col-1 iconss_inner" class="icon-bumerang">
    <a href="<?= Unit::findOne(['slug' => 'twitter'])->getModelByType()->get() ?>"><i
                style="color:#1DA1F2; font-size:20px" class="fab fa-twitter "></i></a>
</div>
<div class="col-1 iconss_inner" >
    <a href="<?= Unit::findOne(['slug' => 'facebook'])->getModelByType()->get() ?>"><i
                style="color:#4267B2; font-size:20px" class="fab fa-facebook-square "></i></a>
</div>
<div class="col-1 iconss_inner" >
    <a href="<?= Unit::findOne(['slug' => 'instagram'])->getModelByType()->get() ?>"><i
                style="color:#bc2a8d; font-size:20px" class="fab fa-instagram "></i></a>
</div>
<div class="col-1 iconss_inner" class="icon-bumerang">
    <a href="<?= Unit::findOne(['slug' => 'youtube'])->getModelByType()->get() ?>"><i
                style="color:	#FF0000; font-size:20px" class="fab fa-youtube "></i></a>
</div>
<div class="col-1 iconss_inner" >
    <a href="<?= Unit::get('tiktok'); ?>"><i style="color:#000; font-size:18px" class="fab fa-tiktok"></i></a>
</div>


