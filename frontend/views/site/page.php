<?php

use afzalroq\cms\entities\front\Menu;

$options = Menu::getMenu('prayer-lessons', false);

?>
<br xmlns="" xmlns=""><br>

<div class="container">
    <div class="row p-0">
        <div class="col-12 p-0">
            <img style="width: 100%" src="/img/header_images.jpg" alt="">
        </div>
    </div>
</div>
<div class="container">
    <div class="row">`

    </div>
</div>
<div class="cd-articles ">
    <?php foreach ($options as $option):  ?>
        <?php if (empty($option['children'])): ?>
            <article>
                <div class="in_block" style="border-radius:0px; margin-bottom:20px; ">
                    <div class="row" style="padding:30px;">
                        <h2 id=<?="block". $option['id'] ?> class="title_block"><?= $option['name'] ?></h2>
                        <div class="text_islom"><p><?= $option['content'] ?></p>
                        </div>
                    </div>
                </div>
            </article>
        <?php endif; ?>
        <?php if (!empty($option['children'])): ?>
            <article>
                <?php foreach ($option['children'] as $child): ?>
                    <div class="in_block" style="border-radius:0px; margin-bottom:20px; ">
                        <div class="row" style="padding:30px;">
                            <h2 id=<?="block". $child['id'] ?> class="title_block"><?= $child['name'] ?></h2>
                            <div class="text_islom">
                                <p><?= $child['content'] ?></p>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </article>
        <?php endif; ?>
    <?php endforeach; ?>


    <aside class="cd-read-more" style="">
        <ul style="padding: 0;">
            <?php foreach ($options as $option): ?>
                <?php if (empty($option['children'])): ?>
                    <li>
                        <a href="">
                            <em><?= $option['name'] ?></em>
                            <svg x="0px" y="0px" width="36px" height="36px" viewBox="0 0 36 36">
                                <circle fill="none" stroke="#2a76e8" stroke-width="2" cx="18" cy="18" r="16"
                                        stroke-dasharray="100 100" stroke-dashoffset="100"
                                        transform="rotate(-90 18 18)"></circle>
                            </svg>
                        </a>
                    </li>
                <?php endif; ?>
                <?php if (!empty($option['children'])): ?>
                    <li>
                        <a href="" class="faq_inner1">
                            <em><?= $option['name'] ?>
                                <div style="float: right"><i class="faq_icon fas fa-chevron-down"></i></div>
                            </em>
                            <svg x="0px" y="0px" width="36px" height="36px" viewBox="0 0 36 36">
                                <circle fill="none" stroke="#2a76e8" stroke-width="2" cx="18" cy="18" r="16"
                                        stroke-dasharray="100 100" stroke-dashoffset="100"
                                        transform="rotate(-90 18 18)"></circle>
                            </svg>
                        </a>
                        <div class="faq_inner">
                            <div class="multi-collapse" style="padding-left: 40px">
                                <?php foreach ($option['children'] as $child): ?>
                                    <div class="nav-item nav-link islom_link<?=$child['id']?> sub_link" href=<?="#block". $child['id'] ?>>
                                        <span class="p_menu"><?= $child['name'] ?></span>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    </li>
                <?php endif; ?>
            <?php endforeach; ?>

        </ul>
    </aside>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        let passedArray =<?php echo json_encode($options); ?>;

        Array.prototype.forEach.call(passedArray, item => {
            console.log(item)
            if (item.children){
                Array.prototype.forEach.call(item.children, child => {
                    $(".islom_link" + child.id).click(function () {
                        $([document.documentElement, document.body]).animate({
                            scrollTop: $("#block" + child.id).offset().top
                        }, 300);
                    });
                });
            }
        })
    </script>
</div

