<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebBack3</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="FormBlock">
        <form method="POST" id="form">
            <label>
                Имя:<br />
                <input type=text name="field-name" placeholder="Иван Иванов" />
            </label><br />
            <label>
                Поле email:<br />
                <input name="field-email" placeholder="test@example.com" type="email">
            </label><br />
            <label>
                Дата рождения:<br />
                <input name="field-date" value="1964-06-29" type="date" />
            </label><br />
            <label>Пол:</label><br />
            <label ><input type="radio" checked="checked" name="radio-gender" value=1 />
                Мужской</label>
            <label ><input type="radio" name="radio-gender" value=0 />
                Женский</label><br />
            <label>Кол-во конечностей:</label><br />
            <label ><input type="radio" checked="checked" name="radio-limb" value=0 />
                0</label>
            <label ><input type="radio" name="radio-limb" value=1 />
                1</label>
            <label ><input type="radio" name="radio-limb" value=2 />
                2</label>
            <label ><input type="radio" name="radio-limb" value=3 />
                3</label>
            <label ><input type="radio" name="radio-limb" value=4 />
                4</label><br />
            <label>
                Ваши альбомы:<br />
                <select multiple="true" name="superpower[]">
                    <option value="Blessed & Possessed">Blessed & Possessed</option>
                    <option value="The Sacrament of Sin">The Sacrament of Sin</option>
                    <option value="Lupus Dei">Lupus Dei</option>
                    <option value="Sacrament of sin">Sacrament of sin</option>
                </select>
            </label><br />
            <label>
                Биография:<br />
                <textarea name="BIO" placeholder="Расскажите о себе"></textarea>
                <br />
            </label>
            <label>
                <input name="ch" type="checkbox" checked=checked value=1> Ознакомлен с контрактом:<br />
            </label>
            <input type="submit" value="Отправить" />
        </form>
    </div>
</body>
</html>