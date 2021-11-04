<?php

namespace common\helpers;

use afzalroq\cms\entities\front\Items;
use Yii;

class ArticleHelper
{


    public static function checkCount(Items $item)
    {
        $id = $item->id;
        $session = Yii::$app->session;
        $articles = $session->get('session_items');
        if (!isset($articles[$id])) {
            if (empty($articles)) {
                $articles = [
                    $id => $id
                ];
                $item->views_count += 1;
                $item->save();
            } else {
                $articles += [
                    $id => $id
                ];
                $articles = [
                    $id => $id
                ];
                $item->views_count += 1;
                $item->save();
            }
            $session->set('session_items', $articles);
            return $session->get('session_items');
        } else {
            $articles = [];
            return $session->get('session_items');
        }

    }

}