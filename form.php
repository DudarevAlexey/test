<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Главная</title>
  <meta name="description" content="Главная">
  <link rel="icon" type="image/png" href="favicon.ico" />
  <link rel="stylesheet" type="text/css"  href="/css/fonts.css">
  <link rel="stylesheet" type="text/css"  href="/css/style.css">
</head>
<body>
  <main>
      <header>
          <a href="index.php" class="logo">
              <img src="../images/logo.png" alt="">
          </a>
      </header>
      <section class="form">
          <div class="container">
              <div class="title">
                  Заполните анкету соискателя:
              </div>
              <form class="rf" action="" method="post">
                  <div class="wrapper select">
                      <select required>
                          <option value="" disabled selected>Выберите город</option>
                          <option value="1">Город</option>
                          <option value="2">Город</option>
                      </select>
                  </div>
                  <div class="wrapper">
                      <input class="rfield" id="user_surname" type="text" placeholder="Введите фамилию" required>
                  </div>
                  <div class="wrapper">
                      <input class="rfield" id="user_name" type="text" placeholder="Введите имя" required>
                  </div>
                  <div class="wrapper">
                      <input class="rfield" id="user_citizenship" type="text" placeholder="Введите гражданство" required>
                  </div>
                  <div class="wrapper">
                      <input id="user_phone" type="tel" name="phone" placeholder="+7 (___) ___-__-__" class="rfield masked-input" required>
                  </div>
                  <div class="text">
                      Выберите должность
                  </div>
                  <div class="wrapper-position">
                      <label class="label">
                          <input class="rfield" id="cook" type="checkbox" name="Повар" value="">
                          <span>
                              Повар
                          </span>
                      </label>
                      <label class="label">
                          <input class="rfield" id="seller" type="checkbox" name="Продавец-кассир" value="">
                          <span>
                              Продавец-кассир
                          </span>
                      </label>
                      <label class="label">
                          <input class="rfield" id="courier" type="checkbox" name="Курьер" value="">
                          <span>
                              Курьер
                          </span>
                      </label>
                  </div>
                  <div class="text">
                      Рассматриваете ли вы переезд в другой город
                  </div>
                  <div class="wrapper-moving">
                      <label class="label">
                          <input class="rfield" id="moving_yes" type="checkbox" name="Да" value="">
                          <span>
                              Да
                          </span>
                      </label>
                      <label class="label">
                          <input class="rfield" id="moving_no" type="checkbox" name="Нет" value="">
                          <span>
                              Нет
                          </span>
                      </label>
                  </div>
                  <div class="text">
                      Комментарии
                      <span>(необязательно для заполнения)</span>
                  </div>
                  <div class="wrapper textarea">
                      <textarea rows="10" cols="45" name="text" placeholder="Комментарии"></textarea>
                  </div>
                  <div class="wrapper-personal">
                      <label class="label">
                          <input class="rfield" type="checkbox" name="" value="" required>
                          <span>
                              Согласие на обработку или отправку
                          </span>
                      </label>
                      <a href="#politics-popup" class="personal">«персональных данных»</a>
                      <div id="politics-popup" class="politics-wrapper mfp-hide">
                          <strong>
                              1. Общие положения
                          </strong>
                          <p>
                              1.1. Настоящая Политика конфиденциальности определяет общие условия сбора и обработки персональных данных пользователей сайта, принадлежащего ООО «Суши-Маркет.COM» (далее — Суши-Маркет).
                              1.2. Суши-Маркет осуществляет обработку следующих персональных данных:
                              полное имя;
                              адрес электронной почты;
                              номер мобильного телефона;
                              город;
                              дата рождения;
                              гражданство.
                          </p>
                          <strong>
                              2. Цели обработки персональных данных
                          </strong>
                          <p>
                              2.1. Оператор Суши-Маркет обрабатывает персональные данные пользователей с целью:
                              предоставления услуг;
                          </p>
                          <strong>
                              3. Доступ третьих лиц к персональным данным
                          </strong>
                          <p>
                              3.1. Оператор Суши-Маркет может передать персональные данные пользователя третьей стороне в следующих случаях:
                              если передача персональных данных необходима для услуги;
                              если пользователь дал согласие на осуществление передачи своих данных третьей стороне;
                          </p>
                          <strong>
                              4. Обязанности оператора Суши-Маркет по защите персональных данных
                          </strong>
                          <p>
                              4.1. Оператор Суши-Маркет обязан принимать необходимые организационные
                              и технические меры для обеспечения конфиденциальности, целостности
                              и доступности персональных данных пользователей.
                              4.2. Оператор Суши-Маркет обязан своевременно производить оценку соответствия требованиям законодательства РФ в области защиты информации.
                          </p>
                          <strong>
                              5. Обратная связь
                          </strong>
                          <p>
                              5.1. Все предложения и вопросы по использованию сайта следует направлять
                              в службу поддержки по адресу электронной почты marketolog@sushi-market.com
                          </p>
                      </div>
                  </div>
                  <button class="btn_submit disabled" type="button" name="button">
                      <span>
                          Отправить анкету
                      </span>
                  </button>
                  <div id="checked" class="thanks">

                  </div>
              </form>
          </div>
      </section>
      <?include("footer.php")?>
  </main>
</body>
<script src="/js/jquery-3.2.1.min.js"></script>
<script src="/js/jquery.magnific-popup.min.js"></script>
<script src="/js/jquery.maskedinput.min.js"></script>
<script src="/js/main.js"></script>
<script src="/js/required_fields.js"></script>
</html>
