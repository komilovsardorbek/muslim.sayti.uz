<?php

namespace frontend\controllers;

use afzalroq\cms\entities\Collections;
use afzalroq\cms\entities\Entities;
use afzalroq\cms\entities\front\Items;
use afzalroq\cms\entities\front\Options;
use afzalroq\cms\entities\OaI;
use Yii;
use yii\data\ActiveDataProvider;
use yii\data\Pagination;
use yii\web\Controller;


class CController extends Controller
{
    public function actionCollection(string $c)
    {
        if ($c === 'author') {
            return $this->render('author-list', [
                'authors' => Options::find()
                    ->where(['collection_id' => Collections::findOne(['slug' => 'author'])->id])
                    ->andWhere(['>', 'depth', 0])
                    ->orderBy('created_at DESC')
                    ->all()
            ]);
        }
        if (in_array($c, ['prayer-lessons', 'iyman', 'prayer', 'fasting', 'zakot', 'haj', 'quran', 'lessons'])) {
            return $this->render('page', [
                'c' => $c
            ]);
        }

    }

    public function actionOption(string $c, string $o)
    {
        if ($c === 'author') {
            $typeOption = Options::findOne(['slug' => $o]);
            $typeOptionIds = OaI::find()->select('item_id')->where(['option_id' => $typeOption->id])->column();
            return $this->render('author', [
                'articles' => new ActiveDataProvider([
                    'query' => Items::find()
                        ->where(['id' => $typeOptionIds])
                        ->andWhere(['!=', 'text_1' . "_" . Yii::$app->params['l'][Yii::$app->language], ""])
                        ->orderBy('date_0 DESC'),
                    'pagination' => [
                        'pageSize' => 6,
                    ],
                ]),
                'author' => $typeOption,
            ]);

        }

        if ($c === 'tags') {
            $OaI = OaI::find()->select('item_id')->where(['option_id' => Options::findOne(['slug'=> $o])->id])->column();
            $items = Items::find()->where(['id' => $OaI]);
            $countQuery = clone $items;
            $pages = new Pagination(['totalCount' => $countQuery->count(), 'defaultPageSize' => 6]);

            return $this->render('category-list', [
                'articles' => $items->offset($pages->offset)
                    ->limit($pages->limit)
                    ->all(),
                'pages' => $pages,
                'option' => Options::findOne(['slug'=> $o]),
            ]);
        }
    }

    public function actionEntity(string $e)
    {
    }

    public function actionItem(string $e, int $i)
    {

        if ($e === 'posts') {
            $item = Items::findOne($i);
            $articles = Items::find()
                ->where(['entity_id' => $item->entity_id])
                ->andWhere(['!=', 'text_1' . "_" . Yii::$app->params['l'][Yii::$app->language], ""])
                ->andWhere(['<', 'date' . "_" . Yii::$app->params['l'][Yii::$app->language], time()])
                ->andWhere(['<>', 'id', $i])
                ->orderBy(['date' . "_" . Yii::$app->params['l'][Yii::$app->language] => SORT_DESC]);
            $dataProvider = new ActiveDataProvider([
                'query' => $articles,
                'pagination' => [
                    'pageSize' => 6,
                ],
            ]);
            return $this->render('articles-view', [
                'item' => $item,
                'banners' => Items::find()->where(['entity_id' => Entities::findOne(['slug' => 'banner'])->id])->limit(4)->all(),
                'articles' => $dataProvider,
                'optionType' => isset($item->options['articles']) ? Options::findOne(['id' => $item->options['articles']]) : '',
                'tags' => Options::find()->where(['collection_id' => Collections::findOne(['slug' => 'tags'])->id])->andWhere(['>', 'depth', 0])->all(),
            ]);
        }

        if ($e === 'pages') {
            $item = Items::findOne($i);
            $item->updateViewsCount();
            return $this->render('pages', [
                'item' => $item,
                'banners' => Items::find()->where(['entity_id' => Entities::findOne(['slug' => 'banner'])->id])->limit(4)->all(),
                'entities' => Entities::findOne(['slug' => $e]),
                'tags' => Options::find()->where(['collection_id' => Collections::findOne(['slug' => 'tags'])->id])->andWhere(['>', 'depth', 0])->all(),

            ]);
        }

    }
}
