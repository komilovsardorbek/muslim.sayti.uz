<?php

use yii\db\Migration;

/**
 * Class m210303_142524_create_table_feedback
 */
class m210303_142524_create_table_feedback extends Migration
{
    public function safeUp()
    {
        $this->createTable('{{%feedback}}', [
            'id' => $this->primaryKey(),
            'full_name' => $this->string()->notNull(),
            'email_phone' => $this->string()->notNull(),
            'message' => $this->text(),
            'created_at' => $this->integer(),
        ]);

    }

    public function safeDown()
    {
        $this->dropTable('{{%feedback}}');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m210303_142524_create_table_feedback cannot be reverted.\n";

        return false;
    }
    */
}
