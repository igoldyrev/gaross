<?php
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/metatags.php");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/header.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/navigation.html"); ?>

<div class="wrapper">
  <div class="tab tab__about tab--active">
    <h1 class="title title-h1">ООО «ГАРОСС» успешно работает с 2010 года</h1>
    <p class="text">Основное направление деятельности предприятия - комплексные решения в области строительства,
      проектирования, энергетики, обеспечения безопасности и связи государственных и коммерческих структур, предприятий
      энергетического, нефтегазового и оборонного комплекса, а также объектов железнодорожного и воздушного
      транспорта.</p>
    <p class="text">ООО «ГАРОСС» выполняет полный цикл работ по:</p>
    <ul class="list list__unsorted">
      <li>комплексному промышленному и гражданскому строительству;</li>
      <li>проектированию;</li>
      <li>поставке, монтажу и пуско-наладке всего необходимого оборудования для систем водоснабжения и канализации,
        вентиляции, бесперебойного электропитания, сигнализации и связи;
      </li>
      <li>гарантийному и постгарантийному техническому обслуживанию.</li>
    </ul>
  </div>
  <div class="tab tab__licenses">
    Страница с лицензиями
  </div>
  <div class="tab tab__orders">
    Заказчики
  </div>
  <div class="tab tab__letters">
    <h1 class="title title-h1">Благодарственные письма</h1>
    <div class="letter__wrap">
      <div class="letter">
        <h3 class="title title-h3 letter__title">ФКГУ Комбинат "Алый Стяг"</h3>
        <img class="img letter__img" src="/img/letters/alyi-styag-osveshenie.jpg" alt="">
      </div>
      <div class="letter">
        <h3 class="title title-h3 letter__title">ФКГУ Комбинат "Алый Стяг"</h3>
        <img class="img letter__img" src="/img/letters/alyi-styag-psd.jpg" alt="">
      </div>
      <div class="letter">
        <h3 class="title title-h3 letter__title">ООО ЦБК Кама"</h3>
        <img class="img letter__img" src="/img/letters/cbk-kama.jpg" alt="">
      </div>
    </div>
  </div>
  <div class="tab tab__contacts">
    Контакты
  </div>
</div>
<?php include($_SERVER["DOCUMENT_ROOT"] . "/blocks/footer.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/counters.html"); ?>
