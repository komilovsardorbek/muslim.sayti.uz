<?php

namespace frontend\controllers;

use afzalroq\cms\entities\Collections;
use afzalroq\cms\entities\Entities;
use afzalroq\cms\entities\front\Items;
use afzalroq\cms\entities\front\Menu;
use afzalroq\cms\entities\OaI;
use afzalroq\cms\entities\unit\Categories;
use afzalroq\cms\entities\unit\Unit;
use backend\controllers\NamazTimeController;
use backend\models\NamazTime;
use backend\models\Regions;
use common\models\Feedback;
use Yii;
use yii\captcha\CaptchaAction;
use yii\data\ActiveDataProvider;
use yii\helpers\Html;
use yii\web\Controller;
use yii\web\ErrorAction;


class SiteController extends Controller
{

    public function actions()
    {
        return [
            'error' => [
                'class' => ErrorAction::class,
            ],
            'captcha' => [
                'class' => CaptchaAction::class,
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    public function actionIndex()

    {
        $article_count = Items::find()->where(['entity_id' => Entities::findOne(['slug' => 'posts'])->id])->count() - 6;
        $articles = Items::find()->where(['entity_id' => Entities::findOne(['slug' => 'posts'])->id])->all();
        $sliderItemIds = OaI::find()->where(['option_id' => Collections::findOne(['slug' => 'use-in-slider'])->options[1]->id])->select('item_id')->column();
        return $this->render('index', [
            'news' => Items::find()
                ->where(['entity_id' => Entities::findOne(['slug' => 'posts'])->id])
                ->andWhere(['!=', 'text_1' . "_" . \Yii::$app->params['l'][\Yii::$app->language], ""])
                ->andWhere(['<', 'date' . "_" . \Yii::$app->params['l'][\Yii::$app->language], time()])
                ->orderBy(['date' . "_" . \Yii::$app->params['l'][\Yii::$app->language] => SORT_DESC])
                ->limit(4)
                ->all(),
            'sliderItems' => Items::find()
                ->where(['id' => $sliderItemIds])
                ->andWhere(['!=', 'text_1' . "_" . \Yii::$app->params['l'][\Yii::$app->language], ""])
                ->andWhere(['<', 'date' . "_" . \Yii::$app->params['l'][\Yii::$app->language], time()])
                ->all(),
            'banners' => Items::find()->where(['entity_id' => Entities::findOne(['slug' => 'banner'])->id])->limit(4)->all(),
            'socials' => Unit::find()->where(['category_id' => Categories::findOne(['slug' => 'socials'])->id])->all(), // todo ???
            'advertisements' => Items::find()->where(['entity_id' => Entities::findOne(['slug' => 'advertising'])->id])->all(),
            'articles' => new ActiveDataProvider([
                'query' => Items::find()
                    ->where(['entity_id' => Entities::findOne(['slug' => 'posts'])->id])
                    ->andWhere(['!=', 'text_1' . "_" . \Yii::$app->params['l'][\Yii::$app->language], ""])
                    ->andWhere(['<', 'date' . "_" . \Yii::$app->params['l'][\Yii::$app->language], time()])
                    ->andWhere(['<', 'id', $articles["$article_count"]->id])
                    ->orderBy(['date' . "_" . \Yii::$app->params['l'][\Yii::$app->language] => SORT_DESC]),
                'pagination' => [
                    'pageSize' => 6,
                ],
            ]),
            'authors' => Collections::findOne(['slug' => 'author']),
        ]);
    }

    public function actionContacts()
    {
        $model = new Feedback();
        if ($model->load(Yii::$app->request->post()) && $model->validate()) {
            try {
                $model->message =Html::encode($model->message);
                $model->save();
                Yii::$app->session->setFlash('success', 'Thank you for contacting us. We will respond to you as soon as possible.');
            } catch (\Exception $e) {
                Yii::$app->session->setFlash('error', 'An error occurred.' . $e->getMessage());
            }
            return $this->refresh();
        }

        return $this->render('contact', [
            'model' => $model,
        ]);
    }

    public function actionTimes($id = null)
    {
        $requestType = Yii::$app->request->isAjax;
        if($requestType){
            $post_date =  $_POST['date'];
            $year = explode('-', $post_date)[1];
            $month = explode('-', $post_date)[0];
            $date = $year . '-' . $month;
        }
        $month_start = strtotime(date(isset($date) ? $date.'-01' : 'Y-m-01'));
        $month_finish=strtotime(date("Y-m-t", $month_start));
        if (!empty($id)){
            $times = NamazTime::find()->where(['region_id' => $id])
                ->andWhere(['>=','date',$month_start])
                ->andWhere(['<=','date',$month_finish])->all();
            return $requestType ? $this->renderAjax('table',[
                'times' => $times,
            ]) : $this->render('time-table',[
                'regions' => Regions::find()->all(),
                'times' => $times,
            ]);
        }
        else {
            return $requestType ? $this->renderAjax('table',[
                'regions' => Regions::find()->all(),
                'times' => NamazTime::find()
                    ->andWhere(['>=','date',$month_start])
                    ->andWhere(['<=','date',$month_finish])
                    ->all(),
            ]) : $this->render('time-table',[
                'regions' => Regions::find()->all(),
                'times' => NamazTime::find()
                    ->andWhere(['>=','date',$month_start])
                    ->andWhere(['<=','date',$month_finish])
                    ->all(),
            ]);
        }


    }

    public function actionPage()
    {
//        dd($options);
        return $this->render('page', [
//            'options' => $options
        ]);
    }
}
