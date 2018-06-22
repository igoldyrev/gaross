<?php
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/metatags.php");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/keywords.php");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/navigation-mobile.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/header.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/navigation.html");

echo "<title>$titleconst";
echo $keywords[0][title];
echo "</title>";
echo "<meta name='description' content='";
echo $keywords[0][description];
echo "'/>";
echo "<meta name='keywords' content='";
echo $keywords[0][keywords];
echo "'/>" ?>

<div class="wrapper">
  <h1 class="title title-h1 index__title">ООО «ГАРОСС» успешно работает с 2010 года</h1>
  <p class="text">Основное направление деятельности предприятия - комплексные решения в области строительства,
    проектирования, энергетики, обеспечения безопасности и связи государственных и коммерческих структур, предприятий
    энергетического, нефтегазового и оборонного комплекса, а также объектов железнодорожного и воздушного
    транспорта.</p>
  <h2 class="title title-h2">Основные виды работ:</h2>
  <div class="index__work-wrap">
    <div class="index__work">
      <img class="index__img" src="/img/index/civil_engineering.jpg"
           alt="Комплексное промышленное и гражданское строительство">
      <h2 class="index__name">Комплексное промышленное и гражданское строительство</h2>
    </div>
    <div class="index__work">
      <img class="index__img" src="/img/index/drawing_project.jpg" alt="Проектирование">
      <h2 class="index__name">Проектирование</h2>
    </div>
    <div class="index__work">
      <img class="index__img" src="/img/index/ventilation_installation.jpg" alt="Монтаж оборудования">
      <h2 class="index__name">Поставка, монтаж и пуско-наладка всего необходимого оборудования для систем водоснабжения
        и канализации, вентиляции, бесперебойного электропитания, сигнализации и связи</h2>
    </div>
    <div class="index__work">
      <img class="index__img" src="/img/index/service.png" alt="Гарантийное и постгарантийное техническое обслуживание">
      <h2 class="index__name">Гарантийное и постгарантийное техническое обслуживание</h2>
    </div>
  </div>
  <h2 class="title title-h2">Для решения данных задач ООО «ГАРОСС» имеет все необходимые лицензии</h2>
  <p class="text">Свидетельство <a class="link" href="licenses#sro-stroiteli-urala">СРО «Строители Урала»</a> № С –
    171-59-0961-59-220317 от 22.03.2017 г.</p>
  <p class="text">Свидетельство <a class="link" href="licenses#sro-project-work">СРО «Проектные организации
      Урала»</a> № П –
    112-59-0170-59-290317 от 29.03.2017 г.</p>
  <p class="text">Лицензия <a class="link" href="licenses#mchs">МЧС № 59-Б/00513</a> от 13.07.2017 г.</p>
  <p class="text">Сертификат соответствия ISO</p>
  <p class="text">А также располагает высококвалифицированным коллективом проектировщиков, менеджеров, инженеров,
    монтажников, прошедших обучение и сертификацию.</p>
</div>
<?php include($_SERVER["DOCUMENT_ROOT"] . "/blocks/footer.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/counters.html"); ?>
