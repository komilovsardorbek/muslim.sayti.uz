<?php

namespace common\models;

class DateConvertor
{
    public static function dateToSystemDate($commonDate)
    {
        $systemDate = 0;
        $year = date("y", $commonDate);
        $month = date("m", $commonDate);
        $systemDate += self::getDaysCountByYear($year);
        $systemDate += self::getDaysSumByMonth($month, $year);
        return $systemDate + date("d", $commonDate);
    }

    private static function getDaysCountByYear($year): int
    {
        switch ($year % 4) {
            case 0:
                return 0;
            case 1:
                return 366;
            case 2:
                return 731;
            case 3:
                return 1096;
        }
    }

    public static function systemDateToDate($systemDate)
    {
        $year = self::getCloserKabisaYear() + floor($systemDate / 365);
        $systemDate -= self::getDaysCountByYear($year);
        $month = ceil($systemDate / 30);
        $date = $systemDate - self::getDaysSumByMonth($month, $year);
        return $date . '.' . $month . '.' . $year;
    }

    private static function getDaysSumByMonth($month, $year): int
    {
        $daysCount = 0;
        for ($i = 1; $i < $month; $i++) {
            switch ($i) {
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                case 1:
                    $daysCount += 31;
                    break;
                case 2:
                    if ($year % 4 === 0) {
                        $daysCount += 29;
                    } else {
                        $daysCount += 28;
                    }
                    break;
                case 6:
                case 9:
                case 11:
                case 4:
                    $daysCount += 30;
                    break;
            }
        }
        return $daysCount;
    }

    private static function getCloserKabisaYear()
    {
        return date("y") - date("y") % 4;
    }
}
