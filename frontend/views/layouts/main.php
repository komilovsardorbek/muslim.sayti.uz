<?php

/* @var $this View */

/* @var $content string */

use frontend\assets\AppAsset;
use frontend\widgets\FooterWidget;
use frontend\widgets\Header;
use yii\helpers\Html;
use yii\web\View;

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta http-equboiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="ProActive Media"/>
    <?php $this->head() ?>
    <?php $this->registerCsrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.6.22/dist/css/uikit.min.css"/>
    <!-- UIkit JS -->
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.22/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.6.22/dist/js/uikit-icons.min.js"></script>
</head>
<body onload="" class="stretched">

<?php $this->beginBody() ?>

<?= Header::widget() ?>

<?= $content ?>

<?= FooterWidget::widget() ?>


<script language="javascript" type="text/javascript">
    top_js = "1.0";
    top_r = "id=19521&r=" + escape(document.referrer) + "&pg=" + escape(window.location.href);
    document.cookie = "smart_top=1; path=/";
    top_r += "&c=" + (document.cookie ? "Y" : "N")
</script>
<script language="javascript1.1" type="text/javascript">
    top_js = "1.1";
    top_r += "&j=" + (navigator.javaEnabled() ? "Y" : "N")
</script>
<script language="javascript1.2" type="text/javascript">
    top_js = "1.2";
    top_r += "&wh=" + screen.width + 'x' + screen.height + "&px=" +
        (((navigator.appName.substring(0, 3) == "Mic")) ? screen.colorDepth : screen.pixelDepth)
</script>
<script language="javascript1.3" type="text/javascript">
    top_js = "1.3";
</script>
<script language="JavaScript" type="text/javascript">
    top_rat = "&col=0063AF&t=ffffff&p=E6850F";
    top_r += "&js=" + top_js + "";
</script>

<?php $this->endBody() ?>

</body>
</html>
<?php $this->endPage() ?>
