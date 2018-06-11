<?php
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/metatags.php");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/navigation-mobile.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/header.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/navigation.html"); ?>

<div class="wrapper">
  <h1 class="title title-h1">Лицензии</h1>
  <div class="license" id="mchs">
    <h2 class="title title-h2">Лицензия МЧС</h2>
    <p class="text">На осуществление деятельности по монтажу , техническому обслуживанию и ремонту средств обеспечения
      пожарной безопасности зданий и сооружений</p>
    <div class="license__wrap">
      <img class="license__img" src="/img/licenses/mchs-1.jpg" alt="Лицензия МЧС<">
    </div>
    <div class="license__link-inner">
      <i class="fa fa-file-pdf-o license__icon"></i><a class="link license__link" target="_blank"
                                                       href="/img/licenses/mchs-pdf.pdf">Смотреть в PDF</a>
    </div>
  </div>
  <div class="license" id="sro-stroiteli-urala">
    <h2 class="title title-h2">СРО "Строители Урала"</h2>
    <p class="text">Свидетельство о допуске к определенным видам работ, которые оказывают влияние на безопасность
      объектов капитального строительства</p>
    <div class="license__wrap">
      <img class="license__img" src="/img/licenses/smr-220317-0.jpg" alt="СРО Строители Урала">
    </div>
    <div class="license__link-inner">
      <i class="fa fa-file-pdf-o license__icon"></i><a class="link license__link" target="_blank"
                                                       href="/img/licenses/smr-220317-pdf.pdf">Смотреть в PDF</a>
    </div>
  </div>
  <div class="license" id="sro-project-work">
    <h2 class="title title-h2">СРО на проектные работы</h2>
    <div class="license__wrap">
      <img class="license__img" src="/img/licenses/project-work-0.jpg" alt="СРО на проектные работы">
    </div>
    <div class="license__link-inner">
      <i class="fa fa-file-pdf-o license__icon"></i><a class="link license__link" target="_blank"
                                                       href="/img/licenses/project-work-pdf.pdf">Смотреть в PDF</a>
    </div>
  </div>
</div>
<?php include($_SERVER["DOCUMENT_ROOT"] . "/blocks/footer.html");
include($_SERVER["DOCUMENT_ROOT"] . "/blocks/counters.html"); ?>
