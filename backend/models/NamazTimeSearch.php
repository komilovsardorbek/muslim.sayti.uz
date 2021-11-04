<?php

namespace backend\models;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use backend\models\NamazTime;

/**
 * NamazTimeSearch represents the model behind the search form of `backend\models\NamazTime`.
 */
class NamazTimeSearch extends NamazTime
{
    /**
     * {@inheritdoc}
     */
    public $regionName;
    public $date_from;
    public $date1;

    public function rules()
    {
        return [
//            [['id', 'date',  'system_date', 'fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'], 'integer'],
            [['region_id', 'name', 'regionName'], 'safe'],
            [['system_date'], 'integer'],
            [['date'], 'date', 'format' => 'php:Y-m-d'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = NamazTime::find()->joinWith(['region']);
//        dd($query);
        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $dataProvider->sort->attributes['regionName'] = [
            'asc' => ['regions.name' => SORT_ASC],
            'desc' => ['regions.name' => SORT_DESC],
        ];

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            return $dataProvider;
        }
        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'system_date' => $this->system_date,
            'region_id' => $this->region_id,
        ]);

        $query->andFilterWhere(['like', 'regions.name', $this->regionName])
            ->andFilterWhere(['=', 'date', $this->date ? strtotime($this->date) : null]);

        return $dataProvider;
    }
}
