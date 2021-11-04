<?php

namespace frontend\controllers;

use afzalroq\cms\entities\Entities;
use afzalroq\cms\entities\front\Items;
use afzalroq\cms\helpers\SearchHelper;
use Yii;
use yii\data\ActiveDataProvider;
use yii\web\Controller;

/**
 * Site controller
 */
class SearchController extends Controller
{

    public function actionIndex($q = '')
    {
        $q = SearchHelper::validate($q = '');
        $langId = Yii::$app->params['cms']['languageIds'][Yii::$app->language];
        $dataProvider = new ActiveDataProvider([
            'query' => Items::find()
                ->andFilterWhere(['or',
                    ['entity_id' => Entities::findOne(['slug' => 'posts'])->id],
                ])
                ->andFilterWhere(['or',
                    ['like', 'text_1_' . $langId, $q],
                    ['like', 'text_2_' . $langId, $q],
                    ['like', 'text_3_' . $langId, $q],
                    ['like', 'text_4_' . $langId, $q],
                    ['like', 'text_5_' . $langId, $q],
                    ['like', 'text_6_' . $langId, $q],
                    ['like', 'text_7_' . $langId, $q],
                ]),
            'pagination' => [
                'pageSize' => 6,
            ]
        ]);

        return $this->render('/site/search', [
            'articles' => $dataProvider,
            'q' => $q,
            'title' => Yii::t('app', 'Search')
        ]);
    }

}
