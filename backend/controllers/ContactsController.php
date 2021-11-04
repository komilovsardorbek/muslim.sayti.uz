<?php

namespace backend\controllers;

use backend\models\ContactsSearch;
use Yii;
use yii\web\Controller;

class ContactsController extends Controller
{

    public function actionIndex()
    {
        $searchModel = new ContactsSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }
}
