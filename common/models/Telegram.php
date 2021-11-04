<?php

namespace common\models;

class Telegram
{

    public $text;
    private $_token = '1857269479:AAHO_-M5kYu1_SRQK7ew9OLjfLYk6Z2tyuw';
    private $_chatId = '-1001420310130';
    private $_params = [];

    public function __construct($text = null)
    {
        $this->_params = [
            'chat_id' => $this->_chatId,
            'parse_mode' => 'HTML',
            'text' => $text ?: 'Сегодня ' . date('d.m.Y') . ' ' . date('H:i:s') . '.Сайт активен!',
        ];
    }


    public function sendMessage()
    {
        return file_get_contents('https://api.telegram.org/bot' . $this->_token . '/sendMessage?' . http_build_query($this->_params));

    }


}