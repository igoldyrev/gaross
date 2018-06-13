<?php
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/metatags.php");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/keywords.php");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/navigation-mobile.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/header.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/navigation.html");

echo "<title>$titleconst"; echo $keywords[2][title]; echo "</title>";
echo "<meta name='description' content='"; echo $keywords[2][description]; echo "'/>'";
echo "<meta name='keywords' content='"; echo $keywords[2][keywords]; echo "'/>'" ?>

<div class="wrapper">
  <h1 class="title title-h1">Заказчики</h1>
  <div class="order__wrap">
    <div class="order">
      <img class="order__logo" src="/img/orders/chmz-logo.png" alt="ЧМЗ">
      <div class="order__description">
        <p class="order__name">ЧМЗ</p>
        <p class="order__annotation">Чепецкий механический завод - предприятие госкорпорации "Росатом".</p>
      </div>
    </div>
    <div class="order">
      <img class="order__logo" src="/img/orders/nikiret.png"
           alt="НАУЧНО-ИССЛЕДОВАТЕЛЬСКИЙ И КОНСТРУКТОРСКИЙ ИНСТИТУТ РАДИОЭЛЕКТРОННОЙ ТЕХНИКИ">
      <div class="order__description">
        <p class="order__name">НАУЧНО-ИССЛЕДОВАТЕЛЬСКИЙ И КОНСТРУКТОРСКИЙ ИНСТИТУТ РАДИОЭЛЕКТРОННОЙ ТЕХНИКИ</p>
        <p class="order__annotation">Современный научно-производственный комплекс.</p>
      </div>
    </div>
    <div class="order">
      <img class="order__logo" src="/img/orders/gaz.png" alt="ООО Газпром межрегионгаз Пермь">
      <div class="order__description">
        <p class="order__name">ООО "Газпром межрегионгаз Пермь"</p>
        <p class="order__annotation">Компания, входящая в структуру ООО «Газпром межрегионгаз» (100% дочернее
          предприятие ОАО «Газпром»). Осуществляет поставку природного газа всем категориям потребителей Пермского
          края.</p>
      </div>
    </div>
    <div class="order">
      <img class="order__logo" src="/img/orders/metafrax-logo.png" alt="МЕТАФРАКС">
      <div class="order__description">
        <p class="order__name">МЕТАФРАКС</p>
        <p class="order__annotation">Одно из самых динамично развивающихся химических предприятий в современной России,
          крупнейший производитель метанола и его производных.</p>
      </div>
    </div>
    <div class="order">
      <img class="order__logo" src="/img/orders/apelsin.png" alt="ТЦ Апельсин">
      <div class="order__description">
        <p class="order__name">ТЦ Апельсин</p>
        <p class="order__annotation">Уголок детства в Закамске.</p>
      </div>
    </div>
    <div class="order">
      <img class="order__logo" src="/img/orders/kontur.gif" alt="ООО Контур">
      <div class="order__description">
        <p class="order__name">ООО "Контур"</p>
        <p class="order__annotation">Специализированная организация по экспертизе промышленной
          безопасности, монтажу, ремонту, реконструкции технических
          устройств на опасных производственных объектах.</p>
      </div>
    </div>
    <div class="order">
      <img class="order__logo" src="/img/orders/almed.png" alt="Санаторий-профилакторий «Алмед">
      <div class="order__description">
        <p class="order__name">Санаторий-профилакторий "Алмед"</p>
        <p class="order__annotation">Лучшее медицинское учреждение Российской Федерации.</p>
      </div>
    </div>
    <div class="order">
      <img class="order__logo" src="/img/orders/cbkkama.png" alt="ЦБК Кама">
      <div class="order__description">
        <p class="order__name">ЦБК Кама</p>
        <p class="order__annotation">Экслюзивный производитель мелованной бумаги в России!</p>
      </div>
    </div>
    <div class="order">
      <img class="order__logo" src="/img/orders/rosrezerv.png" alt="ФГКУ Комбинат Алый Стяг Росрезерва">
      <div class="order__description">
        <p class="order__name">ФГКУ Комбинат "Алый Стяг" Росрезерва</p>
        <p class="order__annotation">Федеральное государственное казенное учреждение Комбинат "Алый Стяг" управления
          федерального агенства по государственным резервам по Приволжскому федеральному округу.</p>
      </div>
    </div>
    <div class="order">
      <img class="order__logo" src="/img/orders/infguard.gif" alt="НТЦ Информационная безопасность">
      <div class="order__description">
        <p class="order__name">НТЦ "Информационная безопасность"</p>
        <p class="order__annotation">НТЦ «Информационная безопасность» осуществляет весь спектр услуг от обследования,
          проектирования и создания обьектов защиты информации до их сопровождения и модернизации.</p>
      </div>
    </div>
    <div class="order">
      <img class="order__logo" src="/img/orders/moto.png" alt="Мотовилихинские заводы">
      <div class="order__description">
        <p class="order__name">Мотовилихинские заводы</p>
        <p class="order__annotation">«Мотовилихинские заводы» — бренд, известный далеко за пределами Пермского края.</p>
      </div>
    </div>
  </div>
</div>
<?php include($_SERVER["DOCUMENT_ROOT"] . "/blocks/footer.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/counters.html"); ?>
