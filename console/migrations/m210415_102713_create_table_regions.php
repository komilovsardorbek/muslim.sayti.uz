<?php


use yii\db\Migration;

/**
 * Class m210415_102713_create_table_regions
 */
class m210415_102713_create_table_regions extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('regions', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'parent_id' => $this->integer()->Null(),
        ]);

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m210415_102713_create_table_regions cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m210415_102713_create_table_regions cannot be reverted.\n";

        return false;
    }
    */
}
